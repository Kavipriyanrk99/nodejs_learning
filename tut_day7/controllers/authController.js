const Users = require('../model/User');
const bcrypt = require('bcrypt');

const handleLogin = async(req, res)=>{
    const {email, password} = req.body;

    if (!email || !password) return res.status(400).json({ 'message': 'email and password are required.' });

    try{
        const foundUser = await Users.findOne({email : email}).exec();
        if(!foundUser) return res.sendStatus(401);

        const match = await bcrypt.compare(password, foundUser.password);
        console.log(match);
        if(match){
            res.status(200).json({'message' : `User ${email} logged in`});
        }else{
            res.sendStatus(401);
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = { handleLogin };