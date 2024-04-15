<script setup lang="ts">
const activeFeature = ref(0)
const screenWidth = ref(0)

onMounted(() => {
    setInterval(() => {
        activeFeature.value =
            activeFeature.value == 2 ? 0 : activeFeature.value + 1
    }, 10000)

    screenWidth.value = window.innerWidth
    window.addEventListener('resize', onWidthChange)
})
onUnmounted(() => window.removeEventListener('resize', onWidthChange))

const onWidthChange = () => (screenWidth.value = window.innerWidth)
</script>
<template>
    <div class="login-info">
        <div>
            <div v-show="activeFeature == 0 || screenWidth > 992">
                <i class="i-solar-heart-shine-linear"></i>
                <div>
                    <h2>Lista de deseos personal</h2>
                    <p>
                        Guarda tus productos favoritos en las listas de deseos
                        personalizadas
                    </p>
                </div>
            </div>
            <div v-show="activeFeature == 1 || screenWidth > 992">
                <i class="i-solar-box-linear"></i>
                <div>
                    <h2>Gestiona tus pedidos</h2>
                    <p>
                        Ten el control de todos tus pedidos y recibe
                        notificaciones con el seguimiento
                    </p>
                </div>
            </div>
            <div v-show="activeFeature == 2 || screenWidth > 992">
                <i class="i-solar-ruler-pen-outline"></i>
                <div>
                    <h2>Productos a tu medida</h2>
                    <p>
                        Personaliza nuestra gama de productos o dinos que
                        necesitas y haremos todo lo posible para ayudarte
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.login-info {
    @apply flex justify-center lg:justify-end items-center flex-none lg:flex-1 h-64 lg:h-screen bg-light px-8 lg:px-16;
    > div {
        @apply flex flex-col max-w-md relative justify-center items-end;
        > div {
            @apply flex flex-col lg:flex-row items-center lg:mb-8;
            &:last-child {
                @apply mb-0;
            }
            i {
                @apply text-5xl mr-5 mb-3 lg:mb-0;
                &.i-solar-ruler-pen-outline {
                    @apply lg:text-6xl;
                }
            }
            > div {
                @apply flex flex-col text-center lg:text-left;
                h2 {
                    @apply text-lg font-medium mb-2;
                }
                p {
                    @apply text-base;
                }
            }
        }
    }
}
</style>
