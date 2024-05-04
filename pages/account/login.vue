<script setup lang="ts">
definePageMeta({
    name: 'login',
})

const config = useRuntimeConfig()
const { t } = useI18n()

useSeoMeta({
    title: `${t('login')} | LAMPS Admin`,
})
</script>
<template>
    <div id="login">
        <AccountLoginForm />
        <span class="copyright"
            >© {{ new Date().getFullYear() }} {{ config.public.appName }}</span
        >
    </div>
</template>
<style>
#login {
    @apply flex-1 w-screen flex flex-col justify-center items-center relative bg-light;
    .copyright {
        @apply text-sm mt-3 mx-auto;
    }
}
</style>
