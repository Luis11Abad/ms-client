<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()

async function signIn() {
    try {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'facebook',
        })
        if (error) throw error.message
    } catch (err) {
        console.log(err)
    }
}
</script>
<template>
    <button @click="signIn">
        <img width="20" src="/images/facebook.webp" alt="" />
        <p class="!text-base ml-3 !mb-0">Facebook</p>
    </button>
</template>
