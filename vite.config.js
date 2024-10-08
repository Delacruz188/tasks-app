import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"], // Corregido aquí
  manifest: {
    name: "React-vite-app",
    short_name: "react-vite-app",
    description: "I am a simple vite app",
    icons: [
      {
        src: "./public/2.jpeg",
        sizes: "192x192",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "./public/2.jpeg",
        sizes: "512x512",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "./public/2.jpeg",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "./public/2.jpeg",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#171717",
    background_color: "#f0e7db",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
});
