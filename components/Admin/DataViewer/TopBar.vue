<script setup lang="ts">
const props = defineProps<{
    count: number
    dataKey: string
    list?: any[]
    page: number
}>()

const emits = defineEmits(['callFetchFilter'])

const total = toRef(props, 'count')
const list = toRef(props, 'list')
const page = toRef(props, 'page')

const itemsPerPage = ref(25)
const paginationFrom = computed(() => page.value * itemsPerPage.value + 1)
const paginationTo = computed(() =>
    list.value ? paginationFrom.value + list.value.length - 1 : 0,
)
</script>
<template>
    <div class="data-top-bar">
        {{ paginationFrom }} - {{ paginationTo }} of {{ total }}
        <UIAdminSearchBar :data-key="props.dataKey" />
    </div>
</template>
<style>
.data-top-bar {
    @apply h-12 flex items-center justify-between px-4 border rounded-lg mb-4 text-sm bg-white;
}
</style>
