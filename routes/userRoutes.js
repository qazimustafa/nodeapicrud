const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define Routes
router.post('/users', userController.createUser); // Create User
router.get('/users', userController.getUsers); // Get All Users
router.get('/users/:id', userController.getUserById); // Get User by ID
router.put('/users/:id', userController.updateUser); // Update User
router.delete('/users/:id', userController.deleteUser); // Delete User

module.exports = router;
