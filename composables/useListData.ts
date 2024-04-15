export async function useListData(dataKey: string) {
    const page = ref(0)
    const route = useRoute()
    const search = computed(() => route.query.qs ?? '')

    const { data, pending } = await useFetch<Response>(`/api/${dataKey}`, {
        watch: [page, search],
        params: {
            search,
        },
    })
    const list = computed(() => data.value?.data.list ?? [])
    const columns = computed(() => data.value?.data.columns ?? [])
    const count = computed(() => data.value?.count ?? 0)

    function setPage(value: number) {
        page.value = value
    }

    return {
        columns,
        count,
        list,
        page,
        pending,
        setPage,
    }
}
