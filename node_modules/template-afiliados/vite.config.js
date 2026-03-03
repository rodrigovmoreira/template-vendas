import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Carrega o .env da raiz do monorepo
  const env = loadEnv(mode, path.resolve(__dirname, '../../'), 'VITE_');
  
  return {
    plugins: [react()],
    // Permite que o Vite acesse as variáveis
    envDir: '../../', 
  }
})