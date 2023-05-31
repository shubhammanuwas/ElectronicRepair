const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Soumyadip:20csu214@cluster0.jm2zckm.mongodb.net/WFproject?retryWrites=true&w=majority',(err)=>{
    if(!err)
        console.log('MongoDB connection succeeded. ');
    else
        console.log('Error in DB Connection:'+JSON.stringify(err,undefined,2))
})
module.exports =mongoose;