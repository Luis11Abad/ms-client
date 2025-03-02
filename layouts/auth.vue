<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>
<template>
    <div id="auth">
        <div id="form-area">
            <h2>{{ title }}</h2>
            <slot></slot>
        </div>
        <div>
            <img class="w-full" src="/images/auth.jpg" />
        </div>
    </div>
</template>
<style>
#auth {
    @apply w-full h-full flex;
    > div {
        @apply flex flex-col w-1/2 overflow-hidden h-full;
    }
    #form-area {
        @apply flex justify-center items-center bg-light text-primary;
        h2 {
            @apply text-2xl mb-6 text-left w-full max-w-lg;
        }
        button {
            @apply bg-white flex items-center gap-x-3 text-primary justify-center my-2 w-full max-w-lg;
        }
        p {
            @apply my-6 text-primary mx-auto;
            a {
                @apply underline cursor-pointer hover:no-underline;
            }
        }
        form {
            @apply w-full flex flex-col max-w-lg;
            input {
                @apply border-b border-dark bg-transparent h-12 my-2 text-primary;
                &::placeholder {
                    @apply text-dark;
                }
            }
            button {
                @apply bg-primary  text-white h-12 mt-1 hover:bg-primary/90;
            }
            .separator {
                @apply relative;
                &::before,
                &::after {
                    @apply content-[''] w-3 h-px bg-black absolute top-1/2;
                }
                &::before {
                    @apply -left-7;
                }
                &::after {
                    @apply -right-7;
                }
            }
        }
    }
}
</style>
