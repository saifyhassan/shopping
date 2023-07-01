var mongoose=require("mongoose")
var elements=mongoose.model('registertable',{
    username:{type:String},
    email:{type:String},
    password:{type:String},
    number:{type:String},
    select:{type:String},
    gender:{type:String},
    checkbox:{type:String},
    action:{type:Number}
    
})
module.exports={elements}



