const path = require("path");
const fs = require("fs");
const products = []; // Create an empty array for products

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const product = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(product, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent); // Parse the file content to JSON format if there is no error
      }
      products.push(this);
      fs.writeFile(product, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    fs.readFile(product, (err, fileContent) => {
      if (err) {
        return [];
      }
      return JSON.parse(fileContent);
    });
  }
};
