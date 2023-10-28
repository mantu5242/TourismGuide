const JWT= require('jsonwebtoken');
const userModel = require('../Model/userModel.js')
module.exports=async(req,res,next)=>{
       try {
        console.log("authmiddleware is working")
            const token=req.headers['authorization'].split(" ")[1]
            JWT.verify(token,process.env.JWT_SECRET,(err,decode)=>{
                    if(err){
                            return res.status(403).json({message:'Auth failed',success:false})
                        }else{
                                req.body.userId = decode.id
                                next()
                            }
                        })
                       } catch (error) {
                            console.log(error)
                            return res.status(400).json({message:"Auth Failed",success:false})
                           }
    
    // console.log("i am in is loggedin middeleware");                    
    // const {token} =req.cookies;
    // console.log("token",token);
    // const decoded = JWT.verify(token,"abc");
    // const {id}=decoded;
    // console.log(id);
    // const user=  await userModel.findById(id);
    // if(user){
    //     next();
    // }else{
    //     res.send("Please Login!!!")
    // }
    
                        
}

