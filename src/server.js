const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para JSON (deve vir antes das rotas)
app.use(express.json());

// Importa as rotas
const routes = require('./routes/index');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

app.use('/api', routes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
