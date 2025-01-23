<script setup lang="ts">
definePageMeta({
    name: 'confirm',
})

const { t } = useI18n()
const config = useRuntimeConfig()

const authStore = useAuthStore()

useSeoMeta({
    title: `${t('confirm')} | ${config.public.appName}`,
})

const { user } = storeToRefs(authStore)

if (user.value == null) navigateTo('/account/login')
if (user.value?.isVerified) navigateTo('/account')
</script>
<template>
    <div id="confirm">
        <div class="panel">
            <AccountConfirmEmailInstructions v-if="!user?.isVerified" />
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
        @apply mt-3 mx-auto;
    }
}
</style>
