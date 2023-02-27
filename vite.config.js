import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/sass/preview.scss',
                
                'resources/js/app.js',
                'resources/js/article-view.js',

                'resources/js/bootstrap.js'
            ],
            refresh: true,
        }),
        react()
    ],
    optimizeDeps: {
        include: ['ckeditor5-custom-build'],
    },
    build: {
        chunkSizeWarningLimit: 2000,
        commonjsOptions: {
            // exclude: ['ckeditor5-custom-build'],
            include: [/node_modules/, /ckeditor5/],
            extensions: ['.js', '.cjs']
        }
    }
});
