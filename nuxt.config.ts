// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/storybook', '@nuxtjs/tailwindcss'],
    storybook: {
        url: 'http://localhost:6000',
        port: 6000
    }
})
