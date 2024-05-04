import { jwtDecode } from 'jwt-decode'
import { Role } from '~/types/enums'
import type { SbJwtPayload } from '~/types/api'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const session = useSupabaseSession()
    if (session.value) {
        const jwt = jwtDecode(session.value.access_token) as SbJwtPayload
        const userRole = jwt.user_role ?? Role.User
        if (userRole == Role.User) return navigateTo('/')
    }
})
