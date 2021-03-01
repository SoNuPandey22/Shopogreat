import bcrypt from 'bcryptjs'


const users = [
 {
   name: "admin",
   email: "admin@shopogreat",
   password: bcrypt.hashSync('1234',10)
   isAdmin:true
 },
 {
   name: "User_2",
   email: "user2@shopogreat",
   password: bcrypt.hashSync('123434',10)
 
 },
 {
   name: "3",
   email: "user3@shopogreat",
   password: bcrypt.hashSync('123434',10)
   
 }

]

export default users