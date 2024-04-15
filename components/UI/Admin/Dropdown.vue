<script setup lang="ts">
const { defaultOpen, xDirection, yDirection } = withDefaults(
    defineProps<{
        defaultOpen?: boolean
        xDirection?: 'left' | 'right'
        yDirection?: 'top' | 'bottom'
    }>(),
    {
        xDirection: 'left',
        yDirection: 'bottom',
    },
)

const open = ref(defaultOpen)

function toggleOpen() {
    open.value = !open.value
}
</script>
<template>
    <div class="ui-dropdown">
        <slot name="activator"></slot>
        <div v-if="open" :class="`content ${xDirection} ${yDirection}`">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<style>
.ui-dropdown {
    @apply relative;
    .content {
        @apply absolute bg-white shadow-lg rounded-lg whitespace-nowrap;
        &.left {
            @apply right-0;
        }
        &.right {
            @apply left-0;
        }
        &.top {
            @apply bottom-8;
        }
        &.bottom {
            @apply top-8;
        }
    }
}
</style>
