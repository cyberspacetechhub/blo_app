const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../../controllers/userController');
const verifyRoles = require('../../middlewares/verifyRoles');
const ROLES_LIST = require('../../config/roles_list');

router.route('/')
    .get(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),userController.getAllUsers)
    .post(userController.createUser);
    router.route('/:id')
    .get(userController.getUser)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor, ROLES_LIST.User),userController.updateUser)
    .delete(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),userController.deleteUser);

module.exports = router;