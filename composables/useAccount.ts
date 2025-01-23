import { ref } from 'vue'

const account = ref(null)

export function useAccount() {
    return {
        account,
    }
}
