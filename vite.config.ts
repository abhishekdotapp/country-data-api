import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  build: {
        outDir: 'build', // Ensure the build directory matches Vercel's expectation
          },
            ssr: {
                noExternal: true // Ensure dependencies are bundled for SSR
                  
  }});
