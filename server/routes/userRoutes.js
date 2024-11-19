const express = require('express');
const { getAllUsers, loginUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/login', loginUser);

module.exports = router;
