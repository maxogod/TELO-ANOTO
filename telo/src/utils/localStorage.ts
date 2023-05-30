
interface User {
    email: string
    password: string
    phone: number
    dateBirth: Date
}

function logInUser(email: string, password: string) {
    const existingUser = localStorage.getItem(email)
    if (existingUser) {
        const user = JSON.parse(existingUser) as User
        if (user.password === password) {
            localStorage.setItem('sessionUser', JSON.stringify(user))
            return user
        }
    }
    return null
}

function registerUser(user: User) {
    const existingUser = localStorage.getItem(user.email)
    if (!existingUser) {
        localStorage.setItem(user.email, JSON.stringify(user))
        logInUser(user.email, user.password)
    }
    return null
}

export { logInUser, registerUser }