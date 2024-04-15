<script setup lang="ts">
definePageMeta({
    layout: 'admin',
    name: 'edit-user',
    middleware: ['auth'],
})
</script>
<template>
    <AdminForm data-key="users" />
</template>
