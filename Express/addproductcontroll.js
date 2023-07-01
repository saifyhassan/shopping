var express=require("express")
var app1=express.Router()
var {elements}=require("./addproductmodel.js")
var objectId1=require('mongoose').Types.ObjectId


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
    var stud=new elements({
       
        image:req.body.image,
        name:req.body.name,
        price:req.body.price,
        discription:req.body.discription
        
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


app1.get('/:id',function(req,res){
    console.log(req.params.id)
    if(!objectId1.isValid(req.params.id))
    {
        res.send("No such record")
    }
    else{
        elements.findById(req.params.id,function(err,docs){
                    if(!err){
                        res.send(docs)
                    }
                    else{
                        console.log("error in display data")
                    }
                })
    }
})
app1.put('/:id',(req,res)=>{
    //  console.log("test")
    if(!objectId1.isValid(req.params.id))
    res.send('no record');

    var emp={
        name:req.body.name,
        price:req.body.price,
        discription:req.body.discription,
        number:req.body.number

    };

    elements.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,docs)=>{
        if(!err) {res.send(docs);}
        else {console.log('error in employee update:'+ JSON.stringify(err));}
    });
});

app1.delete('/:id',function(req,res){
    if (!objectId1.isValid(req.params.id))
        res.send('No record');
    elements.findByIdAndRemove(req.params.id,function(err,doc){
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err)); }
    })
})
module.exports=app1