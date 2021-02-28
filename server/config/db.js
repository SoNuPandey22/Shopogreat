import mongoose from 'mongoose'
import colors from 'colors'
//import mogooose f
//create a function funtion

const ConnectDB = async ()=>{
	try{
		const con = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser:true,
			useCreateIndex: true
		})

		console.log(`connected to the database by ${con.connection.host}`.green.underline)

	}catch(e) {
       console.log(`error ${e.message}`.red.underline)
       process.exit(1)
	}

}

export default ConnectDB