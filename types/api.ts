interface Response {
    data: any
    count?: number
}

interface Entity {
    id: string
}

interface User extends Entity {
    email: string
    name: string
    lastname: string
    hasAdminAccess: boolean
}

interface Auth extends User {
    token: string
}
