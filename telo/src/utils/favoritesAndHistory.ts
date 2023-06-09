import { getSessionUser } from "./authHandling";

const toggleFavorite = (hotelId: number) => {
    const user = getSessionUser();
    if (user) {
        if (!user.favoritesById?.includes(hotelId)) {
            user.favoritesById?.push(hotelId);
            localStorage.setItem("sessionUser", JSON.stringify(user));
            localStorage.setItem(user.email, JSON.stringify(user));
        } else {
            user.favoritesById = user.favoritesById.filter(
                (favoriteId) => favoriteId !== hotelId
            );
            localStorage.setItem("sessionUser", JSON.stringify(user));
            localStorage.setItem(user.email, JSON.stringify(user));
        }
    }
};

const getFavorites = () => {
    return getSessionUser()?.favoritesById;
};

const setHistory = (hotelId: number, roomId: number) => {
    const user = getSessionUser();
    if (user) {
        user.historyById?.push({ hotelId, roomId });
        localStorage.setItem("sessionUser", JSON.stringify(user));
        localStorage.setItem(user.email, JSON.stringify(user));
    }
};

const getHistory = () => {
    return getSessionUser()?.historyById;
};

export { toggleFavorite, getFavorites, setHistory, getHistory };
