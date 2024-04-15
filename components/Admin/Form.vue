<script lang="ts" setup>
const route = useRoute()

const { dataKey } = defineProps<{
    dataKey: string
}>()

const { columns, createItem, edition, isEdited, updateItem } =
    await useAdminForm(dataKey)
</script>
<template>
    <div class="flex flex-col bg-white m-4 p-6 rounded-md border">
        <div class="flex flex-col mb-6">
            <template v-for="column in columns">
                <p
                    v-if="column.type != 'uuid'"
                    :key="column.name"
                    class="mb-2 mt-4 text-sm"
                >
                    {{ $t(column.name) }}
                </p>
                <UIInput
                    v-if="column.type === 'text'"
                    :key="column.name"
                    v-model="edition[column.name]"
                />
                <UIToggle
                    v-if="column.type === 'boolean'"
                    :key="column.name"
                    :value="edition[column.name]"
                />
                <select
                    v-if="column.type === 'enum'"
                    :key="column.name"
                    v-model="edition[column.name]"
                    class="uppercase"
                >
                    <option
                        v-for="option in column.options"
                        :key="option"
                        class="uppercase"
                        :value="option"
                    >
                        {{ option }}
                    </option>
                </select>
            </template>
        </div>
        <UiAdminButton
            :label="$t('save')"
            :disabled="Boolean(route.params.id && !isEdited)"
            @click="
                route.params.id
                    ? updateItem(route.params.id as string)
                    : createItem()
            "
        />
    </div>
</template>
