<script setup lang="ts">
const { name, picture } = defineProps<{
    name: string
    picture?: string
}>()
</script>
<template>
    <div class="avatar">
        <img v-if="picture" :src="picture" />
        <p v-else>{{ name.slice(0, 1) }}</p>
    </div>
</template>
<style scoped>
.avatar {
    @apply flex items-center justify-center text-lg h-8 w-8 rounded-full bg-blue-500 text-white;
}
</style>
