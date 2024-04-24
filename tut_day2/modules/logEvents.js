const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');
const date_fns = require('date-fns');
const uuid = require('uuid');

const logEvents = async(message)=>{
    try{
        const logData = `${date_fns.format(new Date(), 'dd/MM/yyyy\tHH:mm:ss')}\t${uuid.v4()}\t${message}\n`;

        //Checking for directory presence
        if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
            console.log(`'logs' directory created`);
        }

        //Appending log history
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', 'logHistory.txt'), logData);
        console.log('log history appended');
    }catch(err){
        console.log(err);
    }
}

module.exports = {logEvents};