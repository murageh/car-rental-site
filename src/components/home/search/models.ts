export interface Make {
    id: number,
    name: string,
    imageUrl: string,
}

export const makeOptions: Make[] = [
    {
        "id": 9,
        "name": "Audi",
        "imageUrl": "https://storage.googleapis.com/img.autochek.africa/marketplace/audi.png"
    },
    {
        "id": 13,
        "name": "BMW",
        "imageUrl": "https://storage.googleapis.com/img.autochek.africa/brands/bmw.svg"
    },
    {
        "id": 45,
        "name": "Honda",
        "imageUrl": "https://storage.googleapis.com/img.autochek.africa/brands/honda.svg"
    },
    {
        "id": 47,
        "name": "Hyundai",
        "imageUrl": "https://storage.googleapis.com/img.autochek.africa/brands/hyundai.svg"
    },
    {
        "id": 51,
        "name": "Jaguar",
        "imageUrl": "https://storage.googleapis.com/img.autochek.africa/marketplace/jaguar.jpg"
    },
    {
        "id": 59,
        "name": "Land Rover",
        "imageUrl": "https://storage.googleapis.com/img.autochek.africa/marketplace/land-rover.png"
    },
    {
        "id": 61,
        "name": "Lexus",
        "imageUrl": "https://storage.googleapis.com/img.autochek.africa/brands/lexus.svg"
    },
    {
        "id": 70,
        "name": "Mercedes-Benz",
        "imageUrl": "https://storage.googleapis.com/img.autochek.africa/brands/benz.svg"
    },
    {
        "id": 76,
        "name": "Nissan",
        "imageUrl": "https://storage.googleapis.com/img.autochek.africa/brands/nissan.svg"
    },
    {
        "id": 106,
        "name": "Toyota",
        "imageUrl": "https://storage.googleapis.com/img.autochek.africa/marketplace/toyota.png"
    },
    {
        "id": 110,
        "name": "Volkswagen",
        "imageUrl": "https://storage.googleapis.com/img.autochek.africa/brands/volkswagen.svg"
    },
];

// 20231113191951
export interface CarDetails {
    id: string;
    year: number;
    insured: boolean;
    mileage: number;
    vin: string;
    marketplacePrice: number;
    marketplaceVisible: boolean;
    marketplaceVisibleDate: string;
    isFeatured: boolean;
    imageUrl: string;
    model: { modelFeatures: any[]; imageUrl: string; wheelType: string; name: string; id: number; make: { imageUrl: string; name: string; id: number }; popular: boolean };
    state: string;
    country: string;
    ownerType: string;
    transmission: string;
    fuelType: string;
    sellingCondition: string;
    bodyType: { imageUrl: string; name: string; id: number };
    city: string;
    marketplaceOldPrice: number;
    createdAt: string;
    updatedAt: string;
    mileageUnit: string;
    hasWarranty: boolean;
    hasFinancing: boolean;
    interiorColor: string;
    exteriorColor: string;
    engineType: string;
    gradeScore: number;
    installment: number;
    depositReceived: boolean;
    loanValue: number;
    websiteUrl: string;
    sold: boolean;
    hasThreeDImage: boolean;
    carName: string;
    ccMeasurement?: number;
    engineDisplacement?: number;
    registrationSeries?: string;
}

// https://api-prod.autochek.africa/v1/inventory/car/aslEAUiYk
export const carDetails:CarDetails[]= [
    {
        "id": "aslEAUiYk",
        "year": 2015,
        "insured": false,
        "mileage": 70047,
        "vin": "SALWA2KE2FA617116",
        "marketplacePrice": 9100000,
        "marketplaceVisible": true,
        "marketplaceVisibleDate": "Fri Jun 02 2023 13:05:44 GMT+0000 (Coordinated Universal Time)",
        "isFeatured": true,
        "imageUrl": "https://media.autochek.africa/file/eLNTzr9J.webp",
        "model": {
            "modelFeatures": [],
            "id": 906,
            "name": "Range Rover Sport",
            "imageUrl": "",
            "wheelType": "2WD",
            "make": {
                "id": 59,
                "name": "Land Rover",
                "imageUrl": "https://storage.googleapis.com/img.autochek.africa/marketplace/land-rover.png"
            },
            "popular": false
        },
        "state": "Nairobi",
        "country": "KE",
        "ownerType": "company",
        "transmission": "automatic",
        "fuelType": "diesel",
        "sellingCondition": "foreign",
        "bodyType": {
            "id": 3,
            "name": "SUV",
            "imageUrl": "https://storage.googleapis.com/img.autochek.africa/svg/Suv.svg"
        },
        "city": "Ngong Rd",
        "marketplaceOldPrice": 9115000,
        "createdAt": "Sat Feb 04 2023 17:20:14 GMT+0000 (Coordinated Universal Time)",
        "updatedAt": "Thu Jul 27 2023 09:28:03 GMT+0000 (Coordinated Universal Time)",
        "mileageUnit": "km",
        "hasWarranty": false,
        "hasFinancing": true,
        "interiorColor": "Black",
        "exteriorColor": "White",
        "engineType": "8-cylinder(V8)",
        "gradeScore": 4,
        "installment": 372117,
        "depositReceived": false,
        "loanValue": 6668793,
        "websiteUrl": "https://autochek.africa/ke/car/range-rover sport-land-rover-ref-aslEAUiYk",
        "sold": false,
        "hasThreeDImage": false,
        "carName": "Land Rover Range Rover Sport  - 2015",
        "ccMeasurement": 3200
    },
   {
        "id": "n3XrB1hlK",
        "year": 2016,
        "insured": false,
        "mileage": 71768,
        "vin": "MROHA3FS300026488",
        "marketplacePrice": 5510000,
        "marketplaceVisible": true,
        "marketplaceVisibleDate": "Tue Oct 17 2023 14:20:59 GMT+0000 (Coordinated Universal Time)",
        "isFeatured": true,
        "imageUrl": "https://media.autochek.africa/file/qfl0G40d.webp",
        "model": {
            "modelFeatures": [],
            "id": 1898,
            "name": "Fortuner",
            "imageUrl": "",
            "wheelType": "2WD",
            "make": {
                "id": 106,
                "name": "Toyota",
                "imageUrl": "https://storage.googleapis.com/img.autochek.africa/marketplace/toyota.png"
            },
            "popular": false
        },
        "state": "Nairobi",
        "country": "KE",
        "ownerType": "company",
        "transmission": "automatic",
        "fuelType": "diesel",
        "sellingCondition": "local",
        "bodyType": {
            "id": 3,
            "name": "SUV",
            "imageUrl": "https://storage.googleapis.com/img.autochek.africa/svg/Suv.svg"
        },
        "city": "Kiambu Rd",
        "marketplaceOldPrice": 5510000,
        "createdAt": "Sun Jul 31 2022 21:10:40 GMT+0000 (Coordinated Universal Time)",
        "updatedAt": "Tue Oct 17 2023 14:21:01 GMT+0000 (Coordinated Universal Time)",
        "mileageUnit": "km",
        "hasWarranty": false,
        "hasFinancing": true,
        "interiorColor": "Dark Grey",
        "exteriorColor": "Coffee Brown",
        "engineType": "4-cylinder(I4)",
        "gradeScore": 3.4000000953674316,
        "installment": 255976,
        "depositReceived": false,
        "loanValue": 4666561,
        "websiteUrl": "https://autochek.africa/ke/car/fortuner-toyota-ref-n3XrB1hlK",
        "sold": false,
        "hasThreeDImage": false,
        "carName": "Toyota Fortuner  - 2016",
    },
    {
        "id": "3V8S-5SSs",
        "year": 2005,
        "insured": false,
        "mileage": 170000,
        "vin": "ATZ240-0020140000",
        "marketplacePrice": 865000,
        "marketplaceVisible": true,
        "marketplaceVisibleDate": "Mon Nov 13 2023 08:55:16 GMT+0000 (Coordinated Universal Time)",
        "isFeatured": false,
        "imageUrl": "https://media.autochek.africa/file/RdNTSDSL.webp",
        "model": {
            "modelFeatures": [

            ],
            "id": 3323,
            "name": "Premio ",
            "imageUrl": "",
            "wheelType": "2WD",
            "make": {
                "id": 106,
                "name": "Toyota",
                "imageUrl": "https://storage.googleapis.com/img.autochek.africa/marketplace/toyota.png"
            },
            "popular": false
        },
        "state": "Nairobi",
        "country": "KE",
        "ownerType": "company",
        "transmission": "automatic",
        "fuelType": "petrol",
        "sellingCondition": "local",
        "bodyType": {
            "id": 8,
            "name": "Sedan",
            "imageUrl": "https://storage.googleapis.com/img.autochek.africa/svg/Sedan.svg"
        },
        "city": "Nairobi",
        "marketplaceOldPrice": 865000,
        "createdAt": "Mon Nov 13 2023 07:57:58 GMT+0000 (Coordinated Universal Time)",
        "updatedAt": "Mon Nov 13 2023 08:55:17 GMT+0000 (Coordinated Universal Time)",
        "mileageUnit": "km",
        "hasWarranty": false,
        "hasFinancing": true,
        "interiorColor": "Beige",
        "exteriorColor": "Gold",
        "engineType": "4-cylinder(I4)",
        "gradeScore": 3.4000000953674316,
        "installment": 47744,
        "depositReceived": false,
        "loanValue": 826284,
        "websiteUrl": "https://autochek.africa/ke/car/premio--toyota-ref-3V8S-5SSs",
        "sold": false,
        "hasThreeDImage": false,
        "carName": "Toyota Premio   - 2005",
        "engineDisplacement": 2000,
        "registrationSeries": "KBR",
        "ccMeasurement": 2000
    },
    {
        "id": "qCiBb8htF",
        "year": 2014,
        "insured": false,
        "mileage": 147896,
        "vin": "NZE161-7091373000",
        "marketplacePrice": 1365000,
        "marketplaceVisible": true,
        "marketplaceVisibleDate": "Mon Nov 13 2023 08:55:29 GMT+0000 (Coordinated Universal Time)",
        "isFeatured": false,
        "imageUrl": "https://media.autochek.africa/file/kjmBNRjy.webp",
        "model": {
            "modelFeatures": [],
            "id": 3319,
            "name": "Fielder ",
            "imageUrl": "",
            "wheelType": "2WD",
            "make": {
                "id": 106,
                "name": "Toyota",
                "imageUrl": "https://storage.googleapis.com/img.autochek.africa/marketplace/toyota.png"
            },
            "popular": false
        },
        "state": "Nairobi",
        "country": "KE",
        "ownerType": "company",
        "transmission": "automatic",
        "fuelType": "petrol",
        "sellingCondition": "local",
        "bodyType": {
            "id": 6,
            "name": "Station Wagon",
            "imageUrl": "https://storage.googleapis.com/img.autochek.africa/svg/Station wagon.svg"
        },
        "city": "Nairobi",
        "marketplaceOldPrice": 1365000,
        "createdAt": "Mon Nov 13 2023 07:43:13 GMT+0000 (Coordinated Universal Time)",
        "updatedAt": "Mon Nov 13 2023 08:55:30 GMT+0000 (Coordinated Universal Time)",
        "mileageUnit": "km",
        "hasWarranty": false,
        "hasFinancing": true,
        "interiorColor": "Dark Grey",
        "exteriorColor": "Silver",
        "engineType": "4-cylinder(I4)",
        "gradeScore": 3.200000047683716,
        "installment": 69553,
        "depositReceived": false,
        "loanValue": 1232473,
        "websiteUrl": "https://autochek.africa/ke/car/fielder--toyota-ref-qCiBb8htF",
        "sold": false,
        "hasThreeDImage": false,
        "carName": "Toyota Fielder   - 2014",
        "engineDisplacement": 1500,
        "registrationSeries": "KD",
        "ccMeasurement": 1500
    },
]