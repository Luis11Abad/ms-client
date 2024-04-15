export const useAuthStore = defineStore(
    'auth',
    () => {
        const info: Ref<User | null> = ref(null)
        const isAdmin: Ref<boolean> = ref(false)

        const authToken = useCookie('access_token')

        function authenticateUser(data: Auth) {
            const { token, ...userData } = data
            info.value = { ...userData }
            isAdmin.value = userData.hasAdminAccess

            authToken.value = token

            navigateTo(userData.hasAdminAccess ? '/admin' : '/account')
        }

        function logout() {
            info.value = null
            isAdmin.value = false

            authToken.value = null
        }

        return { authenticateUser, isAdmin, info, logout }
    },
    {
        persist: true,
    },
)
