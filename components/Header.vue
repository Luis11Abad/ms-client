<template>
    <header>
        <div class="content">
            <nuxt-link to="/">
                <img src="/images/logo.png" width="140" alt="" />
            </nuxt-link>
            <div class="customer-menu">
                <HeaderAccountButton />
                <button><i class="i-solar-heart-outline text-xl"></i></button>
                <button><i class="i-solar-bag-5-linear text-xl"></i></button>
            </div>
        </div>
    </header>
</template>
<style>
header {
    @apply flex flex-col w-full items-center border-b;
    .content {
        @apply w-11/12 max-w-7xl items-center py-5 gap-x-5;
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
}
</style>
