/* const os = require('os');

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

const path = require('path');
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

const file = path.parse(__filename);
console.log(file.root);

 */

/* const Functions = require('./module'); */
/* const {sum, difference} = require('./module')

console.log(difference(9,6));
console.log(sum(9,6)); */

/* const fs = require('fs');
const path = require('path');

let filepath = path.join(__dirname, 'test.html'); */

//Read
//fs.readFile(path, encoding, callback function);
/* fs.readFile(filepath, 'utf-8', (err,data)=>{
    if(err) console.log(err);
    console.log(data);
}) */

//WRITE
//fs.writeFile(path, file-content, callback-function)
/* const data = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ullam est eius quae adipisci? Neque voluptatibus itaque repellendus quod doloremque! Iure quisquam possimus unde! Incidunt autem dict a modi architecto tempora.';
fs.writeFile(filepath, data, (err)=>{
    if(err) console.log(err);
    console.log('File write completed');
}) */

//APPEND
//fs.appendFile(path, append-content, callback-function)
/* const appendContent = 'Tempora inventore possimus nisi, est ab laborum ipsum labore quia perferendis ducimus qui nostrum quod, voluptatibus quidem excepturi dolor. Voluptate tempora perspiciatis natus, harum quod voluptas cupiditate nam. Veniam, nihil!Voluptatem atque autem expedita accusamus voluptates tempore velit odio quaerat fugit tenetur harum provident totam minus quibusdam unde molestiae, recusandae porro nemo ad omnis? Distinctio nam deserunt tempora ipsam omnis?';
fs.appendFile(filepath, appendContent, (err)=>{
    if(err) console.log(err);
    console.log('Append completed');
} ) */

//RENAME
//fs.rename(old-path, new-path, callback-function)
/* const newPath = path.join(__dirname, 'newTest.html');
fs.rename(filepath, newPath, (err)=>{
    if(err) console.log(err);
    console.log('Rename completed');
}) */

//DELETE
//fs.unlink(filename, callback-function)
/* filepath = path.join(__dirname, 'newTest.html');
fs.unlink(filepath, (err)=>{
    if(err) console.log(err);
    console.log('File deleted');
}) */


//ASYNC & AWAIT in fsPromises
/* const fsPromises = require('fs').promises;
const path = require('path');


const func = async()=>{
    try{
        let data = await fsPromises.readFile(path.join(__dirname, 'test.html'), 'utf-8');
        console.log(data);

        data = 'Kavipriyan';
        await fsPromises.writeFile(path.join(__dirname, 'test.html'), data);
        console.log('Write completed');

        data = ' R K';
        await fsPromises.appendFile(path.join(__dirname, 'test.html'), data);
        console.log('Append File');
    }catch(err){
        console.log(err);
    }
    
}

func(); */

//DIRECTORY CREATE & DELETE
//fs.existsSync(directory-path) ---> check for presence of directory
//fs.mkdir(directory-path, callback function) ---> create a new directory
//fs.rmdir(directory-path, callback function) ---> delete a directory

/* const fs = require('fs');
const path = require('path');

const func = ()=>{
    if(fs.existsSync(path.join(__dirname, 'views'))){
        console.log('Directory exists');
        fs.rmdir(path.join(__dirname, 'views'), (err)=>{
            console.log('Directory deleted');
        })
    }else{
        fs.mkdir(path.join(__dirname, 'views'), (err)=>{
            if(err) console.log(err);
            console.log('Directory created');
        })
    }
}

func(); */