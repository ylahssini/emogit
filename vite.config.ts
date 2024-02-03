import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
    plugins: [
        /* 
        Uncomment the following line to enable solid-devtools.
        For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
        */
        // devtools(),
        solidPlugin({ ssr: true }),
    ],
    server: {
        port: 3000,
    },
    ssr: {
        noExternal: ["solid-meta"],
    },
    assetsInclude: [/\/static\/.*$/],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
        ],
    },
    build: {
        target: 'esnext',
    },
});
