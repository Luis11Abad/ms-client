<script setup lang="ts">
import Contact from './Data/Contact.vue'
import Addresses from './Data/Addresses.vue'
</script>
<template>
    <div class="account-data">
        <Contact />
        <Addresses />
    </div>
</template>
<style>
.account-data {
    @apply flex flex-col p-6 w-full;
    h4 {
        @apply font-medium mb-4;
    }
}
</style>
