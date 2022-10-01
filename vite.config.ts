// utils
import { defineConfig } from "vite";
import path from "path";

// plugins
import Vue from "@vitejs/plugin-vue";
import Checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), Checker({ typescript: true })],
  base: "/vuic/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Vuic",
      fileName: (format) => `vuic.${format}.ts`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
