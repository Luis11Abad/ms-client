<template>
    <div class="skeleton">
        <div class="w-full h-56 bg-gray-100"></div>
        <div class="flex items-center px-3 w-full h-12">
            <div class="w-32 h-3 rounded-lg bg-gray-100"></div>
            <div class="h-6 w-6 bg-gray-100 ml-auto mr-3 rounded-md"></div>
            <div class="h-6 w-6 bg-gray-100 rounded-md"></div>
        </div>
    </div>
</template>
<style>
.skeleton {
    @apply flex flex-col animate-pulse rounded-md border border-gray-200;
}
</style>
