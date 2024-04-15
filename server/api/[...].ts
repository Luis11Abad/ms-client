import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
    const apiUrl = useRuntimeConfig().public.apiUrl
    const path = event.path.replace(/^\/api\//, '')
    const target = joinURL(apiUrl, path)

    const cookies = parseCookies(event)

    if (cookies.access_token) {
        event.node.req.headers.authorization = `Bearer ${cookies.access_token}`
    }

    return proxyRequest(event, target)
})
