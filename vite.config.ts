/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path"

// @ts-ignore
const root = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/test/setup.ts"
  },
  resolve: {
    alias: {
      "@": resolve(root, "./src"),
      "@assets": resolve(root, "./assets"),
      "@components": resolve(root, "./src/components")
    }
  }
})
