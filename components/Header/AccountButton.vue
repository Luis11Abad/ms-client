<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const { account } = useAccount()
</script>
<template>
    <button
        id="account-button"
        @click="navigateTo(account != null ? '/account' : 'login')"
    >
        <Icon icon="solar:user-linear" />{{
            account != null ? account.name : $t('access')
        }}
    </button>
</template>
<style>
#account-button {
    @apply flex h-9 items-center px-3  rounded border hover:bg-primary/50 hover:border-white;
    svg {
        @apply mr-1.5 scale-110;
    }
}
</style>
