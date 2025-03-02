<script setup lang="ts">
import { Icon } from '@iconify/vue'

const config = useRuntimeConfig()

const { t } = useI18n()

const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ //eslint-disable-line
const numberRegex = /\d/

const name = ref('')
const email = ref('')
const password = ref('')
const errorMessage = ref('')

const passwordLengthValidated = computed(() => password.value.length >= 8)
const passwordNumberOrSpecialValidated = computed(
    () =>
        specialCharacterRegex.test(password.value) ||
        numberRegex.test(password.value),
)

async function register() {
    try {
        console.log('to-do')
    } catch (err) {
        errorMessage.value = JSON.stringify(err) ?? ''
    }
}

useSeoMeta({
    title: `${t('confirm-account')} | ${config.public.appName}`,
})
</script>
<template>
    <NuxtLayout name="auth" title="Que bueno tenerte de vuelta">
        <button class="social-button">
            <Icon icon="logos:google-icon" />{{ $t('login-with-google') }}
        </button>
        <button class="social-button">
            <Icon icon="logos:facebook" />{{ $t('login-with-facebook') }}
        </button>
        <p>{{ $t('or-enter-your-credentials') }}</p>
        <form class="form" @submit.prevent="register">
            <input
                v-model="name"
                :placeholder="$t('full-name')"
                type="text"
                required
                minlength="2"
            />
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
                required
                autocomplete="new-password"
            />
            <ul class="password-validator">
                <li>
                    <div
                        :class="
                            passwordLengthValidated
                                ? 'bg-green-400'
                                : 'bg-gray-400'
                        "
                        class="w-4 h-4"
                    >
                        <Icon
                            class="text-white"
                            :icon="
                                passwordLengthValidated
                                    ? 'material-symbols:check'
                                    : 'material-symbols:close'
                            "
                            height="16"
                        />
                    </div>
                    {{ $t('min-8-length') }}
                </li>
                <li>
                    <div
                        :class="
                            passwordNumberOrSpecialValidated
                                ? 'bg-green-400'
                                : 'bg-gray-400'
                        "
                        class="w-4 h-4"
                    >
                        <Icon
                            class="text-white"
                            :icon="
                                passwordNumberOrSpecialValidated
                                    ? 'material-symbols:check'
                                    : 'material-symbols:close'
                            "
                            height="16"
                        />
                    </div>
                    {{ $t('number-or-special-character') }}
                </li>
            </ul>
            <button type="submit">{{ $t('sign-up') }}</button>
            <span class="text-center text-red-500">{{ errorMessage }}</span>
        </form>
        <p>
            {{ $t('ask-already-account') }}
            <nuxt-link to="/account/login">{{ $t('login') }}.</nuxt-link>
        </p>
    </NuxtLayout>
</template>
<style>
.password-validator {
    @apply list-none mt-3 mb-6;
    li {
        @apply flex items-center gap-x-2;
        svg {
            @apply text-lg scale-[.8];
        }
    }
}
</style>
