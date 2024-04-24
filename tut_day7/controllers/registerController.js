const Users = require('../model/User');
const bcrypt = require('bcrypt');

const handleNewUser = async(req, res)=>{
    const email = req.body.email;
    const roles = req.body.roles;
    const password = req.body.password;

    if(!email || !password) return res.status(400).json({ 'message': 'email and password are required.' });

    try{
        // check for duplicate email in the db
        const duplicate = await Users.findOne({email : email}).exec();
        if(duplicate) return res.sendStatus(409); //Conflict 

        //encrypt the password
        const hashedPassword = await bcrypt.hash(password, 10);

        await Users.create({
            email : email,
            roles : roles,
            password : hashedPassword,
            refreshToken : ''
        });

        res.status(201).json({ 'success': `New user ${email} created!` });
    }catch(err){
        console.log(err);
    }
}

module.exports = { handleNewUser };