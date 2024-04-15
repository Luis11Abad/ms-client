<script setup lang="ts">
definePageMeta({
    layout: 'admin',
    name: 'users',
    middleware: ['auth'],
})

const { t } = useI18n()
useSeoMeta({ title: `${t('users')} | LAMPS Admin` })
</script>
<template>
    <div class="h-full flex flex-col px-4">
        <AdminDataViewer data-key="users">
            <template #actions="{ itemId }">
                <UIAdminButton
                    label="Edit"
                    @click="navigateTo(`/admin/users/${itemId}`)"
                />
                <button>Delete</button>
            </template>
        </AdminDataViewer>
    </div>
</template>
