<script setup lang="ts">
import { Icon } from '@iconify/vue'

const { itemKey, icon } = defineProps<{
    itemKey: string
    icon: string
}>()

const to = itemKey == 'dashboard' ? '' : itemKey
</script>
<template>
    <NuxtLink :to="`/admin/${to}`" class="sidemenu-item">
        <Icon :icon="icon" />
        {{ $t(itemKey) }}
    </NuxtLink>
</template>
<style>
#admin .sidemenu .sidemenu-item {
    @apply h-11 flex items-center px-4 text-[0.925rem] hover:bg-blue-50 hover:text-blue-800;
    &.router-link-exact-active {
        @apply bg-blue-50 text-blue-800 border-blue-700 relative before:content-[''] before:h-full before:w-[3px] before:bg-blue-700 before:absolute before:right-0 before:rounded-l-md;
    }
    svg {
        @apply mr-2 text-lg;
    }
}
</style>
