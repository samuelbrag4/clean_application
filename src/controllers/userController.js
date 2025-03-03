const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Função para listar usuários (Exemplo)
const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

module.exports = { getUsers };
