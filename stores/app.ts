export const useAppStore = defineStore('app', () => {
    const modals = ref<string[]>([])

    function showModal(id: string) {
        modals.value = [...modals.value, id]
    }

    function hideModal(id: string) {
        modals.value = modals.value.filter((item) => item != id)
    }

    return { modals, showModal, hideModal }
})
