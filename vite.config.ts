import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers'
import { splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),    
    splitVendorChunkPlugin(),
    Components({
      resolvers: [BootstrapVueNextResolver()]
    }),
    VitePWA({
      mode: "production",
      base: "/",
      srcDir: "src",
      registerType: 'autoUpdate',
      includeAssets: ['robots.txt', 'assets/**/*.scss', 'assets/**/*.json'], 
      strategies: 'generateSW',
      manifest: {
        name: 'Cali-Girl Notary',
        short_name: 'Cali-Girl Notary',
        theme_color: '#6366f1',       
        start_url: '/',
        display: 'standalone',
        
      },
      workbox: {
        // defining cached files formats
        globPatterns: ["**/*.{js,ts,vue,scss,css,html,ico,png,svg,json,webmanifest}"],
      },
    }),
    
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  build: {
    outDir: 'dist',  // Specify the output directory for build files.
    assetsDir: 'assets',  // Specify a directory within outDir to nest assets.    
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console logs for production
        drop_debugger: true
      }
    },
    rollupOptions: {     
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    },
    sourcemap: false,  // Generate source maps (optional, useful for debugging)
    minify: 'terser',  // Use Terser for minification
    emptyOutDir: true,  // Clean the outDir on each build
  }
});
