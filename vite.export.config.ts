import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

/** One-off static export for the downloadable zip. Not used by live preview. */
export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart({
      spa: { enabled: true },
      pages: [
        { path: "/" },
        { path: "/business-plans" },
        { path: "/operational-excellence" },
        { path: "/contact" },
        { path: "/privacy" },
        { path: "/terms" },
        { path: "/es" },
        { path: "/es/" },
        { path: "/es/business-plans" },
        { path: "/es/operational-excellence" },
        { path: "/es/contact" },
        { path: "/es/privacy" },
        { path: "/es/terms" },
      ],
      prerender: { enabled: true, crawlLinks: true },
    }),
    nitro({
      preset: "static",
      output: { dir: ".export" },
    }),
    viteReact(),
  ],
});
