var mongoose=require("mongoose")
var elements=mongoose.model('registertable',{
    username:{type:String},
    password:{type:String}
    
})
module.exports={elements}

