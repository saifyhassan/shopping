var express=require("express")
var app1=express.Router()
var {elements}=require("./students")


app1.get('/',(req,res)=>{
    elements.find(function(err,docs){
        if(!err){
            res.send(docs)
        }
        else{
            console.log("connection error")
        }
    })
})
app1.post('/',function(req,res){
    var stud=new elements({
        discription:req.body.discription,
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject
    })
    stud.save(function(err,docs){
        if(!err){
            res.send(docs)
        }
        else{
            console.log(err)
        }
    })
})
module.exports=app1
