const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var mongojs= require('mongojs');
var db=mongojs('mongodb://sofiene:sofiene@ds237489.mlab.com:37489/driver',['distances']);
// // Connect
// const connection = (closure) => {
//     return MongoClient.connect('mongodb://sofiene:sofiene@ds135179.mlab.com:35179/mytasklist_sofiene', (err, db) => {
//         if (err) return console.log(err);

//         closure(db);
//     });
// };

// // Error handling
// const sendError = (err, res) => {
//     response.status = 501;
//     response.message = typeof err == 'object' ? err.message : err;
//     res.status(501).json(response);
// };

// // Response handling
// let response = {
//     status: 200,
//     data: [],
//     message: null
// };

// // Get users
// router.get('/tasks', (req, res) => {
//     connection((db) => {
//         db.collection('tasks')
//             .find()
//             .toArray()
//             .then((tasks) => {
//                 response.data = tasks;
//                 res.json(response);
//             })
//             .catch((err) => {
//                 sendError(err, res);
//             });
//     });
// });
router.get('/distances',function(req,res,next){
    db.distances.find(function(err,distances){
    if(err){
           res.send(err);
    
           }
           res.json(distances);
    
                });
    
    });
module.exports = router;