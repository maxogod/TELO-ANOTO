import { hashPassword, comparePassword } from "./hasher";

type hotelAndRoom = {
    hotelId: number;
    roomId: number;
};

interface User {
    email: string;
    password: string;
    phone: number;
    dateBirth: Date;
    favoritesById?: number[];
    historyById?: hotelAndRoom[];
}

function logInUser(email: string, password: string) {
    const existingUser = localStorage.getItem(email);
    if (existingUser) {
        const user = JSON.parse(existingUser) as User;
        if (comparePassword(password, user.password)) {
            localStorage.setItem("sessionUser", JSON.stringify(user));
            return user;
        }
    }
    return null;
}

function registerUser(user: User) {
    const existingUser = localStorage.getItem(user.email);
    if (!existingUser) {
        user.password = hashPassword(user.password);
        user.favoritesById = [];
        user.historyById = [];
        localStorage.setItem(user.email, JSON.stringify(user));
        return user;
    }
    return null;
}

function getSessionUser() {
    const existingUser = localStorage.getItem("sessionUser");
    if (existingUser) {
        return JSON.parse(existingUser) as User;
    }
    return null;
}

export { logInUser, registerUser, getSessionUser };
