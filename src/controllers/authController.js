const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../config/prisma"); // Certifique-se de que esse caminho está correto

const SECRET_KEY = process.env.JWT_SECRET || "seu_segredo_super_seguro";

// 📝 Função de Registro de Usuários
const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Verifica se o usuário já existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "E-mail já cadastrado!" });
    }

    // Garante que apenas "user" ou "admin" sejam aceitos como roles
    const userRole = role && role === "admin" ? "admin" : "user";

    // Hash da senha antes de salvar no banco
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria o usuário no banco de dados
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: userRole,
      },
    });

    res.status(201).json({ message: "Usuário criado com sucesso!", user });
  } catch (error) {
    console.error("Erro no registro:", error);
    res.status(500).json({ error: "Erro no servidor" });
  }
};

// 🔑 Função de Login e Geração de Token JWT
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Busca o usuário pelo email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Credenciais inválidas!" });
    }

    // Compara a senha informada com a senha hash do banco
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciais inválidas!" });
    }

    // Gera o token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      SECRET_KEY,
      { expiresIn: "24h" } // Token válido por 24 horas
    );

    res.json({ message: "Login bem-sucedido!", token });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ error: "Erro no servidor" });
  }
};

// 🔍 Função para Buscar o Perfil do Usuário (Protegida por Token)
const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    // Busca o usuário pelo ID
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado!" });
    }

    res.json(user);
  } catch (error) {
    console.error("Erro ao buscar perfil:", error);
    res.status(500).json({ error: "Erro no servidor" });
  }
};

// 🔄 Atualizar Informações do Usuário (Apenas o próprio usuário ou admin)
const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email, password } = req.body;

    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (password) updateData.password = await bcrypt.hash(password, 10);

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: { id: true, name: true, email: true, role: true },
    });

    res.json({ message: "Perfil atualizado!", user: updatedUser });
  } catch (error) {
    console.error("Erro ao atualizar perfil:", error);
    res.status(500).json({ error: "Erro no servidor" });
  }
};

// ❌ Deletar Conta (Apenas o próprio usuário ou admin)
const deleteAccount = async (req, res) => {
  try {
    const userId = req.user.id;

    await prisma.user.delete({ where: { id: userId } });

    res.json({ message: "Conta deletada com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar conta:", error);
    res.status(500).json({ error: "Erro no servidor" });
  }
};

module.exports = {
  register,
  login,
  getProfile,
  updateProfile,
  deleteAccount,
};
