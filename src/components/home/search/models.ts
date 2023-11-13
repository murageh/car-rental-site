import exp from "constants";

export interface Make {
    id: number,
    name: string,
    image: string,
}

export const makeOptions:Make[] = [
    {
        id: 1,
        name: 'Toyota',
        image: '/images/makes/toyota.png',
    },
    {
        id: 2,
        name: 'Honda',
        image: '/images/makes/honda.png',
    },
    {
        id: 3,
        name: 'Nissan',
        image: '/images/makes/nissan.png',
    },
    {
        id: 4,
        name: 'Mercedes',
        image: '/images/makes/mercedes.png',
    },
    {
        id: 5,
        name: 'BMW',
        image: '/images/makes/bmw.png',
    },
    {
        id: 6,
        name: 'Audi',
        image: '/images/makes/audi.png',
    },
    {
        id: 7,
        name: 'Volkswagen',
        image: '/images/makes/volkswagen.png',
    },
    {
        id: 8,
        name: 'Mazda',
        image: '/images/makes/mazda.png',
    },
    {
        id: 9,
        name: 'Hyundai',
        image: '/images/makes/hyundai.png',
    },
];