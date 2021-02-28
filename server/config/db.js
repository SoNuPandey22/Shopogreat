import mongoose from 'mongoose'

const ConnectMongoDB = async ()=>{
	try{
		cost con = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser:true,
			useCreateIndex: true
		})

	}catch(e) {

	}

}