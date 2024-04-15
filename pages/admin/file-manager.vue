<script setup lang="ts">
definePageMeta({
    layout: 'admin',
    name: 'file-manager',
    middleware: ['auth'],
})

const { t } = useI18n()

useSeoMeta({
    title: `${t('file-manager')} | LAMPS Admin`,
})
</script>
<template>
    <div class="h-full flex flex-col px-4">
        <AdminImageViewer data-key="files" />
    </div>
</template>
