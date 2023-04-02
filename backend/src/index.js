const express= require("express")
const mongoose= require('mongoose')
const route=require('./routes/route')
const app= express()
const cors=require('cors')

app.use(cors())

const mult = require('multer')


app.use(mult().any())

app.use(express.json())


mongoose.set('strictQuery',true)

mongoose.connect("mongodb+srv://Nish54321:Nish54321@rajnishcalifornium.qhqnlpb.mongodb.net/postApp",{
    useNewUrlParser:true
})
.then(()=>console.log("mongodb is connected"))
.catch((err)=>console.log(err))


app.use("/",route)

app.listen(4000,function(){
    console.log("serever is running on port 4000")
})