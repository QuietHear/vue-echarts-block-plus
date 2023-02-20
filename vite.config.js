/*
 * @Author: aFei
 * @Date: 2022-11-16 16:53:45
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-02-20 14:41:30
*/
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoImport from "unplugin-auto-import/vite";
import * as path from 'path';

export default defineConfig(({ command, mode }) => ({
  esbuild: {
    drop: ['console', 'debugger']
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, "./lib/index.js"),
      name: "vueEchartsBlockPlus",
      fileName: "vue-echarts-block-plus",
    },
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue(), autoImport({ imports: ['vue', 'vue-router'], dts: false })],
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true
      }
    }
  }
}));
