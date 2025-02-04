import { URL, fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig(({ mode }) => {
  return {
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@core": fileURLToPath(new URL("./src/core", import.meta.url)),
        "@modules": fileURLToPath(new URL("./src/modules", import.meta.url)),
        "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
        "@services": fileURLToPath(new URL("./src/services", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url))
      }
    },
    build: {
      outDir: mode === "staging" ? "dist-staging" : "dist"
    }
  };
});
