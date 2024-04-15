<script setup lang="ts">
defineEmits(['update:modelValue'])

const {
    icon,
    label,
    modelValue = '',
    readonly = false,
    type = 'text',
    maxLength,
} = defineProps<{
    icon?: string
    label?: string
    modelValue: string
    readonly?: boolean
    type?: 'text' | 'password' | 'number'
    maxLength?: number
}>()
</script>
<template>
    <div class="input">
        <i v-if="icon" :class="icon"></i>
        <input
            :value="modelValue"
            :type="type"
            :readonly="readonly"
            :class="{ 'with-icon': icon }"
            :placeholder="label"
            :maxlength="maxLength"
            @input="
                $emit(
                    'update:modelValue',
                    (<HTMLInputElement>$event.target).value,
                )
            "
        />
    </div>
</template>
<style>
.input {
    @apply w-full relative;
    i {
        @apply absolute text-lg top-1/2 left-4 -translate-y-1/2;
    }
    input {
        @apply w-full max-w-md h-12 border border-stone-300 px-4 text-base outline-none;
        &.with-icon {
            @apply pl-11;
        }
        &:read-only {
            @apply bg-gray-50;
        }
    }
}
</style>
