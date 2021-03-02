import bcrypt from 'bcryptjs'


const users = [
 {
   name: "admin",
   email: "admin@shopogreat",
   password: bcrypt.hashSync('1234',10),
   isAdmin:true
 },
 {
   name: "Sonu",
   email: "sonu@shopogreat",
   password: bcrypt.hashSync('123434',10)
 
 },
 {
   name: "Monu",
   email: "monu@shopogreat",
   password: bcrypt.hashSync('12343443',10)
   
 }

]

export default users