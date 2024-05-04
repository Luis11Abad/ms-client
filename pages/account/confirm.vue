<script setup lang="ts">
definePageMeta({
    name: 'confirm',
})

const { t } = useI18n()
const config = useRuntimeConfig()
const user = useSupabaseUser()

const authStore = useAuthStore()

useSeoMeta({
    title: `${t('confirm')} | LAMPS Admin`,
})

if (user.value == null) navigateTo('/account/login')
if (user.value?.email_confirmed_at) {
    authStore.getUserInfo(user.value.id)
    navigateTo('/account')
}
</script>
<template>
    <div id="confirm">
        <div class="panel">
            <AccountConfirmEmailInstructions
                v-if="user?.email_confirmed_at == null"
            />
            <AccountConfirmRedirectInfo v-else />
        </div>
        <span class="copyright"
            >© {{ new Date().getFullYear() }} {{ config.public.appName }}</span
        >
    </div>
</template>
<style>
#confirm {
    @apply flex-1 w-screen flex flex-col justify-center items-center relative bg-light;
    .panel {
        @apply flex flex-col bg-white shadow-lg p-8 rounded-3xl w-11/12 max-w-md;
        h2 {
            @apply text-2xl font-semibold mx-auto tracking-tight;
        }
        h6 {
            @apply text-center mt-5;
        }
    }
    .copyright {
        @apply text-sm mt-3 mx-auto;
    }
}
</style>
