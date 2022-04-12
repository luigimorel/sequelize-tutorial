// Disable dotenv in production
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const helmet = require('helmet')

// Routes import
const routes = require('./routes')
const app = express()

const port = 3000

const corsOptions = {
  origin: `http://localhost:${process.env.PORT || port}`
}

// Middleware

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('combined'))
app.use(helmet())
app.use('/api', routes)

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on ${process.env.PORT || port}`)
})
