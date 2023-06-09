type filter = {
    withGarage: boolean;
    distance: number;
    price: number;
    stars: number;
};

const setSessionFilter = (filter: filter) => {
    localStorage.setItem("sessionFilter", JSON.stringify(filter));
};

const getSessionFilter = () => {
    const existingFilter = localStorage.getItem("sessionFilter");
    if (existingFilter) {
        return JSON.parse(existingFilter) as filter;
    }
    return {
        withGarage: false,
        distance: 5,
        price: 10000,
        stars: 3,
    };
};

export { setSessionFilter, getSessionFilter };
