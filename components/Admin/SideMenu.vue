<script setup lang="ts">
import { adminSections } from '~/constants'
</script>
<template>
    <div class="sidemenu">
        <AdminSideMenuLogo />
        <AdminSideMenuItem
            v-for="item in adminSections"
            :icon="item.icon"
            :item-key="item.key"
        />
        <AdminSideMenuUserMenu />
    </div>
</template>
<style>
#admin .sidemenu {
    @apply flex flex-col h-full w-[275px] border-r bg-white;
}
</style>
