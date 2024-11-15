const mongoose=require('mongoose') //import mongoose

const connectionString=process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{console.log("MongoDB connected sucessfully with Umserver");
}).catch(err=>{
    console.log("MongoDB Connection failed ");
    
    console.log(err);
})