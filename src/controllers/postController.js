const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar Post
const createPost = async (req, res) => {
    try {
        const { title, content, authorId } = req.body;
        const post = await prisma.post.create({
            data: { title, content, authorId },
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar postagem' });
    }
};

// Listar Posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            include: { author: true },
        });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar postagens' });
    }
};

// Buscar um Post por ID
const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await prisma.post.findUnique({ where: { id: Number(id) } });
        if (!post) return res.status(404).json({ error: 'Post não encontrado' });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar postagem' });
    }
};

// Atualizar Post
const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const post = await prisma.post.update({
            where: { id: Number(id) },
            data: { title, content },
        });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar postagem' });
    }
};

// Deletar Post
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.post.delete({ where: { id: Number(id) } });
        res.json({ message: 'Post deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar postagem' });
    }
};

module.exports = { createPost, getAllPosts, getPostById, updatePost, deletePost };
