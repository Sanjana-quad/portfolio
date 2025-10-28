import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from "fs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    {
    name: "copy-404",
      closeBundle() {
        try {
          copyFileSync("dist/index.html", "dist/404.html");
          console.log("✅ 404.html copied for GitHub Pages SPA routing");
        } catch (e) {
          console.error("❌ Failed to copy 404.html:", e);
        }
      },
    },
  ],
  base: "/portfolio/",
  optimizeDeps: {
  include: ["react-responsive-carousel"],
}
})



