const express = require('express');
const router = express.Router();
const employee = require('../../data/employee.json');

//CRUD
//C - create - post method
//R - read - get method
//U - update - put method
//D - delete - delete method
router.route('/')
    .get((req, res)=>{
        res.json(employee);
    })
    .post((req, res)=>{
        res.json(
            {
                "firstname": req.body.firstname,
                "lastname": req.body.lastname
            }
        );
    })
    .put((req, res)=>{
        res.json(
            {
                "firstname": req.body.firstname,
                "lastname": req.body.lastname
            }
        );
    })
    .delete((req, res)=>{
        res.json(
            {
                "id" : req.body.id
            }
        );
    });

router.route('/:id')
    .get((req, res)=>{
        res.json(
            {
                "id" : req.params.id
            }
        );
    });

module.exports = router;