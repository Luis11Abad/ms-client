// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/i18n',
        'nuxt-gtag',
    ],
    runtimeConfig: {
        public: {
            appName: process.env.APP_NAME,
            apiUrl: process.env.API_URL,
        },
    },
    gtag: {
        id: 'G-SL1CB6Q12T',
    },
    i18n: {
        vueI18n: './i18n.config.ts',
    },
    piniaPersistedstate: {
        storage: 'localStorage',
    },
})
