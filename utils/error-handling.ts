export function handleFetchErrors(e: any) {
    let error = 'Unknown error. Please, try again.'
    if (e.data && e.data.message) {
        error =
            typeof e.data.message == 'string'
                ? e.data.message
                : e.data.message[0]
    }
    return error
}
