<script setup lang="ts">
import Login from './Forms/Login.vue'
import Register from './Forms/Register.vue'

enum viewModes {
    LOGIN,
    REGISTER,
}

const viewMode = ref<viewModes>(viewModes.LOGIN)
</script>
<template>
    <div class="login-form">
        <Login
            v-if="viewMode == viewModes.LOGIN"
            @toggle-view="viewMode = viewModes.REGISTER"
        />
        <Register
            v-if="viewMode == viewModes.REGISTER"
            @toggle-view="viewMode = viewModes.LOGIN"
        />
    </div>
</template>
<style>
.login-form {
    @apply flex flex-col items-center lg:items-start justify-center pt-8 lg:pt-0 px-8 lg:px-16 flex-1 h-screen;
    h2 {
        @apply text-2xl font-bold mb-6;
    }
    p {
        @apply text-base mb-4 text-grey;
    }
    .social-login,
    .regular-login,
    .create-account {
        @apply flex w-full max-w-md;
    }
    .social-login {
        @apply gap-x-4;
        button {
            @apply flex-1 bg-white border mt-2 mb-6 flex justify-center items-center text-dark;
        }
    }
    .regular-login,
    .create-account {
        @apply flex-col;
        button {
            @apply w-full bg-accent text-white mt-4;
        }
    }
    .regular-login {
        a {
            @apply text-base mt-2 mb-4 ml-auto;
        }
    }
    .cm-link {
        @apply text-base mt-2 mx-auto;
        span {
            @apply ml-1 underline cursor-pointer;
        }
    }
    a {
        @apply underline;
    }
}
</style>
