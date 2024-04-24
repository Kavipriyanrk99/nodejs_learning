const whitelist = [
    'https://www.google.com', 
    'www.yoursite.com', 
    'https://www.youtube.com'
];

const corsOption = {
    origin : (origin, callback)=>{
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null, true);
        }else{
            callback(new Error(`Not allowed by CORS ${origin}`))
        } 
    },
    optionsSuccessStatus : 200
}

module.exports = {corsOption};