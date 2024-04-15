<script setup lang="ts">
import { Icon } from '@iconify/vue'

const { color, icon, label, variant } = withDefaults(
    defineProps<{
        color?: 'primary' | 'danger' | 'alternative'
        disabled?: boolean
        icon?: string
        label?: string
        variant?: 'default' | 'outlined'
    }>(),
    {
        color: 'primary',
        variant: 'default',
    },
)
</script>
<template>
    <button
        :disabled="disabled"
        :class="['ui-button', color, { icon: !label }, variant]"
    >
        {{ label ?? '' }}
        <Icon v-if="icon" :icon="icon" />
    </button>
</template>
<style>
#admin .ui-button {
    @apply flex items-center justify-center px-2.5 h-7 rounded-md text-white;
    &.icon {
        @apply px-0 w-7;
    }
    &.primary {
        @apply bg-blue-600;
        &.outlined {
            @apply text-blue-600 border-blue-600;
        }
    }
    &.danger {
        @apply bg-red-500;
        &.outlined {
            @apply text-red-500 border-red-500 hover:bg-red-500 hover:text-white;
        }
    }
    &.outlined {
        @apply bg-white border;
    }
    svg {
        @apply text-xl;
    }
    &:disabled {
        @apply pointer-events-none bg-gray-100 text-gray-300;
    }
}
</style>
