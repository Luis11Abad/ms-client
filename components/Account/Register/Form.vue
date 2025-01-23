<script setup lang="ts">
import { Icon } from '@iconify/vue'

const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ //eslint-disable-line
const numberRegex = /\d/

const name = ref('')
const email = ref('')
const phone = ref('')
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
</script>
<template>
    <form class="form" @submit.prevent="register">
        <h2>{{ $t('sign-up') }}</h2>
        <h6>{{ $t('fill-form-to-join-platform') }}</h6>
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
            v-model="phone"
            :placeholder="`${$t('phone')} (${$t('optional')})`"
            type="tel"
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
                <Icon
                    v-if="passwordLengthValidated"
                    class="text-green-400"
                    icon="solar:check-circle-bold"
                />
                <Icon
                    v-else
                    class="text-gray-400/80"
                    icon="solar:close-circle-bold"
                />
                {{ $t('min-8-length') }}
            </li>
            <li>
                <Icon
                    v-if="passwordNumberOrSpecialValidated"
                    class="text-green-400"
                    icon="solar:check-circle-bold"
                />
                <Icon
                    v-else
                    class="text-gray-400/80"
                    icon="solar:close-circle-bold"
                />
                {{ $t('number-or-special-character') }}
            </li>
        </ul>
        <button type="submit">{{ $t('sign-up') }}</button>
        <span class="text-center text-red-500">{{ errorMessage }}</span>
        <p>
            {{ $t('ask-already-account') }}
            <nuxt-link to="/account/login">{{ $t('login') }}.</nuxt-link>
        </p>
    </form>
</template>
<style>
#sign-up form {
    @apply flex flex-col bg-white border p-8 rounded-3xl w-11/12 max-w-md;
    h2 {
        @apply text-2xl font-semibold mx-auto tracking-tight;
    }
    h6 {
        @apply text-center mt-5 mb-7;
    }
    p {
        @apply  text-black my-6 mx-auto;
    }
    a {
        @apply font-semibold hover:underline cursor-pointer ;
    }
    button {
        @apply bg-primary rounded-lg text-black h-11 mt-1  hover:bg-primary/90;
    }
    .password-validator {
        @apply list-none -mt-1 mb-6 pl-4;
        li {
            @apply  flex items-center gap-x-2;
            svg {
                @apply text-lg scale-[.8];
            }
        }
    }
}
</style>
