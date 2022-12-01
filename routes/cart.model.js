var database = require('../db/conn');
const Cart = () =>{}
Cart.getProduct = (id,result) => {
  database.query(`SELECT * FROM products where id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    
    if (res.length) {
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });  
}

Cart.getCartItems = (result) => {
  database.query(`SELECT * FROM cart_items`, (err, res) => {
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

Cart.postCartItems = (data,result) => {
  var sql =`INSERT INTO cart_items (product_name,product_image,product_description,size,price,brand_id) VALUES
   ("${data.product_name}","${data.product_image}","${data.product_description}","${data.size}","${data.price}","${data.brand_id}")`;

  database.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    
    if (res.affectedRows) {
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });  
}

module.exports = Cart;