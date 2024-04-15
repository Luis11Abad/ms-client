export const useAdminStore = defineStore('admin', () => {
    const alerts = ref<string[]>([])

    function showAlert(id: string) {
        alerts.value = [...alerts.value, id]
    }

    function hideAlert(id: string) {
        alerts.value = alerts.value.filter((item) => item != id)
    }

    return { alerts, showAlert, hideAlert }
})
