<script setup lang="ts">
const { variant } = withDefaults(
    defineProps<{
        variant?: string
    }>(),
    {
        variant: 'primary',
    },
)
</script>
<template>
    <button :class="`ui-button ${variant}`"><slot></slot></button>
</template>
<style>
.ui-button {
    @apply h-11 w-48 text-base;
    &.primary {
        @apply bg-accent text-white;
    }
}
</style>
