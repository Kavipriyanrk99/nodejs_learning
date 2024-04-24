const express = require('express');
const { getAllEmployees, createNewEmployee, updateEmployees, deleteEmployee, getEmployee } = require('../../controllers/employeeController');
const router = express.Router();

//CRUD
//C - create - post method
//R - read - get method
//U - update - put method
//D - delete - delete method
router.route('/')
    .get(getAllEmployees)
    .post(createNewEmployee)
    .put(updateEmployees)
    .delete(deleteEmployee);

router.route('/:id')
    .get(getEmployee);

module.exports = router;