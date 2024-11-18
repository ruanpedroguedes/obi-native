const express = require('express');
const { getAllUsers, getUserByUsernameOrEmail } = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/search', getUserByUsernameOrEmail);

module.exports = router;
