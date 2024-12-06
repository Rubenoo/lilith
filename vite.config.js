import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  base: "",
  server: {
    open: true,
    hot: true,
  },
  build: {
    minify: "terser",
    cssMinify: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
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
