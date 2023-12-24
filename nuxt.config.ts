// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    plugins: ["./plugins/splide.js"],
    modules: ['@nuxtjs/storybook', '@nuxtjs/tailwindcss', '@pinia/nuxt', ['@nuxtjs/google-fonts', {
        families: {
            Poppins: [400, 600, 700],
            Lato: [400, 600, 700],
            Galada: [400]
        }
    }]],
    tailwindcss: {
        cssPath: "./assets/css/tailwind.css"
    },
    storybook: {
        url: 'http://localhost:6000',
        port: 6000
    },
    imports: {
        dirs: ["./stores"],
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
