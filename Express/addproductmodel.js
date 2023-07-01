var mongoose=require("mongoose")
var elements=mongoose.model('Addproducttable',{
    image:{type:String},
    name:{type:String},
    price:{type:String},
    discription:{type:String}
    
})
module.exports={elements}