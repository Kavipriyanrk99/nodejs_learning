require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const { logger } = require('./middleware/logEvents');
const cors = require('cors');
const { errorHandler } = require('./middleware/errHandler');

const PORT = process.env.PORT || 3000;

//MIDDLEWARES
//--> functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. 
//--> 'next' middleware function is commonly denoted by a variable named next.
//--> types in-built, custom, third-party
//--> app.use() to specify middleware as the callback function

//CUSTOM MIDDLEWARE - logger
app.use(logger);

//THIRD PARTY MIDDLEWARE - CORS
//--> npm i cors
app.use(cors(require('./config/corsOptions')));

//BUILT-IN MIDDLEWARES
//--> express.urlencoded() and express.json() -- used to parse request bodies that are encoded in JSON or URL-encoded format
//--> express.static() -- used to serve static files, such as HTML, CSS, and JavaScript files, from a directory on the filesystem
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));

//EXPRESS ROUTER
//--> an isolated instance of middleware and routes. You can think of it as a “mini-application,” capable only of performing middleware and routing functions
//ROUTER FOR root
app.use('/', require('./routes/root'));
//ROUTER FOR subdir
app.use('/subdir', require('./routes/subdir'));
//ROUTER FOR employee
app.use('/employee', require('./routes/API/employee'));

/* app.get('^/$|/home(.html)?|index(.html)?', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page(.html)?', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old', (req, res)=>{
    res.redirect(301, '/');
}); */

//--> app.all() to handle all HTTP methods
app.all('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

//CUSTOM MIDDLEWARE - errorHandler
app.use(errorHandler);

app.listen(PORT, ()=>{console.log(`server is running at PORT ${PORT}`)});