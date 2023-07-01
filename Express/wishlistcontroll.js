var express=require("express")
var app1=express.Router()
var {elements}=require("./wishlistmodel.js")
// var objectId1=require('mongoose').Types.ObjectId


app1.get('/',(req,res)=>{
    
    elements.find(function(err,docs){
        if(!err){
            res.send(docs)
            // alert(docs)
        }
        else{
            console.log("connection error")
        }
    })
})
app1.post('/',function(req,res){
    var wishlist=new elements({
        image:req.body.image1,
        name:req.body.name,
        price:req.body.price,
        discription:req.body.discription
    })
    wishlist.save(function(err,docs){
        if(!err){
            res.send(docs)
        }
        else{
            console.log(err)
        }
    })
})
// app1.get('/:id',function(req,res){
//     console.log(req.params.id)
//     if(!objectId1.isValid(req.params.id))
//     {
//         res.send("No such record")
//     }
//     else{
//         elements.findById(req.params.id,function(err,docs){
//                     if(!err){
//                         res.send(docs)
//                     }
//                     else{
//                         console.log("error in display data")
//                     }
//                 })
//     }
// })

module.exports=app1