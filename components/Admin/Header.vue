<script setup lang="ts">
const route = useRoute()
const routeName = computed(() => (route.name as string) ?? 'dashboard')
</script>
<template>
    <header>
        <h1>{{ $t(routeName) }}</h1>
    </header>
</template>
<style>
#admin header {
    @apply flex flex-row items-center px-6 h-24 bg-gray-50;
    h1 {
        @apply text-xl font-medium;
    }
}
</style>
