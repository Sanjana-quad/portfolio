import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from "fs";
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    {
    name: "copy-404",
      closeBundle() {
        try {
          copyFileSync(resolve("dist/index.html"), resolve("dist/404.html"));
          console.log("✅ 404.html copied for GitHub Pages SPA routing");
        } catch (e) {
          console.error("❌ Failed to copy 404.html:", e);
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  base: "/portfolio/",
  optimizeDeps: {
  include: ["react-responsive-carousel"],
  exclude: [
      "react-native-web",
      "react-native-web/dist/apis/StyleSheet/registry",
    ],
}
})



