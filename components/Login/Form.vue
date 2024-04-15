<script setup lang="ts">
import { Icon } from '@iconify/vue'

const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const error = ref('')

async function login() {
    try {
        const res: Response = await $fetch('/api/auth/login', {
            method: 'POST',
            body: {
                email: email.value,
                password: password.value,
            },
        })
        if (res.data.token) authStore.authenticateUser(res.data)
    } catch (e) {
        error.value = handleFetchErrors(e)
    }
}
</script>
<template>
    <form class="form" @submit.prevent="login">
        <h2>{{ $t('sign-in') }}</h2>
        <h6>{{ $t('enter-your-credentials') }}</h6>
        <input v-model="email" :placeholder="$t('email')" type="email" />
        <input
            v-model="password"
            :placeholder="$t('password')"
            type="password"
        />
        <nuxt-link class="mb-6 font-normal -mt-1">{{
            $t('forget-your-password')
        }}</nuxt-link>
        <button>{{ $t('sign-in') }}</button>
        <span class="text-center text-red-500">{{ error }}</span>
        <p class="separator">{{ $t('or-sign-in-with') }}</p>
        <div class="social-buttons">
            <button><Icon icon="prime:google" />Google</button>
            <button><Icon icon="prime:facebook" />Facebook</button>
        </div>
        <p>
            {{ $t('ask-account') }} <nuxt-link>{{ $t('sign-up') }}.</nuxt-link>
        </p>
    </form>
</template>
<style>
form {
    @apply flex flex-col bg-white shadow-lg p-8 rounded-3xl w-11/12 max-w-md;
    h2 {
        @apply text-2xl font-semibold mx-auto tracking-tight;
    }
    h6 {
        @apply text-center mt-5 mb-7;
    }
    p {
        @apply text-sm text-black my-6 mx-auto;
    }
    a {
        @apply font-semibold hover:underline cursor-pointer text-sm;
    }
    input {
        @apply bg-white border w-full rounded-md h-11 px-4 mb-4 text-sm;
    }
    button {
        @apply bg-[#FEC887] rounded-lg text-black h-11 mt-1 text-sm hover:bg-[#FEC887]/90;
    }
    .separator {
        @apply relative;
        &::before,
        &::after {
            @apply content-[''] w-3 h-px bg-black absolute top-1/2;
        }
        &::before {
            @apply -left-7;
        }
        &::after {
            @apply -right-7;
        }
    }
    .social-buttons {
        @apply flex justify-center gap-x-4;
        button {
            @apply flex items-center px-4 gap-x-1.5 border bg-white;
            svg {
                @apply text-xl;
            }
        }
    }
}
</style>
