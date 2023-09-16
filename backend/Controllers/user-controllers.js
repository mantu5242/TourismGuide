const userModel=require('../Model/userModel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
// const moment =require('moment')

// // login callback
console.log("****")
const loginController=async(req,res)=>{
    console.log("&&&&")
    try {
        const {email,password}=req.body
        console.log(email , password);
        const user=await userModel.findOne({email})
        
        if(!user){
            return res.status(200).json({message:'User not found',success:false})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(200).json({message:'Invalid Email and Password',success:false})
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
        return res.status(200).json({message:'Login Successful',success:true,token})
    } catch (error) {
        return res.status(404).json({message:`Error in logging ${error}`,success:false})
    }
}

// // register callback
const registerController=async(req,res)=>{
    
    try {
        const {email,password}=req.body;
        // console.log(email,password)
        const existingUser=await userModel.findOne({email})
        if(existingUser){
            return res.status(201).json({message:`User already exist`,success:false})
        }

        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        req.body.password=hashedPassword;

        const newUser=await userModel(req.body)
        await newUser.save()

        return res.status(200).json({message:'User Registered Successfully',success:true})
    } catch (error) {
        console.log(error)
        return res.status(404).json({message:`Register Controller ${error} `})
    }
}

module.exports={loginController,registerController}
// module.exports={registerController}
