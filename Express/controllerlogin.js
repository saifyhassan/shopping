// var express=require("express")
// var app1=express.Router()
// var {elements}=require("./modelregister")


// app1.get('/',(req,res)=>{
//     elements.find(function(err,docs){
//         if(!err){
//             res.send(docs)
//         }
//         else{
//             console.log("connection error")
//         }
//     })
// })
// app1.post('/',function(req,res){

//     //  elements.find({$and:[{username:req.body.username},{password:req.body.password}]},function(err,docs){
     
   

//      var stud=new elements({
//         username:req.body.username,
//         password:req.body.password,
//     })


//     stud.find({$and:[{username:req.body.username},{password:req.body.password}]},function(err,docs){
//         if(!err){
//             res.send(docs)
//         }
//         else{
//             console.log(err)
//         }
//     })


//     // var stud=new elements({
//     //     username:req.body.username,
//     //     password:req.body.password,
//     // })


//     // stud.save(function(err,docs){
//     //     if(!err){
//     //         res.send(docs)
//     //     }
//     //     else{
//     //         console.log(err)
//     //     }
//     // })
// })
// module.exports=app1


