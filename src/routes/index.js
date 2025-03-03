const express = require('express');
const router = express.Router();

// Rota inicial
router.get('/', (req, res) => {
  res.send('Bem-vindo ao Blog! 🚀');
});

module.exports = router;
