import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/SamosaSelector/",
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
})
