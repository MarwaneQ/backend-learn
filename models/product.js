// const Sequelize = require("sequelize");

// const sequelize = require("../util/database");

// const Product = sequelize.define("product", { // Product is the name of the table
//   id: { // id is the name of the column
//     type: Sequelize.INTEGER, // INTEGER is a data type in SQL
//     autoIncrement: true, // autoIncrement is a property that makes the id increase by 1 automatically
//     allowNull: false, // allowNull is a property that makes the id required
//     primaryKey: true, // primaryKey is a property that makes the id the primary key
//   },
//   title: Sequelize.STRING, // title is the name of the column
//   price: { // price is the name of the column
//     type: Sequelize.DOUBLE, // DOUBLE is a data type in SQL
//     allowNull: false, // allowNull is a property that makes the price required
//   },
//   imageUrl: { // imageUrl is the name of the column
//     type: Sequelize.STRING, // STRING is a data type in SQL
//     allowNull: false, // allowNull is a property that makes the imageUrl required
//   },
//   description: { // description is the name of the column
//     type: Sequelize.STRING, // STRING is a data type in SQL
//     allowNull: false, // allowNull is a property that makes the description required
//   },
// }); 

const getDb = require("../util/database").getDb;
class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    
  }
  static fetchAll() {
    
  }
  static findById(id) {
    
  }
}
module.exports = Product; 