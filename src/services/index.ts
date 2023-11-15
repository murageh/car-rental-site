import api from "@/services/init";

interface MakeResponse {
    data: any,
    pagination: any,
    error: any,
}

export const fetchMakes = async () => {
    let res:MakeResponse = {
        data: null,
        pagination: null,
        error: null,
    };
    // https://api.staging.myautochek.com/v1/inventory/make?popular=true
    await api().get('inventory/make?popular=true')
        .then((response) => {
            res = {
                data: response.data.makeList,
                pagination: response.data.pagination,
                error: null,
            };
        })
        .catch((error) => {
            console.log(error);
            res = {
                data: [],
                pagination: null,
                error: error,
            }
        });

    return res;
}

export const fetchCars = async (params: any) => {
    let res:MakeResponse = {
        data: null,
        pagination: null,
        error: null,
    };
    // https://api-prod.autochek.africa/v1/inventory/car/search
    await api().get('inventory/car/search', {params})
        .then((response) => {
            res = {
                data: response.data.cars,
                pagination: undefined,
                error: null,
            };
        })
        .catch((error) => {
            console.log(error);
            res = {
                data: [],
                pagination: null,
                error: error,
            }
        });

    return res;
}

export const fetchCarDetails = async (id: number) => {
    //  https://api.staging.myautochek.com/v1/inventory/car/{carId}
    await api().get(`inventory/car/${id}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return {
                data: [],
                error: error,
            }
        });
}

export const fetchCarMedia = async (id: number) => {
    //  https://api.staging.myautochek.com/v1/inventory/car_media?carId={carId}
    await api().get(`inventory/car_media?carId=${id}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return {
                data: [],
                error: error,
            }
        });
}