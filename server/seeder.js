import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './products.js'
import User from './model/userModel.js'
import Product from './model/productModel.js'
import Order from './model/orderModel.js'
import ConnectDB from './config/db.js'


dotenv.config()

ConnectDB()

const importData = async () =>{
	try{
         await Order.deleteMany()
         await Product.deleteMany()
         await User.deleteMany()

         await User.insertMany(users)


	}catch(e) {

	}
}