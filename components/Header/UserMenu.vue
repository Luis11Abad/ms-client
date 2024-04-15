<script setup lang="ts">
const route = useRoute()
const supabase = useSupabaseClient()

const appStore = useAppStore()
const userStore = useUserStore()

const { user } = storeToRefs(userStore)

const name = computed(() => (user.value ? user.value.name.split(' ')[0] : ''))

const { accountSections } = storeToRefs(appStore)

watch(
    () => route.path,
    () => {
        appStore.hideModal('user-menu')
    },
)

function handleClick() {
    if (user.value) appStore.showModal('user-menu')
    else navigateTo('/login')
}
async function logout() {
    appStore.hideModal('user-menu')
    await supabase.auth.signOut()
    userStore.clearUser()
    navigateTo('/login')
}
</script>
<template>
    <button @click="handleClick">
        <i
            class="i-solar-user-outline text-lg scale-105 md:text-base md:scale-100"
        ></i>
        <span v-if="user">Hola, {{ name }}</span>
        <span v-else>Acceder</span>
    </button>
    <UIModal id="user-menu" position="right">
        <div class="header">
            <UICloseModalButton id="user-menu" />
            <div>
                <h2>Hola, {{ name }}</h2>
                <button @click="logout">Cerrar sesión</button>
            </div>
        </div>
        <ul>
            <li v-for="section in accountSections" :key="section.key">
                <nuxt-link :to="`/account?section=${section.key}`">{{
                    section.label
                }}</nuxt-link>
            </li>
        </ul>
    </UIModal>
</template>
<style>
#user-menu {
    .content {
        @apply flex flex-col;
    }
    .header {
        @apply flex flex-col p-12 bg-white;
        div {
            @apply flex gap-x-12 items-center pb-12 border-b;
            h2 {
                @apply text-2xl font-medium w-48;
            }
            button {
                @apply bg-white flex-none text-base scale-105 px-3 h-8 hover:bg-light;
                svg {
                    @apply w-6 h-6;
                }
            }
        }
    }
    ul {
        @apply px-12 pb-12;
        li {
            @apply text-base h-11;
            a {
                @apply hover:underline;
            }
        }
    }
}
</style>
