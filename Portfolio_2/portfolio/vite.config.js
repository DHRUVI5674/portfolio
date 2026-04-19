import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'framer-motion';
            if (id.includes('lucide-react')) return 'lucide';
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('@emailjs')) return 'emailjs';
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: 'esbuild',
    esbuild: {
      drop: ['console', 'debugger'],
    },

  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
})
