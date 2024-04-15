<template>
    <div id="admin">
        <AdminSideMenu />
        <div class="flex flex-col flex-1">
            <AdminHeader />
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>
<style>
#admin {
    @apply flex h-screen w-screen bg-white;
    main {
        @apply flex-1 bg-gray-50;
    }
}
input {
    @apply !outline-none bg-transparent;
}
</style>
