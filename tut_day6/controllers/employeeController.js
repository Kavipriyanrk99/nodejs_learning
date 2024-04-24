/* Mongoose models provide several static helper functions for CRUD operations. Each of these functions returns a mongoose Query object.

    Model.deleteMany()
    Model.deleteOne()
    Model.find()
    Model.findById()
    Model.findByIdAndDelete()
    Model.findByIdAndRemove()
    Model.findByIdAndUpdate()
    Model.findOne()
    Model.findOneAndDelete()
    Model.findOneAndRemove()
    Model.findOneAndReplace()
    Model.findOneAndUpdate()
    Model.replaceOne()
    Model.updateMany()
    Model.updateOne()
 */
const Employees = require('../model/Employee');

const getAllEmployees = async( req, res)=>{
    try{
        const employees = await Employees.find().exec();
        if(!employees) return res.status(204).json({'message' : 'No Employee found'});
        res.status(200).json(employees);
    }catch(err){
        console.log(err);
    }
}

const createNewEmployee = async( req, res)=>{
    if (!req.body.firstname || !req.body.lastname) {
        return res.status(400).json({ 'message': 'First and last names are required.' });
    }
    
    try {
        const new_id = await Employees.count({}) + 1;
        //create and store the new employee
        const result = await Employees.create({
            id : new_id,
            firstname : req.body.firstname,
            lastname : req.body.lastname
        });

        res.status(201).json({ 'message': `New Employee created!` });
    } catch (err) {
        console.log(err);
    }
}

const updateEmployee = async(req, res) => {
    try{
        const employee = await Employees.findOne({ id: parseInt(req.body.id) }).exec();

        if (!employee) {
            return res.status(204).json({ "message": `Employee ID ${req.body.id} not found` });
        }
        if (req.body.firstname) await Employees.updateOne({ id: parseInt(req.body.id) }, {firstname: req.body.firstname});
        if (req.body.lastname) await Employees.updateOne({ id: parseInt(req.body.id) }, {lastname: req.body.lastname});
        res.status(201).json({ 'message': `Employee ${req.body.id} updated!` });
    }catch(err){
        console.log(err);
    }
    
}

const deleteEmployee = async(req, res) => {
    try{
        const employee = await Employees.findOne({ id: parseInt(req.body.id) }).exec();
        if (!employee) {
            return res.status(204).json({ "message": `Employee ID ${req.body.id} not found` });
        }
        
        await Employees.deleteOne({id: employee.id});
        res.status(201).json({ 'message': `Employee ${req.body.id} deleted!` });
    }catch(err){
        console.log(err);
    } 
}

const getEmployee = async(req, res) => {
    try{
        const employee = await Employees.findOne({ id: parseInt(req.params.id) }).exec();
        if (!employee) {
            return res.status(204).json({ "message": `Employee ID ${req.params.id} not found` });
        }
        res.json(employee);
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
};