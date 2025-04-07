import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables based on mode and current working directory
  const env = loadEnv(mode, process.cwd(), ''); 

  // Determine base path based on the DEPLOY_TARGET environment variable
  const base = env.DEPLOY_TARGET === 'ghpages' ? '/botanic-website/' : '/';

  return {
    base: base,
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "docs",
      emptyOutDir: true,
      assetsDir: "assets",
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (!assetInfo.name) return 'assets/[name][extname]';
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
              return `assets/images/[name][extname]`;
            } else if (/mp4|webm|ogg/i.test(ext)) {
              return `assets/videos/[name][extname]`;
            }
            return `assets/[name][extname]`;
          },
          chunkFileNames: 'assets/js/[name].js',
          entryFileNames: 'assets/js/[name].js',
        },
      },
    },
  };
});
