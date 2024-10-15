const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');


const getAllAdmin = async(req, res) => {
    const admins = await Admin.find().populate('blog').exec();
    if (!admins) return res.status(204).json({"message": "No users found"})
    res.json(admins)
}

const createAdmin = async(req, res) => {
    const {fullname, username, email, password} = req.body;
    if (!fullname || !username || !email || !password) {
        return res.status(400).json({"message": "All fields are required"})
    }
    const duplicate = await Admin.findOne({fullname: fullname}).exec();
    if (duplicate) {
        return res.sendStatus(409) //Conflict
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await Admin.create( {
            "fullname":fullname,
            "username":username,
            "email":email,
            "password": hashedPassword
        });
        console.log(result);
        res.status(201).json({"success": `New user ${username} created!`})
        
    }catch (err) {
        res.status(500).json({"message": err.message})
    }
}


module.exports = {
    getAllAdmin,
    createAdmin
}