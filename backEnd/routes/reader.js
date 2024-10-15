const express = require('express');
const router = express.Router();
const readersController = require('../controllers/readersController');

router.route('/')
    .get(readersController.getAllReaders)
    .post(readersController.createReader);

router.route('/:id')
    .get(readersController.getReader)
    .put(readersController.updateReader)
    .delete(readersController.deleteReader);

module.exports = router;