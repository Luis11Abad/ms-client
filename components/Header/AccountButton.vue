<script lang="ts" setup>
import { Icon } from '@iconify/vue/dist/iconify.js'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
</script>
<template>
    <button
        id="account-button"
        @click="navigateTo(user != null ? '/account' : 'login')"
    >
        <Icon icon="solar:user-linear" />{{
            user != null ? user.name : $t('access')
        }}
    </button>
</template>
<style>
#account-button {
    @apply flex h-9 items-center px-3 text-sm rounded border hover:bg-primary/50 hover:border-white;
    svg {
        @apply mr-1.5 scale-110;
    }
}
</style>
