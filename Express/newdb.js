var mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/MAINPROJECT",(err)=>{
    if(!err){
        console.log("connection successfull")
    }
    else{
        console.log("connection error")
    }
})
module.exports=mongoose