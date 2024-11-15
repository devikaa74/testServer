const users=require('../models/userModel')
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

//register
exports.registerController=async(req,res)=>{
    console.log('inside Register Controller');
    console.log(req.body);
    const{id,firstName,lastName,Email,password,phoneNum}=req.body
    console.log(id,firstName,lastName,Email,password,phoneNum);

    try{
        const existingUser=await users.findOne({Email})
        if(existingUser)
        {
            res.status(401).json("User allready Registered")
        }
        else{
            const hashPass=await bcrypt.hash(password,20)
            const newUser=new users({
                id,firstName,lastName,Email,password:hashPass,phoneNum
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch(err)
    {
        console.log(err);
        
    }
    
    
}

//login
exports.loginController=async(req,res)=>
{
    console.log("inside login controller");
    const{Email,password}=req.body
    try{
      const existingUser=await users.findOne({Email})
    if(existingUser)
        {
            const token=jwt.sign({userId:existingUser._id},process.env.JWTPASSWORD)
            console.log(token);
            
            const isSame=await bcrypt.compareSync(password,existingUser.password)

            if(isSame)
            {
                res.status(200).json({
                    user:existingUser, token})
            }
            else{
                res.status(401).json("Incorrect password")
            }
        }
        else{
            res.status(401).json("User not found")
        }  
    }  
    catch(err)
    {
        console.log(err);
        
    }
}

//allUser
exports.allUserController=async(req,res)=>{
    try{
        console.log("inside ALL USER Controller");
        const allUser=await users.find()
        res.status(200).json(allUser.map(user=>({firstName:user.firstName,Email:user.Email})))
        
    }
    catch(err)
    {
        console.log(err);
        
    }
}

//oneUser

exports.oneUserController = async (req, res) => {
    console.log("Inside oneUserController");
    const { Email } = req.body;

    try {
        const user = await users.findOne({ Email });
        if (user) {
            res.status(200).json({
                Username: user.firstName,
                Email: user.Email,
                Phonenumber: user.phoneNum
            });
        } else {
            res.status(404).json("User not found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).json("Error retrieving user");
    }
};