const fsPromises = require('fs').promises;
const path = require('path');

const data = {
    employees : require('../model/employee.json'),
    setEmployee : async function (data) { 
        try{
            this.employees = data;
            await fsPromises.writeFile(path.join(__dirname, '..', 'model', 'employee.json'), JSON.stringify(data));
        }catch(err){
            console.log(err);
        }
    }
};


const getAllEmployees = (req, res)=>{
    res.json(data.employees);
}

const createNewEmployee = (req, res)=>{
    const newEmployee = {
        id : data.employees.length ? data.employees[data.employees.length - 1].id + 1 : 1,
        firstname : req.body.firstname,
        lastname : req.body.lastname
    }

    if(!newEmployee.firstname || !newEmployee.lastname){
        return res.status(400).json({"message" : "firstname and lastname is required"});
    }

    const newArr = [...data.employees, newEmployee];
    data.setEmployee(newArr);
    res.status(201).json(data.employees);
}

const updateEmployees = (req, res)=>{
    const employee = data.employees.find(emp => emp.id == req.body.id);
    if(!employee) return res.status(400).json({"message" : `id ${req.body.id} is not found`});
    if(req.body.firstname) employee.firstname = req.body.firstname;
    if(req.body.lastname) employee.lastname = req.body.lastname;
    const filteredArray = data.employees.filter( emp => emp.id != req.body.id);
    const unsortedArray = [...filteredArray, employee];
    data.setEmployee(unsortedArray.sort(( a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0)));
    res.status(201).json(data.employees);
}

const deleteEmployee = (req, res)=>{
    const employee = data.employees.find(emp => emp.id == req.body.id);
    if(!employee) return res.status(204).json({"message" : `id ${req.body.id} is not found`});
    const filteredArray = data.employees.filter(emp => emp.id != req.body.id);
    data.setEmployee(filteredArray);
    res.status(202).json(data.employees);
}

const getEmployee = (req, res)=>{
    const employee = data.employees.find(emp => emp.id == req.params.id);
    if(!employee) return res.status(404).json({"message" : `id ${req.params.id} is not found`});
    res.status(200).json(employee);
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployees,
    deleteEmployee,
    getEmployee
};


