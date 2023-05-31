const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Services } = require('../models/services');

router.get('/', (req, res) => {
    Services.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retrieving Service :' + json.stringify(err, undefined, 2)); }
    });
});

//findByID
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    Services.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Service: ' + JSON.stringify(err, undefined, 2)); }
    })
})

router.post('/add-item', (req, res) => {
    var ser = new Services({
        image: req.body.image,
        name: req.body.name,
        category: req.body.category,
        charge: req.body.charge,
        description: req.body.description
    });
    ser.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save:' + JSON.stringify(err, undefined, 2)); }
    })
})


//update
router.put('/edit/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);

    var ser ={
        image: req.body.image,
        name: req.body.name,
        category: req.body.category,
        charge: req.body.charge,
        description: req.body.description
    };
    Services.findByIdAndUpdate(req.params.id, { $set: ser }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update:' + JSON.stringify(err, undefined, 2)); }
    })
})

//delete
router.delete('/delete/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    
    Services.findByIdAndRemove(req.params.id,(err,doc)=>{
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Deleted:' + JSON.stringify(err, undefined, 2)); }
    })
})


module.exports = router;