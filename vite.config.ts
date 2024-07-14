import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//https://github.com/gxmari007/vite-plugin-eslint/issues/74
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import eslint from 'vite-plugin-eslint'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint()],
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 5173,
    hmr: {
      overlay: true,
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@app": path.resolve(__dirname, "src/app"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@features": path.resolve(__dirname, "src/features"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@assets": path.resolve(__dirname, "src/assets")
    }
  }
});
