import vue from '@vitejs/plugin-vue'
import { readFileSync } from 'fs'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		https: {
			cert: readFileSync('./localhost.pem'),
			key: readFileSync('./localhost-key.pem')
		}
	}
})
