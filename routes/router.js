const express=require('express')
const router=new express.Router()
const userController=require('../controllers/userController')
//Register:http;//localhost:3000/register
router.post('/register',userController.registerController)
//login:http://localhost:3000/login
router.post('/login',userController.loginController)
//allUser:http://localhost:3000/allUser
router.get('/allUsers',userController.allUserController)
//oneUser://allUser:http://localhost:3000/oneUser
router.get('/oneUser',userController.oneUserController)




module.exports=router