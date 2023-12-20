// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/storybook'],
    storybook: {
        url: "http://localhost:3001"
    }
})
