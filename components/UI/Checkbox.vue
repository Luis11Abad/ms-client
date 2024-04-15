<script setup lang="ts">
const { value = false } = defineProps<{
    value?: boolean
}>()

const checked = ref(value)
</script>
<template>
    <div
        class="checkbox"
        :class="{ 'border-transparent': checked }"
        @click="checked = !checked"
    >
        <i v-if="checked" class="i-solar-check-square-bold"></i>
    </div>
</template>
<style>
.checkbox {
    @apply h-[22px] w-[22px] border relative flex-none;
    i {
        @apply absolute -left-0.5 -top-0.5 text-2xl scale-110 text-accent;
    }
}
</style>
