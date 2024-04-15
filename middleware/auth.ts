export default defineNuxtRouteMiddleware(async (to, from) => {
    const nuxtApp = useNuxtApp()
    const { data: response, error } = await useFetch<Response>(
        '/api/auth/check-session',
        {
            getCachedData(key) {
                return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
            },
        },
    )

    if (
        error.value ||
        !response.value ||
        (from.path.includes('admin') && !response.value?.data.hasAdminAccess)
    )
        return navigateTo('/')
})
