//CREATE SERVER WITH EXPRESS
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

//To handle get request ---> app.get(url, route_handler)
//route_handler ---> an anonymous function that handles routes
//by default Express sets statusCode-200 and content type
//res.send(content) ---> sends plain text 
//res.sendFile() ---> send specific file
//res.redirect() ---> redirects
//res.status(status_code).sendFile() ---> to send custom status code

//SIMPLE ROUTING
app.get('^/$|/home(.html)?|/index(.html)?', (req, res)=>{ //for multiple request handling, there shouldn't be space between or(|)
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/txt', (req, res)=>{
    res.sendFile(path.join(__dirname, 'test.txt'));
})

app.get('/old', (req, res)=>{
    res.redirect('/home.html');
})

app.get('/*', (req, res)=>{
    res.status(404).sendFile(path.join(__dirname, '404.html'));
})

//ROUTER CHAINING METHOD 1
/* app.get('/home(.html)?', (req, res, next)=>{
    console.log('Entered 1');
    next();
},(req, res, next)=>{
    console.log('Entered 2');
    next();
}, (req, res)=>{
    console.log('The End');
    res.sendFile(path.join(__dirname, 'index.html'));
}); */

//ROUTER CHAINING METHOD 2

/* const one = (req, res, next)=>{
    console.log('Entered 1');
    next();
}

const two = (req, res, next)=>{
    console.log('Entered 2');
    next();
}

const end = (req, res)=>{
    console.log('The End');
    res.sendFile(path.join(__dirname, 'index.html'));
}

app.get('/home(.html)?',[one, two, end]);*/

app.listen(PORT, ()=>{console.log(`server is running PORT ${PORT}`)});