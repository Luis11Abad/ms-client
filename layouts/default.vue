<script setup lang="ts">
import { AUTH_ROUTES } from '~/constants'

const route = useRoute()
</script>
<template>
    <div class="h-screen w-screen flex flex-col">
        <Header v-if="AUTH_ROUTES.includes(route.name as string)" />
        <slot></slot>
    </div>
</template>
