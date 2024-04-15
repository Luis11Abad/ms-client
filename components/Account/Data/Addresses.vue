<script setup lang="ts">
import AddressForm from '~/components/Common/Modals/AddressForm.vue'
import type { Tables } from '~/types/database'

const appStore = useAppStore()
const userStore = useUserStore()

const { user } = storeToRefs(userStore)
const selectedAddressId = ref()

const { data: addresses, refresh } = await useFetch<Tables<'addresses'>[]>(
    `/api/address/get?profileId=${user.value.id}`,
)

const selectedAddress = computed(() =>
    addresses.value?.find((item) => item.id == selectedAddressId.value),
)

function editAddress(id: string) {
    selectedAddressId.value = id
    appStore.showModal('address-form')
}
</script>
<template>
    <div class="address-data">
        <h4>Direcciones</h4>
        <p v-if="!addresses || addresses.length == 0">
            No hay direcciones agregadas a su cuenta
        </p>
        <template v-else>
            <div
                v-for="address in addresses"
                :key="address.id"
                class="address-item"
            >
                <div class="flex flex-col gap-y-2">
                    <h6>{{ address.recipient_name }}</h6>
                    <p>
                        {{ address.content }}, {{ address.postal_code }},
                        {{ address.city }},
                        {{ address.state }}
                    </p>
                    <p>{{ address.details }}</p>
                </div>
                <div class="flex gap-x-3">
                    <button @click="editAddress(address.id)">Editar</button>
                    <button>Eliminar</button>
                </div>
            </div>
        </template>
        <button @click="appStore.showModal('address-form')">
            <span>+</span> Añadir nueva
        </button>
        <AddressForm
            :key="selectedAddressId"
            :address="selectedAddress"
            @clear-address="selectedAddressId = undefined"
            @refresh-addresses="refresh"
        />
    </div>
</template>
<style>
.address-data {
    @apply flex flex-col items-start w-full;
    p {
        @apply text-base -mt-1.5;
    }
    .address-item {
        @apply flex items-center text-base justify-between border px-5 py-2.5 w-full;
        h6 {
            @apply font-medium;
        }
        button {
            @apply h-9 border bg-none w-24 hover:bg-gray-100;
        }
    }
    > button {
        @apply flex items-center justify-center w-36 h-9 text-base bg-stone-200 text-stone-800 mt-4 hover:bg-stone-300;
        span {
            @apply text-xl mr-1.5 -mt-0.5;
        }
    }
}
</style>
