import type { NuxtError } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path != '/') {
        const e = useError()
        const error = e.value as NuxtError
        if (error && error.statusCode === 404) {
            return navigateTo('/')
        }
    }
})
