//entry point
import express from 'express'
import dotenv from 'dotenv'
import ConnectDB from './config/db.js'
//import product from './data/product.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'


dotenv.config()
ConnectDB()
const app = express()

app.get('/',(req, res) => {
	res.send('API is running...')
})

app.use('/api/products', productRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, 
	console.log(`API is listening on ${process.env.NODE_ENV} mode on port ${PORT}`)) 