const express = require('express');
const { loginUser, getUserDisciplines } = require('../controllers/userController');

const router = express.Router();

router.post('/login', loginUser);
router.get('/:userId', getUserDisciplines);

module.exports = router;
