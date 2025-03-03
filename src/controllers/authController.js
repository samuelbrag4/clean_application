const prisma = require('../config/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {
  // 🔹 Registro de usuário
  async register(req, res) {
    try {
      const { name, email, password, role } = req.body;

      // Verifica se o e-mail já está cadastrado
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'E-mail já cadastrado.' });
      }

      // Garante que a role seja "admin" ou "user" (padrão)
      const userRole = role === 'admin' ? 'admin' : 'user';

      // Gera hash da senha
      const hashedPassword = await bcrypt.hash(password, 10);

      // Cria o usuário
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: userRole
        }
      });

      return res.status(201).json({ message: 'Usuário registrado com sucesso!', user });
    } catch (error) {
      console.error('Erro no registro:', error);
      return res.status(500).json({ message: 'Erro ao registrar usuário.' });
    }
  },

  // 🔹 Login do usuário
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Busca o usuário pelo e-mail
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Credenciais inválidas.' });
      }

      // Gera o token JWT
      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '24h' } // Token válido por 24 horas
      );

      return res.json({ message: 'Login bem-sucedido!', token });
    } catch (error) {
      console.error('Erro no login:', error);
      return res.status(500).json({ message: 'Erro ao fazer login.' });
    }
  },

  // 🔹 Obter perfil do usuário autenticado
  async getProfile(req, res) {
    try {
      const userId = req.user.id;

      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, name: true, email: true, role: true, createdAt: true }
      });

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      return res.json(user);
    } catch (error) {
      console.error('Erro ao obter perfil:', error);
      return res.status(500).json({ message: 'Erro ao buscar perfil.' });
    }
  },

  // 🔹 Atualizar perfil do usuário autenticado
  async updateProfile(req, res) {
    try {
      const userId = req.user.id;
      const { name, email, password } = req.body;

      const updatedData = {};
      if (name) updatedData.name = name;
      if (email) updatedData.email = email;
      if (password) updatedData.password = await bcrypt.hash(password, 10);

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updatedData,
        select: { id: true, name: true, email: true, role: true }
      });

      return res.json({ message: 'Perfil atualizado com sucesso!', user: updatedUser });
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      return res.status(500).json({ message: 'Erro ao atualizar usuário.' });
    }
  },

  // 🔹 Deletar conta do usuário autenticado
  async deleteAccount(req, res) {
    try {
      const userId = req.user.id;

      await prisma.user.delete({ where: { id: userId } });

      return res.json({ message: 'Conta deletada com sucesso!' });
    } catch (error) {
      console.error('Erro ao deletar conta:', error);
      return res.status(500).json({ message: 'Erro ao excluir conta.' });
    }
  }
};

module.exports = authController;
