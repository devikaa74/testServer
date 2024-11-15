const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
    id:{
        type:String,
        require:true,
        unique:true
    },
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phoneNum:{
        type:String,
        require:true
    }
})
const users= mongoose.model("users",userSchema)
module.exports=users