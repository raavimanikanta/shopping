var express = require('express');
var router = express.Router();
// var brands = require('./brands.model');
var brands = require('../public/jsondata/brands.json')
router.get('/', async function(req, res, next) {
  console.log('brand route');
  // const data = await getData();
  res.status(200).json(brands);
});



// const getData = async () =>{
//   return new Promise((resolve, reject) =>{ 
//     brands.getBrands((error,result)=>{
//       resolve(result);
//       reject(error);
//     })   
//   })
// }


module.exports = router;