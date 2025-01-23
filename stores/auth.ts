export const useAuthStore = defineStore(
    'auth',
    () => {
        const user: Ref<User | null> = ref(null)

        const authToken = useCookie('access_token')

        function authenticateUser(data: Auth) {
            const { token, ...userData } = data

            user.value = { ...userData }
            authToken.value = token

            navigateTo('/account')
        }

        function logout() {
            user.value = null

            authToken.value = null
        }

        return { authenticateUser, user, logout }
    },
    {
        persist: true,
    },
)
