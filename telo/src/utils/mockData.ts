const hotels = [
    {
        id: 1,
        name: "Super Telo",
        location: "Narnia",
        picture:
            "https://images.trvl-media.com/lodging/93000000/92550000/92541800/92541785/e51b7021.jpg",
        stars: 3,
        parkingLot: true,
        availableRooms: [
            {
                name: "King",
                price: 10000,
                id: 1,
            },
            {
                name: "Queen",
                price: 20000,
                id: 2,
            },
            {
                name: "Prince",
                price: 30000,
                id: 3,
            },
        ],
    },
    {
        id: 2,
        name: "Super Telo The Sequel",
        location: "La Matanza",
        picture:
            "https://www.kayak.com/rimg/himg/4f/28/c1/leonardo-2692048-146242699-810924.jpg",
        stars: 1,
        parkingLot: false,
        availableRooms: [
            {
                name: "Princess",
                price: 10000,
                id: 1,
            },
            {
                name: "Monarch",
                price: 20000,
                id: 2,
            },
            {
                name: "Poor Peasant",
                price: 30000,
                id: 3,
            },
        ],
    },
    {
        id: 3,
        name: "Bombonera",
        location: "Kill Me",
        picture:
            "https://media.gta-series.com/images/gta-5/missions/story/mr-philips-15.jpg",
        stars: 5,
        parkingLot: false,
        availableRooms: [
            {
                name: "Trev",
                price: 10000,
                id: 1,
            },
            {
                name: "Kill",
                price: 20000,
                id: 2,
            },
            {
                name: "Me",
                price: 30000,
                id: 3,
            },
        ],
    },
];

export { hotels };
