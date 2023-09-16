const express=require('express')
const mongoose=require('mongoose')
const colors=require('colors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const connectDB = require('./Config/db')
const cors=require('cors')
const path = require("path")

// config
dotenv.config()



// mongodb connection
mongoose.set('strictQuery', true)
connectDB();


// rest obj
const app=express();


// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// routes
// user routes
app.use('/api/v1/user',require('./Routes/user-routes'))

// app.post("/register",(req,res)=>{
//     console.log(req.body);
// })


// statics files
// app.use(express.static(path.join(__dirname,'./client/build')))
// app.get('*',function(req,res){
//     res.sendFile(path.join(--dirname, './client/build/index.html'))
// });


//  port
const port=process.env.PORT || 8000


// listen
app.listen(port,()=>{
    console.log(`server running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`)
})
