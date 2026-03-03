import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Aponta para o .env que está na raiz do monorepo (../../.env)
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

console.log("Variável de teste:", process.env.NOME_VARIAVEL);

const app = express();
const PORT = process.env.PORT || 3002; // Porta diferente do Vite (5173)

// Middlewares
app.use(cors()); // Permite que o Frontend acesse a API
app.use(express.json());

// Rota de Teste Inicial
app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'Online', 
    message: 'Backend do Template de Vendas operante!',
    timestamp: new Date()
  });
});

// Inicialização do Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor API rodando em http://localhost:${PORT}`);
});