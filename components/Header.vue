<script setup lang="ts">
const appStore = useAppStore()
</script>
<template>
    <header>
        <div class="content">
            <nuxt-link to="/">
                <img src="/images/logo.png" width="140" alt="" />
            </nuxt-link>
            <div id="main-search">
                <i class="i-solar-magnifer-linear text-lg translate-x-px"></i>
                <input type="text" placeholder="¿Qué es lo que buscas?" />
            </div>
            <div class="customer-menu">
                <HeaderUserMenu />
                <button><i class="i-solar-heart-outline text-xl"></i></button>
                <button><i class="i-solar-bag-5-linear text-xl"></i></button>
            </div>
        </div>
        <div class="bottom-bar">
            <div class="content">
                <button @click="appStore.showModal('navbar')">
                    <i class="i-solar-hamburger-menu-linear text-2xl -ml-1"></i>
                    <span>Categorías</span>
                </button>
            </div>
        </div>
        <HeaderNav />
    </header>
</template>
<style>
header {
    @apply bg-light flex flex-col w-full items-center;
    .content {
        @apply w-11/12 max-w-7xl items-center py-5 gap-x-5;
        #main-search {
            @apply hidden md:flex h-11 bg-white flex-1 px-10 relative text-dark;
            i {
                @apply absolute top-3.5 left-3 -translate-y-px scale-95;
            }
            input {
                @apply w-full ring-0 outline-none text-base;
            }
        }
        .customer-menu {
            @apply ml-auto flex-none gap-x-3;
            button {
                @apply flex items-center h-9 px-2 text-dark hover:bg-black hover:!bg-opacity-5;
                span {
                    @apply hidden md:inline-block text-base ml-2;
                }
            }
        }
    }
    .bottom-bar {
        @apply hidden md:flex justify-center w-full bg-white h-10 shadow-sm;
        .content {
            button {
                @apply h-10 flex items-center gap-x-2 px-4 border-x text-base hover:bg-accent hover:text-white;
            }
        }
    }
}
</style>
