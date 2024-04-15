<script setup lang="ts">
import Facebook from './SocialButtons/Facebook.vue'
import Google from './SocialButtons/Google.vue'

const emits = defineEmits(['toggleView'])

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const form = ref({
    email: '',
    password: '',
})
const loginError = ref<string | null>(null)

watchEffect(() => {
    if (user.value) {
        return navigateTo('/')
    }
})

async function signIn() {
    try {
        const { error } = await supabase.auth.signInWithPassword({
            email: form.value.email,
            password: form.value.password,
        })
        if (error) throw error.message
        loginError.value = null
        navigateTo('/account')
    } catch (err: any) {
        loginError.value = err
    }
}
</script>
<template>
    <h2>Accede a tu cuenta</h2>
    <div class="social-login">
        <Google />
        <Facebook />
    </div>
    <div class="regular-login">
        <p>O continua con tu correo electrónico</p>
        <div v-if="loginError" class="error">{{ loginError }}</div>
        <UIInput
            v-model="form.email"
            icon="i-solar-letter-outline"
            label="coolclient@memora.com"
            class="mb-4"
        />
        <UIInput
            v-model="form.password"
            type="password"
            icon="i-solar-lock-password-outline"
            label="**********"
        />
        <nuxt-link to="/recover">¿Olvidaste tu contraseña?</nuxt-link>
        <button @click="signIn">Continuar</button>
        <div class="cm-link">
            ¿Aún no tienes cuenta?
            <span @click="emits('toggleView')">Crea una ahora</span>
        </div>
    </div>
</template>
<style>
.error {
    @apply flex justify-center bg-red-100 text-red-500 w-full text-base py-3 mb-3;
}
</style>
