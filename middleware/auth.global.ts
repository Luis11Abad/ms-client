import { ACCOUNT_ROUTE_NAME, AUTH_ROUTES, LOGIN_ROUTE } from '~/constants'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtRouteMiddleware(async (to, _from) => {
    const { account } = useAccount()
    const { payload, static: staticData } = useNuxtApp()
    const token = useCookie('access_token')

    if (AUTH_ROUTES.includes(to.name as string) && token.value) {
        return navigateTo(ACCOUNT_ROUTE_NAME)
    }

    if (ACCOUNT_ROUTE_NAME === to.name) {
        if (!token.value) return navigateTo(LOGIN_ROUTE)

        const { data, error } = await useFetch<Response>('/api/auth/session', {
            getCachedData: (key) => payload.data[key] || staticData.data[key],
        })

        if (error.value || !data.value?.data) return navigateTo('/')
        else account.value = data.value.data
    }
})
