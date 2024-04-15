<script setup lang="ts">
import { Icon } from '@iconify/vue'
const { sections, selectedSectionKey = 0 } = defineProps<{
    sections: any[]
    selectedSectionKey?: string
}>()

const emits = defineEmits(['setSelectedSectionKey'])
</script>
<template>
    <div class="options">
        <ul>
            <li
                v-for="section in sections"
                :key="section.key"
                :class="{ 'bg-white': selectedSectionKey == section.key }"
                @click="emits('setSelectedSectionKey', section.key)"
            >
                <Icon :icon="section.icon" />
                {{ section.label }}
            </li>
        </ul>
    </div>
</template>
<style>
#account {
    .sections {
        @apply flex-1 gap-x-0.5;
        .options {
            @apply flex flex-col justify-between w-1/4;
            min-height: calc(100vh - 225px);
            ul {
                @apply w-full;
                li {
                    @apply w-full h-12 px-4 flex items-center text-base mb-0.5 cursor-pointer hover:bg-white;
                    i {
                        @apply mr-2 text-xl;
                    }
                }
            }
        }
    }
}
</style>
