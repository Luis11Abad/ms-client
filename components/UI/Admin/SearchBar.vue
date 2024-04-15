<script setup lang="ts">
import { Icon } from '@iconify/vue'
import debounce from 'lodash.debounce'

const route = useRoute()

const search = ref('')

watch(
    () => search.value,
    debounce(() => {
        navigateTo({
            path: route.path,
            query: { ...route.query, qs: search.value },
        })
    }, 700),
)
</script>
<template>
    <div class="ui-searchbar">
        <Icon icon="solar:magnifer-outline" />
        <input v-model="search" type="text" :placeholder="$t('search')" />
    </div>
</template>
<style>
#admin .ui-searchbar {
    @apply h-9 flex items-center px-2.5 border rounded-lg bg-blue-50 bg-opacity-50 flex-1 max-w-xs;
    svg {
        @apply text-lg scale-90 mr-2 flex-none;
    }
}
</style>
