<script setup lang="ts">
const {
    id,
    position,
    staticBackdrop = false,
} = defineProps<{
    id: string
    position?: 'top' | 'left' | 'bottom' | 'right' | 'center'
    staticBackdrop?: boolean
}>()

const appStore = useAppStore()
const { modals } = storeToRefs(appStore)

const show = computed(() => modals.value.includes(id))
</script>
<template>
    <Teleport to="body">
        <div
            :id="id"
            class="modal"
            :class="[position ?? 'center', { show: show }]"
        >
            <div class="content">
                <slot></slot>
            </div>
            <div
                class="overlay"
                :class="{ static: staticBackdrop }"
                @click="appStore.hideModal(id)"
            ></div>
        </div>
    </Teleport>
</template>
<style>
.modal {
    @apply fixed top-0 left-0 w-screen h-screen z-50 hidden;
    &.show {
        @apply flex;
    }
    &.static {
        @apply cursor-default;
    }
    .content {
        @apply bg-white w-screen relative z-10 sm:max-w-[415px];
    }
    .overlay {
        @apply absolute top-0 left-0 w-full h-full bg-black/40 cursor-pointer z-0;
        &.static {
            @apply pointer-events-none cursor-default;
        }
    }
    &.center {
        @apply justify-center items-center;
    }
    &.left,
    &.right {
        .content {
            @apply h-screen;
        }
    }
    &.left {
        @apply justify-start;
    }
    &.right {
        @apply justify-end;
    }
    &.top,
    &.bottom {
        .content {
            @appply w-screen;
        }
    }
    &.top {
        @apply items-start;
    }
    &.bottom {
        @apply items-end;
    }
}
</style>
