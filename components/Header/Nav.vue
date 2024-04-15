<script setup lang="ts">
import type { Tables } from '~/types/database'

const { data: menuData } = useFetch<Tables<'menu_items'>[]>('/api/menuItem/get')

const menu = computed(() => {
    const items =
        menuData.value && menuData.value.length > 0
            ? (menuData.value as Tables<'menu_items'>[])
            : ([] as Tables<'menu_items'>[])

    return items.map((item: Tables<'menu_items'>) => {
        return {
            id: item.id,
            label: item.label,
            url: item.url,
            icon: item.icon,
            parent_id: item.parent_id,
            level: item.level,
        }
    })
})
const firstLevelItems = computed(() =>
    menu.value.filter((item) => item.level == 0),
)

function getFullChilds(id: number) {
    return menu.value.filter((item) => item.parent_id == id)
}
</script>
<template>
    <UIModal id="navbar" position="left">
        <nav>
            <UICloseModalButton id="navbar" />
            <ul class="first-level">
                <li v-for="item in firstLevelItems">
                    <nuxt-link :to="`/category/${item.url}`">{{
                        item.label
                    }}</nuxt-link>
                    <ul
                        v-if="getFullChilds(item.id).length > 0"
                        class="second-level"
                    >
                        <li v-for="n1Child in getFullChilds(item.id)">
                            <nuxt-link :to="`/category/${n1Child.url}`">
                                {{ n1Child.label }}
                            </nuxt-link>
                            <ul
                                v-if="getFullChilds(n1Child.id).length > 0"
                                class="third-level"
                            >
                                <li
                                    v-for="n2Child in getFullChilds(n1Child.id)"
                                >
                                    <nuxt-link
                                        :to="`/category/${n2Child.url}`"
                                        >{{ n2Child.label }}</nuxt-link
                                    >
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </UIModal>
</template>
<style>
nav {
    @apply flex flex-col px-12 w-full;
    button {
        @apply flex items-center justify-center mr-auto mt-12 mb-6 w-9 h-9 hover:bg-light;
        svg {
            @apply w-6 h-6;
        }
    }
    ul {
        @apply flex flex-col items-start;
        li a {
            @apply flex items-center hover:underline;
        }
        &.first-level {
            > li {
                > a {
                    @apply text-2xl font-medium mb-4;
                }
            }
        }
        &.second-level {
            > li > a {
                @apply text-lg font-normal;
            }
        }
        &.third-level {
            > li {
                @apply mt-2;
                &:last-child {
                    @apply mb-4;
                }
                > a {
                    @apply text-base scale-105 ml-1;
                }
            }
        }
    }
}
</style>
