import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // Use relative paths for assets to ensure they load on GitHub Pages
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
                simulation: 'simulation.html',
                bohr: 'bohr.html',
            },
        },
    }
});
