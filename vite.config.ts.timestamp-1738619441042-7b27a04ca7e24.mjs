// vite.config.ts
import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "file:///C:/Users/yalng/Documents/yal.nguembu/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/yalng/Documents/yal.nguembu/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/yalng/Documents/yal.nguembu/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/yalng/Documents/yal.nguembu/vite.config.ts";
var vite_config_default = defineConfig(({ mode }) => {
  return {
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
        "@core": fileURLToPath(new URL("./src/core", __vite_injected_original_import_meta_url)),
        "@modules": fileURLToPath(new URL("./src/modules", __vite_injected_original_import_meta_url)),
        "@utils": fileURLToPath(new URL("./src/utils", __vite_injected_original_import_meta_url)),
        "@services": fileURLToPath(new URL("./src/services", __vite_injected_original_import_meta_url)),
        "@assets": fileURLToPath(new URL("./src/assets", __vite_injected_original_import_meta_url))
      }
    },
    build: {
      outDir: mode === "staging" ? "dist-staging" : "dist"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5YWxuZ1xcXFxEb2N1bWVudHNcXFxceWFsLm5ndWVtYnVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlhbG5nXFxcXERvY3VtZW50c1xcXFx5YWwubmd1ZW1idVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMveWFsbmcvRG9jdW1lbnRzL3lhbC5uZ3VlbWJ1L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgVVJMLCBmaWxlVVJMVG9QYXRoIH0gZnJvbSBcIm5vZGU6dXJsXCI7XHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gXCJ2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGx1Z2luczogW3Z1ZSgpLCB2dWVEZXZUb29scygpXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICBcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICAgICAgXCJAY29yZVwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyYy9jb3JlXCIsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgICAgIFwiQG1vZHVsZXNcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmMvbW9kdWxlc1wiLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgICBcIkB1dGlsc1wiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyYy91dGlsc1wiLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgICBcIkBzZXJ2aWNlc1wiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyYy9zZXJ2aWNlc1wiLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgICBcIkBhc3NldHNcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmMvYXNzZXRzXCIsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBvdXREaXI6IG1vZGUgPT09IFwic3RhZ2luZ1wiID8gXCJkaXN0LXN0YWdpbmdcIiA6IFwiZGlzdFwiXHJcbiAgICB9XHJcbiAgfTtcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1MsU0FBUyxLQUFLLHFCQUFxQjtBQUUzVSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFKaUssSUFBTSwyQ0FBMkM7QUFNMU8sSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsU0FBTztBQUFBLElBQ0wsU0FBUyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7QUFBQSxJQUM5QixTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLFFBQ3BELFNBQVMsY0FBYyxJQUFJLElBQUksY0FBYyx3Q0FBZSxDQUFDO0FBQUEsUUFDN0QsWUFBWSxjQUFjLElBQUksSUFBSSxpQkFBaUIsd0NBQWUsQ0FBQztBQUFBLFFBQ25FLFVBQVUsY0FBYyxJQUFJLElBQUksZUFBZSx3Q0FBZSxDQUFDO0FBQUEsUUFDL0QsYUFBYSxjQUFjLElBQUksSUFBSSxrQkFBa0Isd0NBQWUsQ0FBQztBQUFBLFFBQ3JFLFdBQVcsY0FBYyxJQUFJLElBQUksZ0JBQWdCLHdDQUFlLENBQUM7QUFBQSxNQUNuRTtBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLFFBQVEsU0FBUyxZQUFZLGlCQUFpQjtBQUFBLElBQ2hEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
