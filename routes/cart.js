var express = require('express');
var router = express.Router();
// var cart = require('./cart.model');
var cart = require('../public/jsondata/cartitems.json')
router.get('/', async function(req, res, next) {
  console.log('cart route');
  // const data = await getCartData();
  res.status(200).json(cart);
});

// router.post('/', async function(req, res, next) {
//   console.log('cart route post');
//   let id = req.body.id;
//   const checkIfproductExists = await getProductsData(id);
//   console.log(checkIfproductExists);
//   if(checkIfproductExists) {
//     const data = await postData(checkIfproductExists);
//     if(data){
//       res.status(200).json({
//         status:true,
//         msg:'product added to cart',
//         insertedId:data.insertId
//       })
//     }else{
//       res.status(200).json({
//         status:false,
//         msg:'something when wrong'
//       })
//     }
//   }else{
//     res.status(200).json({
//       status:false,
//       msg:'product not found'
//     })
//   }
// });

// const getProductsData = async (id) =>{
//   return new Promise((resolve, reject) =>{ 
//     cart.getProduct(id,(error,result)=>{
//       resolve(result);
//       reject(error);
//     })   
//   })
// }

// const getCartData = async () =>{
//   return new Promise((resolve, reject) =>{ 
//     cart.getCartItems((error,result)=>{
//       resolve(result);
//       reject(error);
//     })   
//   })
// }

// const postData = async (params) =>{
//   return new Promise((resolve, reject) =>{ 
//     cart.postCartItems(params,(error,result)=>{
//       resolve(result);
//       reject(error);
//     })   
//   })
// }

module.exports = router;