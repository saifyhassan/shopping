var mongoose=require("mongoose")
var elements=mongoose.model('Wishlist',{
    image:{type:String},
    discription:{type:String},
    name:{type:String},
    price:{type:String}
   
})
module.exports={elements}