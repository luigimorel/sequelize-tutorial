'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Product.init(
    {
      name: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      inStock: DataTypes.BOOLEAN,
      productImage: DataTypes.STRING,
      price: DataTypes.INTEGER,
      expiryDate: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Product'
    }
  )
  return Product
}
