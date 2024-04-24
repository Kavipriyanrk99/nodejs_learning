//CREATE A SERVER WITH RAW NODE
const http = require('http');
const path = require('path');
const fsPromises = require('fs').promises;
//const PORT = process.env.PORT || 3000 --- variable PORT will be assigned the value of the environment variable PORT if it is set, or the number 3000 if it is not set
//USING .env FILE TO SET ENVIRONMENT VARIABLES
//create a .env file --- It contains the environment variables
//setting port in .env file --- PORT = 5000
//using that in server.js -- import 'dotenv' module into project ---- require('dotenv').config(); --- use const PORT = process.env.PORT || 3000;
//require('dotenv') is a function that is used to load the dotenv package
//.config() is a function in the dotenv package that is used to load the .env file

require('dotenv').config();


const PORT = process.env.PORT || 3000;

const server = http.createServer(async(req, res)=>{
    try{
        console.log('Response received');
        //req.url --> frontend url , req.method --> http request method(GET, POST, PUT, DELETE)
        console.log(req.url + ' ' + req.method);

        const filePathHtml = path.join(__dirname, 'index.html');
        const filePathTxt = path.join(__dirname, 'test.txt');
        const filePath404 = path.join(__dirname, '404.html');

        if((req.url == '/' || req.url == '/home' || req.url == '/home.html') && req.method == 'GET'){
            res.setStatus = 200;
            res.setHeader('Content-Type', 'text/html');
            const data = await fsPromises.readFile(filePathHtml, 'utf-8');
            res.end(data);
        }else if(req.url == '/txt' && req.method == 'GET'){
            res.setStatus = 200;
            res.setHeader('Content-Type', 'text/plain');
            const data = await fsPromises.readFile(filePathTxt, 'utf-8');
            res.end(data);
        }else{
            res.setStatus = 200;
            res.setHeader('Content-Type', 'text/html');
            const data = await fsPromises.readFile(filePath404, 'utf-8');
            res.end(data);
        }
    }catch(err){
        console.log(err);
    }
});

server.listen(PORT, ()=>{console.log(`server is running at PORT ${PORT}`)});