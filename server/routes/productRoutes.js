import express from 'express'
const router = express.Router()
import asyncHandler from  'express-async-handler'
import Product from '../model/productModel.js'

//@desc fetch all products
//@route Get api/products
//@access public
router.get('/',asyncHandler (async(req,res) =>{
   const products = await Product.find({})

   res.json(products)

}))

//@desc fetch one product
//@route Get api/:id
//access    public
//single route to get the product by using its id
router.get('/:id', asyncHandler (async (req,res) =>{
    var product = await Product.findById(req.params.id)
    
    if(product) {
    	res.json(product)
    } else {
    	res.status(404)
    	throw new Error('Product not found')
    }
    
	
}))


export default router