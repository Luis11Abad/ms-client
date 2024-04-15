export async function useSaveItem(
    dataKey: string,
    id: string | null,
    body: object,
) {
    try {
        const url = id ? `/api/${dataKey}/${id}` : `/api/${dataKey}`
        const res = await $fetch<Entity>(url, {
            method: id ? 'PATCH' : 'POST',
            body: body,
        })
        return res
    } catch (e) {
        return null
    }
}
