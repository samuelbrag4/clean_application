const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');

// Rota para listar usuários
router.get('/', getUsers);

module.exports = router;
