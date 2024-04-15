<script setup lang="ts">
const client = useSupabaseClient()

const emits = defineEmits(['toggleView'])

const form = ref({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
})

const errorMessage = ref<string | null>(null)

async function signUp() {
    try {
        const { error } = await client.auth.signUp({
            email: form.value.email,
            password: form.value.password,
            options: {
                data: {
                    name: form.value.name,
                },
            },
        })

        if (error) throw error
    } catch (e: any) {
        errorMessage.value = e
    }
}
</script>
<template>
    <div class="create-account">
        <h2>Crear cuenta en Memora</h2>
        <UIInput
            v-model="form.name"
            icon="i-solar-user-linear"
            label="Nombre Completo"
            class="mb-4 mt-2"
        />
        <UIInput
            v-model="form.email"
            icon="i-solar-letter-outline"
            label="Email"
            class="mb-4"
        />
        <UIInput
            v-model="form.password"
            type="password"
            icon="i-solar-lock-password-unlocked-broken"
            label="Contraseña"
            class="mb-4"
        />
        <UIInput
            v-model="form.confirmPassword"
            type="password"
            icon="i-solar-lock-password-outline"
            label="Confirmar contraseña"
            class="mb-4"
        />
        <div class="flex items-center my-2">
            <UICheckbox />
            <p class="ml-3 !mb-0 !text-dark">
                Acepto los
                <nuxt-link to="/terms">terminos y condiciones</nuxt-link> y las
                <nuxt-link to="/policy">políticas de privacidad</nuxt-link> de
                Memora
            </p>
        </div>
        <button @click="signUp">Crear cuenta</button>
        <div class="cm-link">
            ¿Ya tienes cuenta en Memora?
            <span @click="emits('toggleView')">Inicia sesión</span>
        </div>
    </div>
</template>
