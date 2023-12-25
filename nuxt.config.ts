// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    plugins: ["./plugins/splide.js"],
    modules: ['@nuxtjs/tailwindcss', ['@pinia/nuxt', { autoImports: ["useLayoutStore", "useUiStore"] }], ['@nuxtjs/google-fonts', {
        families: {
            Poppins: [400, 600, 700],
            Lato: [400, 600, 700],
            Galada: [400]
        }
    }]],
    tailwindcss: {
        cssPath: "./assets/css/tailwind.css"
    },
    imports: {
        dirs: ["stores"],
        presets: [
            { from: "tailwind-merge", imports: ['twMerge'] },
        ]
    },
    vite: {
        server: {
            hmr: {
                protocol: "ws",
                host: "0.0.0.0",
            },
        },
    },
    router: {
        options: {
            linkActiveClass: "font-bold"
        }
    },
})
