//entry point
import express from 'express'
import dotenv from 'dotenv'
import ConnectDB from './config/db.js'
import product from './data/product.js'


dotenv.config()
ConnectDB()
const app = express()

app.get('/',(req, res) => {
	res.send('API is running...')
})

app.get('/api/product', (req,res) =>{
   res.json(product)

})

//single route to get the product by using its id
app.get('/api/product/:id', (req,res) =>{
	const item = product.find((p)=> p._id === req.params.id)

	res.json(item)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, 
	console.log(`API is listening on ${process.env.NODE_ENV} mode on port ${PORT}`)) 