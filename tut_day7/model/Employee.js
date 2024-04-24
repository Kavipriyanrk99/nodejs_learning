const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    id : {
        type : Number,
        required : true
    },
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    }
});

//MODEL
//Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.
//The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name
//the model Employee is for the 'employees' collection in the database
module.exports = mongoose.model('Employee', employeeSchema);