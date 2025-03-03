const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const { authenticateToken, authorizeAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

// Rotas de autenticação
router.post('/register', authController.register);
router.post('/login', authController.login);

// Rota para acesso de administradores
router.get('/admin', authenticateToken, authorizeAdmin, (req, res) => {
  res.json({ message: 'Você acessou uma rota de administrador!' });
});

// Rota para atualização de usuário (autenticado)
router.put('/update', authenticateToken, userController.updateUser);

module.exports = router;
