//caution; - using this page either delete everything or change everything
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/product.js'
import User from './model/userModel.js'
import Product from './model/productModel.js'
import Order from './model/orderModel.js'
import ConnectDB from './config/db.js'


dotenv.config()

ConnectDB()

//importing the data

const importData = async () =>{
	try{/*first clearing all the variable values of the variable*/
         await Order.deleteMany()
         await Product.deleteMany()
         await User.deleteMany()
         
         //creating new data and seting it to the variable
         const createUsers = await User.insertMany(users)

         //first user is setted as the admin in the modelschema
         const adminUser = createUsers[0]._id

         //create a product and attach the admin user to the all products
         const sampleProduct = products.map(product => {
         	return {...product, user: adminUser}
         })
         //using await function so that it is here
         await Product.insertMany(sampleProduct)
         User.insertMany(users)

         console.log(`Data imported successfully`.green.inverse)
         process.exit()


	}catch(e) {
		console.log(`error ${e.message}`.red.inverse)
		process.exit(1)

	}
}

//for exporting the data


const destroyData = async () =>{
	try{
         await Order.deleteMany()
         await Product.deleteMany()
         await User.deleteMany()

   

         console.log(`Data Destroyed successfully`.red.inverse)
         process.exit()


	}catch(e) {
		console.log(`error ${e.message}`.red)
		process.exit(1)

	}
}

//argument taken from the terminal at the time of execution
if(process.argv[2] === '-d'){
	destroyData()
} else {
	importData()
}