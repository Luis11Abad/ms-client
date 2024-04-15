<script setup lang="ts">
definePageMeta({
    layout: 'admin',
    name: 'dashboard',
    middleware: ['auth'],
})

const { t } = useI18n()

useSeoMeta({
    title: `${t('dashboard')} | LAMPS Admin`,
})
</script>
<template>
    <h1>Hola</h1>
</template>
