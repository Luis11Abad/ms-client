<script setup lang="ts">
const config = useRuntimeConfig()

definePageMeta({
    name: 'register',
})

const { t } = useI18n()

useSeoMeta({
    title: `${t('confirm-account')} | ${config.public.appName}`,
})
</script>
<template>
    <div id="sign-up">
        <AccountRegisterForm />
        <span class="copyright"
            >© {{ new Date().getFullYear() }} {{ config.public.appName }}</span
        >
    </div>
</template>
<style>
#sign-up {
    @apply flex-1 w-screen flex flex-col justify-center items-center relative bg-light;
    .copyright {
        @apply mt-3 mx-auto;
    }
}
</style>
