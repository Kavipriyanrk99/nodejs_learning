//MONGOOSE
//--> Mongoose is an Object-Document Mapping (ODM) library for Node.js and MongoDB.
//--> provides a straightforward way to define data models, interact with MongoDB databases, and perform database operations using JavaScript objects
//--> Data Models: Models allow you to create, read, update, and delete documents in the database
//--> Mongoose models are derived from schemas
//--> A schema is a blueprint that defines the structure and properties of documents within a collection. It specifies the fields, their types, validation rules, and default values
//--> npm i mongoose
//--> More details -- https://mongoosejs.com/

//--> useUnifiedTopology: true: This option tells Mongoose to use the new MongoDB Unified Topology engine for handling connections. It provides better scalability and handling of replica sets and sharded clusters.
//--> useNewUrlParser: true: This option is used to enable the new URL parser in Mongoose. It is required when connecting to MongoDB using a connection string that includes the database hostname and port

require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch(err){
        console.log(err);
    }
}

module.exports = {connectDB};