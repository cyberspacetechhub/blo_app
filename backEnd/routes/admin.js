const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.route('/')
.get(adminController.getAllAdmin)
.post(adminController.createAdmin);

module.exports = router;