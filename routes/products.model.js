var database = require('../db/conn');
const Products = () =>{}
Products.getProducts = (id,result) => {
  database.query(`SELECT * FROM products where brand_id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    
    if (res.length) {
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });  
}


module.exports = Products;