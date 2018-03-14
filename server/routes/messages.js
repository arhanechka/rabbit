var express = require('express');
var router = express.Router();
var Message = require('../../db_models.js/messages_model')


router.get('/', function (req, res) {
    Message.findAll().then(message => {
       res.json(message) 
       })
       .catch(function (e) {
        console.error("Problems with database");
        res.json({
          success: false,
          msg: 'problem with getting messages from database.'
        });
        }); 
    });

router.get('/status', function (req, res) {
    let status = 1;
    Message.findAll({
        where: {
          status: status
        }
      }).then(message => {
        res.json(message) 
        })
        .catch(function (e) {
            console.error("Problems with database");
            res.json({
              success: false,
              msg: 'problem with getting messages from database with status ' + status
            });
        }); 
     });
   

router.put('/updateStatus', function (req, res) {
    let status = 1;
    let id = 10;
     Message.update({
        status: status,
      }, {
        where: {
          id: id
        }
      }).then(message => {
        res.json(message) 
        })
        .catch(function (e) {
            console.error("Problems with database");
            res.json({
              success: false,
              msg: 'problem with updating message status.'
            });
            }); 
   
});

router.get('/id', function (req, res) {
    let id = 15;
      Message.findAll({
        where: {
          id: id
        }
      }).then(message => {
        res.json(message) 
        })
        .catch(function (e) {
            console.error("Problems with database");
            res.json({
              success: false,
              msg: 'problem with updating message status by '+id +" id"
            });
            }); 
     });
    

module.exports = router;