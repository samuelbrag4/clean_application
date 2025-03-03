const express = require('express');
const postController = require('../controllers/postController');
const { authenticateToken, authorizeAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

// Usuários autenticados podem ver postagens
router.get('/', authenticateToken, postController.getAllPosts);

// Apenas admins podem criar, editar e deletar postagens
router.post('/', authenticateToken, authorizeAdmin, postController.createPost);
router.put('/:id', authenticateToken, authorizeAdmin, postController.updatePost);
router.delete('/:id', authenticateToken, authorizeAdmin, postController.deletePost);

module.exports = router;
