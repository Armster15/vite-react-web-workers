import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import webWorkerLoader from 'rollup-plugin-web-worker-loader';
import comlink from 'vite-plugin-comlink'
import worker, { pluginHelper } from 'vite-plugin-worker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    comlink(),
    pluginHelper(),
    worker({}),
    reactRefresh(),
  ],
  define: {
    "process.env": process.env,
    "process.versions": process.versions
  }
})
