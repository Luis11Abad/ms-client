<script setup lang="ts">
import { Icon } from '@iconify/vue'

const supabase = useSupabaseClient()

const email = ref('')
const password = ref('')
const errorMessage = ref('')

async function login() {
    const { error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })
    errorMessage.value = error?.message ?? ''
    if (error == null) navigateTo('/account/confirm')
}

async function GoogleLogin() {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:3000/account/confirm',
        },
    })
    errorMessage.value = error?.message ?? ''
}
</script>
<template>
    <form class="form" @submit.prevent="login">
        <h2>{{ $t('sign-in') }}</h2>
        <h6>{{ $t('enter-your-credentials') }}</h6>
        <input
            v-model="email"
            :placeholder="$t('email')"
            type="email"
            required
        />
        <input
            v-model="password"
            :placeholder="$t('password')"
            type="password"
            minlength="8"
            autocomplete="new-password"
            required
        />
        <nuxt-link class="mb-6 mx-auto font-normal -mt-1">{{
            $t('forget-your-password')
        }}</nuxt-link>
        <button>{{ $t('sign-in') }}</button>
        <span class="text-center text-red-500">{{ errorMessage }}</span>
        <p class="separator">{{ $t('or-sign-in-with') }}</p>
        <div class="social-buttons">
            <button @click.prevent="GoogleLogin">
                <Icon icon="prime:google" />Google
            </button>
            <button><Icon icon="prime:facebook" />Facebook</button>
        </div>
        <p>
            {{ $t('ask-no-account') }}
            <nuxt-link to="/account/register">{{ $t('sign-up') }}.</nuxt-link>
        </p>
    </form>
</template>
<style>
#login form {
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
    button {
        @apply bg-primary rounded-lg text-black h-11 mt-1 text-sm hover:bg-primary/90;
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
            @apply flex items-center px-4 gap-x-1.5 border bg-white hover:bg-primary/50;
            svg {
                @apply text-xl;
            }
        }
    }
}
</style>
