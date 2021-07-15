const mongoose = require('mongoose');

const url = 'mongodb+srv://curd_op:AfNSgyinbqcZYYfx@cluster0.ntqm6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true},(err)=>{
    if(!err){
        console.log('Mongodb connection Succeeded');
    }else{
        console.log('Error in DB connection :' +err);
    }
});

require('./employee.model');