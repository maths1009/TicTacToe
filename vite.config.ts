import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/base/_variable.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      src: "/src",
      "@": "/src",
    },
  },
});
