// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/storybook', '@nuxtjs/tailwindcss', '@pinia/nuxt', ['@nuxtjs/google-fonts', {
        families: {
            Poppins: [400, 600, 700],
            Lato: [400, 600, 700]
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
        dirs: ["./stores"]
    },
    vite: {
        server: {
            hmr: {
                protocol: "ws",
                host: "0.0.0.0",
            },
        },
    },
})
