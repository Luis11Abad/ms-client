<script setup lang="ts">
const supabase = useSupabaseClient()

async function signIn() {
    try {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
        if (error) throw error.message
    } catch (err) {
        console.log(err)
    }
}
</script>
<template>
    <button @click="signIn">
        <img width="20" src="/images/google.webp" alt="" />
        <p class="!text-base ml-3 !mb-0">Google</p>
    </button>
</template>
