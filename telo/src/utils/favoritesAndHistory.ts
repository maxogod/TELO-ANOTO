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

const setHistory = (hotelId: number, roomId: number, roomTime: Date) => {
    const user = getSessionUser();
    if (user) {
        user.historyById?.push({ hotelId, roomId, roomTime });
        localStorage.setItem("sessionUser", JSON.stringify(user));
        localStorage.setItem(user.email, JSON.stringify(user));
    }
};

const getHistory = () => {
    return getSessionUser()?.historyById;
};

const addCurrentReservation = (
    hotelId: number,
    roomId: number,
    roomTime: Date
) => {
    const user = getSessionUser();
    if (user) {
        user.currentReservationsById?.push({ hotelId, roomId, roomTime });
        localStorage.setItem("sessionUser", JSON.stringify(user));
        localStorage.setItem(user.email, JSON.stringify(user));
    }
};

const expireCurrentReservation = (
    hotelId: number,
    roomId: number,
    roomTime: Date
) => {
    const user = getSessionUser();
    if (user) {
        user.currentReservationsById = user.currentReservationsById?.filter(
            (obj) => obj.hotelId !== hotelId && obj.roomId !== roomId
        );
        localStorage.setItem("sessionUser", JSON.stringify(user));
        localStorage.setItem(user.email, JSON.stringify(user));
        setHistory(hotelId, roomId, roomTime);
    }
};

const removeCurrentReservation = (
    hotelId: number,
    roomId: number,
) => {
    const user = getSessionUser();
    if (user) {
        user.currentReservationsById = user.currentReservationsById?.filter(
            (obj) => obj.hotelId !== hotelId && obj.roomId !== roomId
        );
        localStorage.setItem("sessionUser", JSON.stringify(user));
        localStorage.setItem(user.email, JSON.stringify(user));
    }
};

const getCurrentReservations = () => {
    return getSessionUser()?.currentReservationsById;
};

export {
    toggleFavorite,
    getFavorites,
    setHistory,
    getHistory,
    addCurrentReservation,
    expireCurrentReservation,
    removeCurrentReservation,
    getCurrentReservations,
};
