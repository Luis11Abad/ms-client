<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useListData } from '~/composables/useListData'

const { dataKey = 'none' } = defineProps<{
    dataKey?: string
}>()

const { count, list, page, pending } = await useListData(dataKey)
</script>
<template>
    <AdminDataViewerTopBar
        :count="count"
        :data-key="dataKey"
        :list="list"
        :page="page"
    />
    <div class="file-gallery">
        <template v-if="pending">
            <AdminImageViewerSkeletonItem v-for="i in 6" :key="i" />
        </template>
        <template v-else>
            <AdminImageViewerItem
                v-for="file in list"
                :key="file.url"
                :file="file"
            />
        </template>
    </div>
</template>
<style>
.file-gallery {
    @apply grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4;
}
</style>
