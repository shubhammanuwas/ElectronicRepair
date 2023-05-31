const mongoose=require('mongoose');

var Services=mongoose.model('Services',{
    image:{type: String},
    name:{type:String},
    category:{type:String},
    charge:{type:Number},
    description:{type:String}
});

module.exports={ Services };