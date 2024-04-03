import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/base/_variable.scss";`
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve('src/renderer/src'),
        nodeModules: 'node_modules'
      }
    },
    plugins: [react()]
  }
})
