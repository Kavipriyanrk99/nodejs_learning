//project initialization ---> npm init (or) npm init -y
//project dependency installation ---> npm i (dependency_name)
//dependency remove ---> npm rm (dependency_name)
//nodemon as devDependency ---> npm i nodemon -D (or) npm i nodemon --save-dev
//scripting nodemon ---> "dev": "nodemon server.js" -> npm run dev


//EVENTS
//(eventEmitter_name).on(event_name, callback_function) ---> to catch a event
//(eventEmitter_name).emit(event_name, message) ---> to trigger a event

/* const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event', (message)=>{
    console.log('Event triggered' + message);
});

myEmitter.emit('event', 'Hi'); */

//CREATING A LOG HISTORY

const EventEmitter = require('events');
const myEmitter = new EventEmitter();
const LogFunc = require('./modules/logEvents');
const {logEvents} = require('./modules/logEvents');

//EventListener

myEmitter.on('log', (message)=>{
    console.log('Event Triggered');
    logEvents(message);
});

myEmitter.emit('log', 'Triggered');

