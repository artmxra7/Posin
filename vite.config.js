/* eslint-env node */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteObfuscateFile } from "vite-plugin-obfuscator";
import path from "path";

function obfuscatorPlugin(options) {
  return {
    name: "vite-plugin-obfuscator-custom",
    apply: "build",
    enforce: "post",
    generateBundle(outputOptions, bundle) {
      for (const fileName of Object.keys(bundle)) {
        if (fileName.endsWith(".js")) {
          const chunk = bundle[fileName];
          if (chunk.type === "chunk") {
            chunk.code = viteObfuscateFile(chunk.code, options);
          }
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    obfuscatorPlugin({
      compact: true,
      controlFlowFlattening: true,
    }),
  ],
  css: {
    postcss: "./postcss.config.js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
    },
  },
  server: {
    port: 3003,
    open: true,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});