'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING,
        trim: true
      },
      quantity: {
        type: Sequelize.INTEGER,
        trim: true,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        trim: true
      },
      inStock: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      productImage: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true
      },
      expiryDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products')
  }
}
