var mongoose=require("mongoose")
var elements=mongoose.model('Cartlist',{
    image:{type:String},
    // discription:{type:String},
    // name:{type:String},
    price:{type:String}
   
})
module.exports={elements}