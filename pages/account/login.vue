<script setup lang="ts">
import { Icon } from '@iconify/vue'

const config = useRuntimeConfig()
const { t } = useI18n()

useSeoMeta({
    title: `${t('login')} | ${config.public.appName}`,
})

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const accesToken = useCookie('access_token')

async function login() {
    const { data, error } = await useFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: email.value, password: password.value }),
    })
    const { token } = data.value.data
    if (token) accesToken.value = token
    if (error.value) errorMessage.value = error.value.message
}

async function GoogleLogin() {}
</script>
<template>
    <NuxtLayout name="auth" title="Que bueno tenerte de vuelta">
        <form @submit.prevent="login">
            <button class="social-button" @click.prevent="GoogleLogin">
                <Icon icon="logos:google-icon" />{{ $t('login-with-google') }}
            </button>
            <button class="social-button">
                <Icon icon="logos:facebook" />{{ $t('login-with-facebook') }}
            </button>
            <p>{{ $t('or-enter-your-credentials') }}</p>
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
            <nuxt-link class="mb-6 ml-auto !font-normal">{{
                $t('forget-your-password')
            }}</nuxt-link>
            <button>{{ $t('sign-in') }}</button>
            <span class="text-center text-red-500">{{ errorMessage }}</span>
            <p>
                {{ $t('ask-no-account') }}
                <nuxt-link to="/account/register"
                    >{{ $t('sign-up') }}.</nuxt-link
                >
            </p>
        </form>
    </NuxtLayout>
</template>
