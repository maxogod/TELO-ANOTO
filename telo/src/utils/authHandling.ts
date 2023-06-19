import { log } from "console";
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
    currentReservationsById?: hotelAndRoom[];
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
        user.currentReservationsById = [];
        localStorage.setItem(user.email, JSON.stringify(user));
        return user;
    }
    return null;
}

function updateUser(userInfo: {phone: string, dateBirth: string, password: string}) {

    const existingUser = localStorage.getItem("sessionUser");
    if (existingUser) {
      const currentUser = JSON.parse(existingUser as string) as User
      const key = currentUser.email
      currentUser.password = userInfo.password ? hashPassword(userInfo.password) : currentUser.password;
      currentUser.phone = userInfo.phone ? parseInt(userInfo.phone) : currentUser.phone;
      currentUser.dateBirth = userInfo.dateBirth ? new Date(userInfo.dateBirth) : currentUser.dateBirth;  
      localStorage.setItem(key, JSON.stringify(currentUser));
      localStorage.setItem("sessionUser", JSON.stringify(currentUser));
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

export { logInUser, registerUser, getSessionUser, updateUser }
export type { hotelAndRoom, User };
