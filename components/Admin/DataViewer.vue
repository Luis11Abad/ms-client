<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useListData } from '~/composables/useListData'

const slots = useSlots()
const { dataKey } = defineProps<{
    dataKey: string
}>()

const { columns, count, list, page, pending } = await useListData(dataKey)

async function updateItem(id: string, field: string, value: any) {
    const res = await useSaveItem(dataKey, id, { [field]: value })
    if (res) {
        const updatedIndex = list.value!.findIndex(
            (item: Entity) => item.id == id,
        )
        list.value![updatedIndex] = res
    }
}
</script>
<template>
    <AdminDataViewerTopBar
        :count="count"
        :data-key="dataKey"
        :list="list"
        :page="page"
    />
    <p v-if="pending">Cargando....</p>
    <div
        v-else
        class="flex flex-col flex-1 justify-between bg-white border rounded-lg overflow-hidden"
    >
        <table v-if="list">
            <thead>
                <tr>
                    <th></th>
                    <th v-for="field in columns" :key="field.name">
                        {{ field.name }}
                    </th>
                    <th v-if="slots.actions">
                        <Icon icon="solar:settings-linear" />
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list" :key="item.id">
                    <td></td>
                    <td v-for="field in columns" :key="field.name">
                        <UIToggle
                            v-if="field.type == 'boolean'"
                            :value="item[field.name]"
                            @toggle-value="
                                (value: boolean) =>
                                    updateItem(item.id, field.name, value)
                            "
                        />
                        <span v-else>{{
                            isNullOrEmpty(item[field.name])
                                ? '---'
                                : item[field.name]
                        }}</span>
                    </td>
                    <td v-if="slots.actions">
                        <slot name="actions" :item-id="item.id"></slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style>
table {
    @apply w-full;
    thead {
        @apply bg-blue-50 h-10 rounded-t-lg overflow-hidden;
        th {
            @apply font-medium capitalize text-left px-4 text-sm;
        }
    }
    tbody {
        @apply -mt-px rounded-b-lg;
        tr {
            @apply h-10;
            td {
                @apply px-4 overflow-hidden truncate text-sm;
            }
            &:nth-child(even) {
                @apply bg-gray-50;
            }
        }
    }
}
</style>
