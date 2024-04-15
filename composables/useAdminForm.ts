export async function useAdminForm(dataKey: string) {
    const route = useRoute()

    const { columns, list } = await useListData(dataKey)

    const current = ref(null)

    const formColumns = computed(() =>
        columns.value.filter((item: any) => item.type != 'uuid'),
    )

    const emptyTemplate = computed(() =>
        formColumns.value.reduce((a: any, c: any) => {
            let value
            if (c.type === 'text') value = ''
            if (c.type === 'boolean') value = false
            if (c.type === 'enum') value = c.options[0]
            a[c.name] = value
            return a
        }, {}),
    )
    const edition = computed(() => {
        return (
            list.value.find((item: any) => item.id == route.params.id) ??
            emptyTemplate.value
        )
    })
    const editedColumns = computed(() =>
        current.value
            ? formColumns.value.filter(
                  (item: any) =>
                      current.value![item.name] != edition.value[item.name],
              )
            : [],
    )
    const isEdited = computed(() => editedColumns.value.length > 0)

    watchEffect(() => {
        if (Object.keys(edition.value).length > 0 && !current.value) {
            current.value = { ...edition.value }
        }
    })

    async function createItem() {
        const res = await useSaveItem(dataKey, null, edition.value)
        if (res) {
            const editRoute = route.path.replace('new', `${res.id}`)
            navigateTo(editRoute)
        }
    }

    async function updateItem(id: string) {
        const body = editedColumns.value.reduce((a: any, c: any) => {
            a[c.name] = edition.value[c.name]
            return a
        }, {})

        const res = await useSaveItem(dataKey, id, body)
        if (res) {
            current.value = { ...edition.value }
        }
    }

    return {
        columns,
        createItem,
        edition,
        isEdited,
        updateItem,
    }
}
