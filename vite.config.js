import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { resolve } from "path";

export default defineConfig({
  base: "",
  server: {
    open: true,
    hot: true,
  },
  build: {
    minify: "terser",
    cssMinify: false,
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        home: resolve(__dirname, "home.html"),
        management: resolve(__dirname, "management.html"),
        mojo: resolve(__dirname, "mojo.html"),
      },
      output: {
        manualChunks: undefined,
        compact: true,
      },
    },
  },
  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 80,
        speed: 4,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],
});
