const express = require('express');
const authController = require('../controllers/authController');
const { authenticateToken, authorizeAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/admin', authenticateToken, authorizeAdmin, (req, res) => {
  res.json({ message: 'Você acessou uma rota de administrador!' });
});

module.exports = router;
