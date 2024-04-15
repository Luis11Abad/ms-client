<script setup lang="ts">
definePageMeta({
    layout: 'admin',
    name: 'create-user',
    middleware: ['auth'],
})
</script>
<template>
    <AdminForm data-key="users" />
</template>
