<script setup lang="ts">
const { value } = defineProps<{
    value: boolean
}>()
const emits = defineEmits(['toggleValue'])
</script>
<template>
    <label class="toggle">
        <input
            type="checkbox"
            :checked="value"
            @click="emits('toggleValue', !value)"
        />
        <div :class="value && 'checked'"></div>
    </label>
</template>
<style>
.toggle {
    @apply inline-flex items-center cursor-pointer;
    input {
        @apply sr-only;
    }
    div {
        @apply relative w-11 h-6 bg-gray-200  after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after: after:h-5 after:w-5 after:transition-all;
        &.checked {
            @apply after:translate-x-full after:border-white bg-blue-600;
        }
    }
}
</style>
