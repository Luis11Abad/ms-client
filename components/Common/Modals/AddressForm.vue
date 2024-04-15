<script setup lang="ts">
import type { Tables } from '~/types/database'

const { address } = defineProps<{
    address: Tables<'addresses'>
}>()

const emits = defineEmits(['clearAddress', 'refreshAddresses'])

const appStore = useAppStore()
const userStore = useUserStore()

const { modals } = storeToRefs(appStore)
const { user } = storeToRefs(userStore)

const form = ref({
    recipient_name: user.value.name ?? '',
    recipient_phone: user.value.phone ?? '',
    content: '',
    details: '',
    postal_code: '',
    city: '',
    state: '',
})

watch(
    () => address,
    () => {
        if (address) {
            form.value = {
                recipient_name: address.recipient_name,
                recipient_phone: address.recipient_phone,
                content: address.content,
                details: address.details,
                postal_code: address.postal_code,
                city: address.city,
                state: address.state,
            }
        }
    },
    {
        immediate: true,
    },
)

watch(
    () => modals.value,
    (a, b) => {
        if (b.includes('address-form') && !a.includes('address-form')) {
            emits('clearAddress')
        }
    },
)

function saveAddress() {
    $fetch(`/api/address/${address ? 'update' : 'store'} `, {
        method: 'post',
        body: {
            profile_id: user.value.id,
            recipient_name: form.value.recipient_name,
            recipient_phone: form.value.recipient_phone,
            content: form.value.content,
            details: form.value.details,
            postal_code: form.value.postal_code,
            city: form.value.city,
            state: form.value.state,
        },
    })
        .then(() => {
            emits('refreshAddresses')
            appStore.hideModal('address-form')
        })
        .catch((err) => {
            console.log(err)
        })
}
</script>
<template>
    <UIModal id="address-form" position="right">
        <div class="flex items-center justify-between mb-12">
            <h2>
                {{ address ? 'Editar dirección' : 'Añadir nueva dirección' }}
            </h2>
            <UICloseModalButton id="address-form" />
        </div>
        <div class="flex items-center mb-4">
            <i class="i-solar-user-outline mr-2"></i>
            <p>Información de contacto</p>
        </div>
        <UIInput v-model="form.recipient_name" label="Nombre completo" />
        <UIInput
            v-model="form.recipient_phone"
            label="Teléfono"
            :max-length="12"
        />
        <div class="flex items-center mt-2 mb-4">
            <i class="i-solar-map-point-wave-linear mr-2"></i>
            <p>Datos de dirección</p>
        </div>
        <UIInput v-model="form.content" label="Calle y número" />
        <UIInput
            v-model="form.details"
            label="Info adicional (Piso, Puerta...)"
        />
        <div class="flex gap-x-4">
            <UIInput v-model="form.city" label="Población" />
            <UIInput v-model="form.state" label="Provincia" />
        </div>
        <div class="flex w-1/2 pr-2">
            <UIInput v-model="form.postal_code" label="Código postal" />
        </div>
        <button @click="saveAddress">Guardar dirección</button>
    </UIModal>
</template>
<style>
#address-form {
    .content {
        @apply flex flex-col p-12;
        h2 {
            @apply text-lg font-medium;
        }
        .close-modal-btn {
            @apply m-0;
        }
        .input {
            @apply mb-4;
            input {
                @apply h-11;
            }
        }
        button {
            @apply h-11 bg-dark text-white mt-4;
        }
    }
}
</style>
