<script setup lang="ts">
const authStore = useAuthStore()
</script>
<template>
    <div>
        <!-- {{ info }} -->
        <button @click="authStore.logout()">Logout</button>
    </div>
</template>
