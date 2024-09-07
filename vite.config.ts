import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // Rust error moment
  clearScreen: false,
  // Tauri requires a fixed port
  server: {
    strictPort: true,
  },

  envPrefix: ['VITE_', 'TAURI_PLATFORM', 'TAURI_ARCH', 'TAURI_FAMILY', 'TAURI_PLATFORM_VERSION', 'TAURI_PLATFORM_TYPE', 'TAURI_DEBUG'],
  build: {
    // Tauri will use chromium on windows, else used WebKit on other platforms
    target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    sourcemap: !!process.env.TAURI_DEBUG,
  },
  plugins: [vue()],


  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/main.scss";`
      }
    }
  }
})
