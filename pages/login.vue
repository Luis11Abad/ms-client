<script setup lang="ts">
import { Icon } from '@iconify/vue'

const config = useRuntimeConfig()

definePageMeta({
    layout: 'empty',
    name: 'login',
})

const { isAdmin } = storeToRefs(useAuthStore())
const authToken = useCookie('access_token')
onBeforeMount(() => {
    if (authToken.value) navigateTo(isAdmin.value ? '/admin' : '/account')
})

const { t } = useI18n()

useSeoMeta({
    title: `${t('login')} | LAMPS Admin`,
})
</script>
<template>
    <div id="login">
        <header>
            <h1>invitare</h1>
            <button>
                <Icon icon="solar:earth-linear" />
                <span>España</span>
            </button>
        </header>
        <div>
            <LoginForm />
            <span class="copyright"
                >© {{ new Date().getFullYear() }}
                {{ config.public.appName }}</span
            >
        </div>
    </div>
</template>
<style>
#login {
    @apply h-screen w-screen flex flex-col items-center relative justify-start bg-light;
    header {
        @apply flex items-center justify-between h-28 w-full max-w-5xl z-10;
        h1 {
            @apply font-bold text-3xl mb-4 tracking-tight;
        }
        button {
            @apply flex h-9 px-3 rounded-lg items-center gap-x-2 hover:bg-black/5;
            svg {
                @apply text-lg;
            }
        }
    }
    > div {
        @apply flex flex-col flex-1 justify-center items-center w-full -mt-16;
    }
    .copyright {
        @apply text-sm mt-3 mx-auto;
    }
}
</style>
