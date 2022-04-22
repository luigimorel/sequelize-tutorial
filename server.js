// Disable dotenv in a production env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const helmet = require('helmet')

// Routes import
const routes = require('./routes')

// Initialize express
const app = express()

// Port if PORT env variable does not exist in .env
const port = 3000

// CORS
const corsOptions = {
  origin: `http://localhost:${process.env.PORT || port}`
}

// Middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(helmet())

// Routes middleware
app.use('/api', routes)

// Port listener
app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on ${process.env.PORT || port}`)
})
