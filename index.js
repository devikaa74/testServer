require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./routes/router')
require("./database/dbConnection")
require('./models/userModel')

const UmServer=express()

UmServer.use(cors())
UmServer.use(express.json())

UmServer.use(router)

 const PORT=3000 || process.env.PORT

 UmServer.listen(PORT,()=>{
    console.log(`UmServer is running at ${PORT} and waiting for client request`);
    
 })

 UmServer.get('/',(req,res)=>{
    res.status(200).send('<h1>server started at port and waiting for client request</h1>')
 })