var express = require('express');
var router = express.Router();
// var products = require('./products.model');
var products = require('../public/jsondata/products.json')
router.get('/', async function(req, res, next) {
  console.log('products route');
  // let brand_id = req.params.id;
  // const data = await getData(brand_id);
  res.status(200).json(products);
});

router.get('/error', async function(req, res, next) {
  console.log('error route');
  try{
    let x = 1;
    if(x < 5) throw "too low";
  }catch(e){
    console.log(e)
    res.status(500).json({status:false,msg:e});
  }
});

// const getData = async (brand_id) =>{
//   return new Promise((resolve, reject) =>{ 
//     products.getProducts(brand_id,(error,result)=>{
//       resolve(result);
//       reject(error);
//     })   
//   })
// }


module.exports = router;