const User = require('../models/User');

const getAllUsers = async (req, res) => {
    const users = await User.find();
    if(!users) {
        return res.status(400).json({message: "No user found"});
    }
    res.json(users);
}

const createUser = async (req, res) => {
    const { fullname, email, password } = req.body;
    email = email.trim()
    username = username.trim()
    password = password.trim()
    if(!fullname || !email || !password) {
        return res.status(400).json({message: "All fields are required"});
    }
    const duplicate = await User.findOne({email});
    if(duplicate) {
        return res.status(400).json({message: "User already exists"});
    }
    try{
        const result = await User.create({
            fullname,
            email,
            password
        });
        res.status(201).json(result);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

const updateUser = async (req, res) => {
    const {id} = req.body;
    if(!id) {
        return res.status(400).json({message: "Id is required"});
    }
    const user = await User.findOne({_id: id}).exec();
    if(!user) {
        return res.status(400).json({message: "User not found"});
    }
    try{
        if(req.body?.fullname) {
            user.fullname = req.body.fullname;
        }
        if(req.body?.email) {
            user.email = req.body.email;
        }
        const result = await user.save();
        res.status(201).json(result, {'message': 'User updated successfully'});
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    if(!req.params?.id) {
        return res.status(400).json({message: "Id is required"});
    }
    const user = await User.findOne({_id: id}).exec();
    if(!user) {
        return res.status(400).json({message: "User not found"});
    }
   const result = await user.deleteOne();
   res.status(201).json(result, {'message': 'User deleted successfully'});
}

const getUser = async(req, res) => {
    if(!req?.params?.id) return res.status(400).json({"message": "Blog ID required"});

    const user = await User.findOne({_id: req.params.id}).exec();
    if (!user) {
        return res.status(400).json({ "message": `Blog ID ${id} not found` });
    }
    res.json(user);
}

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    createUser
}