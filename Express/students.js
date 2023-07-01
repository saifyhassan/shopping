var mongoose=require("mongoose")
var elements=mongoose.model('contacttable',{
    discription:{type:String},
    name:{type:String},
    email:{type:String},
    subject:{type:String}
})
module.exports={elements}