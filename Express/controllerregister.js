var express=require("express")
var app1=express.Router()
var {elements}=require("./modelregister")
var objectId1=require('mongoose').Types.ObjectId


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
app1.post('/new',function(req,res){
    var stud=new elements({
        username:req.body.name1,
        email:req.body.email,
        password:req.body.password,
        number:req.body.number,
        select:req.body.select,
        gender:req.body.gender,
        checkbox:req.body.checkbox1,
        action:0
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

app1.post('/new2',function(req,res){
    elements.find({$and:[{username:req.body.username},{password:req.body.password}]},function(err,docs){
                if(!err){
                    res.send(docs)

                }
                else{
                    console.log(err)
                }
            })
})

app1.put( '/:id' ,(req,res)=>{
     console.log(req.params.id)
    //  alert(id)
    if(!objectId1.isValid(req.params.id))
    res.send('no record');


    elements.findByIdAndUpdate(req.params.id,{$set:{action:1}},{new:true},(err,docs)=>{
        if(!err) {res.send(docs);}
        else {console.error(err);}
    });
   
});

app1.put( '/inactive/:id' ,(req,res)=>{
     console.log(req.params.id)
     
    if(!objectId1.isValid(req.params.id))
    res.send('no record');


    elements.findByIdAndUpdate(req.params.id,{$set:{action:0}},{new:true},(err,docs)=>{
        if(!err) {res.send(docs);}
        else {console.error(err);}
    });
   
});

module.exports=app1
