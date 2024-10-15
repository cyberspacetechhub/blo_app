const express = require('express');
const router = express.Router();
const newBlogController = require('../controllers/blogController');
const verifyRoles = require('../middlewares/verifyRoles');
const upload = require('../middlewares/upload');

router.route('/')
    .post(verifyRoles('Admin'), upload.single('image'), (req, res, next) => {
        newBlogController.createBlog(req, res).catch(next);
    });
router.route('/:_id')
    .put(verifyRoles('Admin'),newBlogController.updateBlog)
    .delete(verifyRoles('Admin'),newBlogController.deleteBlog);

module.exports = router