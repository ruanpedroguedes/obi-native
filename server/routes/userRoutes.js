const express = require('express');
const { loginUser, getUserDisciplines } = require('../controllers/userController');

const router = express.Router();

router.post('/login', loginUser);
router.get('/:id', getUserDisciplines);

module.exports = router;
