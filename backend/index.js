const express=require('express');
const bodyParser=require('body-parser');
var cors = require('cors');
const {mongoose}=require('./db.js');
var serviceController=require('./controllers/serviceController.js');

var app= express();
app.use(cors())
app.use(bodyParser.json());
app.listen(3000, ()=> console.log('Server started at port: 8000'));

app.use('/services',serviceController)