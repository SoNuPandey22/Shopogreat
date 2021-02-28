import mongoose from 'mongoose'
//import mogooose f
//create a function funtion

const ConnectDB = async ()=>{
	try{
		const con = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser:true,
			useCreateIndex: true
		})

		console.log(`connected to the database by ${con.connection.host}`)

	}catch(e) {
       console.log(`error ${e.message}`)
       process.exit(1)
	}

}

export default ConnectDB