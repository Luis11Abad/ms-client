<script setup lang="ts">
import { Icon } from '@iconify/vue'

const { file } = defineProps<{
    file: any
}>()
</script>
<template>
    <div class="file-item">
        <img :src="file.url" :alt="file.description" class="w-full" />
        <UiAdminDropdown>
            <template #activator>
                <button>
                    <Icon icon="solar:menu-dots-bold" />
                </button>
            </template>
            <template #content>
                <button>
                    <Icon icon="solar:square-arrow-right-up-broken" />{{
                        $t('open')
                    }}
                </button>
                <button>
                    <Icon icon="solar:link-minimalistic-2-linear" />{{
                        $t('copy-link')
                    }}
                </button>
                <button class="delete">
                    <Icon icon="solar:trash-bin-2-outline" />{{ $t('delete') }}
                </button>
            </template>
        </UiAdminDropdown>
    </div>
</template>
<style>
.file-gallery .file-item {
    @apply w-full h-60 flex items-center bg-gray-100 rounded-md border border-gray-200 relative overflow-hidden;
    .ui-dropdown {
        @apply hidden absolute top-2 right-2;
        > button {
            @apply h-7 w-7 flex items-center justify-center bg-blue-700/10 rounded-full;
            svg {
                @apply rotate-90 text-blue-700;
            }
        }
        .content {
            @apply flex flex-col;
            > button {
                @apply h-9 flex items-center pl-2 pr-6 text-sm hover:bg-blue-50 hover:text-blue-700;
                svg {
                    @apply text-base scale-95 mr-1.5;
                }
                &.delete {
                    @apply hover:bg-red-50 hover:text-red-500;
                }
            }
        }
    }
    &:hover {
        .ui-dropdown {
            @apply flex;
        }
    }
}
</style>
