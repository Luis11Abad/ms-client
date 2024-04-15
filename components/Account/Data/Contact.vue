<script setup lang="ts">
import type { Tables } from '~/types/database'

const userStore = useUserStore()

const { user } = storeToRefs(userStore)

const form = ref<Tables<'profiles'>>({ ...user.value })

const formEdited = computed(() =>
    Boolean(
        form.value.name != user.value?.name ||
            form.value.email != user.value?.email ||
            form.value.phone != user.value?.phone,
    ),
)

const phoneIsValid = computed(() =>
    Boolean(
        form.value.phone == '' ||
            !form.value.phone ||
            form.value?.phone.length > 8,
    ),
)

watch(
    () => user.value,
    () => {
        if (user.value != undefined) {
            form.value = { ...user.value }
        }
    },
)

function updateContact() {
    $fetch('/api/user/update', {
        method: 'post',
        body: {
            id: form.value.id,
            name: form.value.name,
            email: form.value.email,
            phone: form.value.phone,
        },
    })
        .then(() => {
            userStore.setUser({ ...form.value })
        })
        .catch((err) => {
            console.log(err)
        })
}
</script>
<template>
    <div class="contact-data">
        <h4>Datos de Contacto</h4>
        <div class="form">
            <UIInput
                v-model="form.name"
                label="Nombre completo"
                icon="i-solar-user-linear"
            />
            <UIInput
                v-model="form.email"
                label="Email"
                icon="i-solar-letter-outline"
                readonly
            />
            <UIInput
                v-model="form.phone"
                label="Teléfono"
                icon="i-solar-phone-outline"
                :max-length="12"
            />
        </div>
        <button :disabled="!formEdited || !phoneIsValid" @click="updateContact">
            Guardar cambios
        </button>
    </div>
</template>
<style>
.contact-data {
    @apply flex items-start flex-col w-full;
    .form {
        @apply flex gap-x-4 flex-wrap;
        .input {
            @apply mb-4 w-64;
            input {
                @apply h-11;
            }
        }
    }
    button {
        @apply h-9 w-36 bg-accent text-base text-white mb-6;
        &:disabled {
            @apply bg-opacity-60 pointer-events-none;
        }
    }
}
</style>
