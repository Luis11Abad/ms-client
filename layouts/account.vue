<template>
    <div id="account">
        <Header />
        <div class="content">
            <AccountMenu />
            <slot></slot>
        </div>
    </div>
</template>
<style>
#account {
    @apply flex flex-col w-screen h-screen items-center bg-light;
    > .content {
        @apply flex items-start md:gap-x-4 flex-1 w-full max-w-6xl py-4 px-4;
    }
}
</style>
