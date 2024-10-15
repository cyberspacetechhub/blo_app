const Blog = require('../models/Blog');
const mongoose = require('mongoose');
const Admin = require('../models/Admin');


// Get all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author'); // Populate the author field
        if (blogs.length === 0) {
            return res.status(204).json({ 'message': 'No blogs found' });
        }
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ "message": err.message });
    }
};

const createBlog = async (req, res) => {
    const { title, subTitle, author, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ "message": "Title and Content are required" });
    }
    const duplicate = await Blog.findOne({ title });
    if (duplicate) {
        return res.sendStatus(409); // Conflict
    }

    const authorId = new mongoose.Types.ObjectId(author);
    const imageName = req.file?.path;
    try {
        const newBlog = await Blog.create({
            image: imageName, // Save the image path
            title, 
            subTitle, 
            author: authorId, 
            content 
        });
        const admin = await Admin.findOne({_id : authorId }).exec();
        admin.blog.push(newBlog._id);
        admin.save();

        res.status(201).json({'message': `new blog ${newBlog.title} created`, newBlog });
    } catch (err) {
        res.status(500).json({ "message": err.message });
    }
};

const updateBlog = async (req, res) => {
    if(!req.body._id){
        return res.status(400).json({ "message": "ID parameter is required" });
    }
    const blog = await Blog.findOne({ _id: req.body._id }).exec();
    if (!blog) {
        return res.status(204).json({ "message": `No blog matches ID ${req.body._id}.` });
    }
    try{
        if (req.body.image) blog.image = req.body.image;
        if (req.body.title) blog.title = req.body.title;
        if (req.body.subTitle) blog.subTitle = req.body.subTitle;
        if (req.body.author) blog.author = req.body.author;
        if (req.body.content) blog.content = req.body.content;
        const result = await blog.save();
        res.status(200).json({'message': `Blog ${result.title} updated`});
    } catch (err) {
        res.status(500).json({ "message": err.message });
    }
}

const deleteBlog = async (req, res) => {
    if(!req.body.id){
        return res.status(400).json({ "message": "ID parameter is required" });
    }
    const blog = await Blog.findOne({ _id: req.body.id }).exec();
    if (!blog) {
        return res.status(204).json({ "message": `No blog matches ID ${req.body.id}.` });
    }
    try{
        const result = await blog.deleteOne();
        res.status(200).json({'message': `Blog ${result.title} deleted`});
    } catch (err) {
        res.status(500).json({ "message": err.message });
    }
}

// Get a single blog by ID
const getBlog = async (req, res) => {
    const { id } = req.params;
    
    if (!id) {
        return res.status(400).json({ "message": "Blog ID required" });
    }

    try {
        const blog = await Blog.findById(id).populate('author'); // Populate the author field
        if (!blog) {
            return res.status(404).json({ "message": `Blog ID ${id} not found` });
        }
        res.json(blog);
    } catch (err) {
        res.status(500).json({ "message": err.message });
    }
};

module.exports = {
    getAllBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
    getBlog
};
