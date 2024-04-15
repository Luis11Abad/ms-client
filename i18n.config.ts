import ES from '@/locales/es.json'
import EN from '@/locales/en.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'es',
    messages: {
        es: ES,
        en: EN,
    },
}))
