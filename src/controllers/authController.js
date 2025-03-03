const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../config/prisma');

const SECRET_KEY = process.env.JWT_SECRET || "minhaChaveSecreta"; // Melhor definir no .env

// Registro de usuário
const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Verifica se o usuário já existe
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) return res.status(400).json({ error: "Email já cadastrado" });

        // Hash da senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Cria o usuário
        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword, role }
        });

        res.status(201).json({ message: "Usuário registrado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro no registro" });
    }
};

// Login de usuário
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verifica se o usuário existe
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(401).json({ error: "Credenciais inválidas" });

        // Verifica a senha
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ error: "Credenciais inválidas" });

        // Gera o token JWT
        const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: "2h" });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: "Erro no login" });
    }
};

// Middleware de autenticação
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ error: "Acesso negado" });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: "Token inválido" });
    }
};

module.exports = { register, login, authenticate };
