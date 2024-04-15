<script setup lang="ts">
const { id } = defineProps<{
    id: string
}>()

const appStore = useAppStore()
</script>
<template>
    <button class="close-modal-btn" @click="appStore.hideModal(id)">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
        >
            <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M368 368L144 144m224 0L144 368"
            />
        </svg>
    </button>
</template>
<style>
.close-modal-btn {
    @apply flex items-center justify-center ml-auto mb-12 !w-9 !h-9 !text-dark !bg-white hover:!bg-light;
    svg {
        @apply w-6 h-6;
    }
}
</style>
