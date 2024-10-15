
const Users = require('../models/User');

const getAllEditors = async (req, res) => {
    const editors = await Users.find({'roles.Editor' : {$exists:true}}).exec();
    if(!editors) return res.status(400).json({"message" : "No Editor found"});
    console.log(editors)
    res.status(200).json(editors)
}

const getEditor = async (req, res) => {
    if(!req.params?.id) return res.status(400).json({"message" : " Student ID is required"});

    const editor = await Users.findOne({_id:req.params?.id}).exec();

    if(!editor){

        return res.status(400).json({'message':`Student with id ${req.params.id} not found`})
    }

    res.status(200).json(editor)
}

module.exports = {
    getAllEditors,
    getEditor
}