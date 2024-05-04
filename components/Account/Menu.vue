<script setup lang="ts">
import { Icon } from '@iconify/vue'

const authStore = useAuthStore()
</script>
<template>
    <div class="flex flex-col">
        <div id="sidemenu">
            <ul>
                <li>
                    <nuxt-link to="/account"
                        ><Icon
                            icon="solar:users-group-rounded-outline"
                        /><span>{{ $t('user-data') }}</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/account/events"
                        ><Icon icon="solar:confetti-bold" />
                        <span>{{ $t('my-events') }}</span>
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <button class="logout-btn" @click="authStore.logout()">
            <Icon icon="solar:logout-outline" />{{ $t('logout') }}
        </button>
    </div>
</template>
<style>
#sidemenu {
    @apply flex left-0 right-0 fixed bottom-0 md:static bg-white border rounded p-4;
    li {
        @apply mb-2;
        &:last-child {
            @apply mb-0;
        }
        a {
            @apply h-10 flex items-center gap-x-2.5 px-4 w-52 rounded text-sm hover:bg-primary/10;
            &.router-link-exact-active {
                @apply bg-primary/50;
            }
            span {
                @apply hidden md:inline-block;
            }
            svg {
                @apply text-lg;
            }
        }
    }
}
.logout-btn {
    @apply hidden md:flex h-10 mt-2 items-center gap-x-2.5 text-sm px-8;
    svg {
        @apply text-lg;
    }
}
</style>
