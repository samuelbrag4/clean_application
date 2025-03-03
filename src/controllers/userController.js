const prisma = require('../config/prisma');
const bcrypt = require('bcrypt');

const userController = {
  async updateUser(req, res) {
    try {
      const userId = req.user.id; // Pega o ID do usuário autenticado
      const { name, email, password } = req.body;

      // Verifica se o usuário existe
      const user = await prisma.user.findUnique({
        where: { id: userId }
      });

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      // Atualiza os dados informados
      const updatedData = {};
      if (name) updatedData.name = name;
      if (email) updatedData.email = email;
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        updatedData.password = hashedPassword;
      }

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updatedData
      });

      return res.json({ message: 'Usuário atualizado com sucesso!', user: updatedUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao atualizar usuário.' });
    }
  }
};

module.exports = userController;
