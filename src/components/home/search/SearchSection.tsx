'use client';
import React from 'react';
import {DatePickerDropdown, RedButton, SearchDropdown} from "@/components/shared/inputs/Inputs";
import {CarTileList, MakeFilter} from "@/components/home/search/SearchComponents";
import {carDetails, Make} from "@/components/home/search/models";
import {fetchMakes} from "@/services";

const SearchSection = () => {
    return (
        <section className="py-12 bg-darkWhite">
            <div className="wrapper flex flex-col justify-center items-center">
                <SearchDiv/>
                <FilterSection/>
            </div>
        </section>
    );
};

const SearchDiv = () => {
    const [location, setLocation] = React.useState<string>('');
    const [pickUpDate, setPickUpDate] = React.useState<string>('');
    const [returnDate, setReturnDate] = React.useState<string>('');

    const handleLocationChange = (newLocation: string) => {
        setLocation(newLocation);
    }

    const handlePickUpDateChange = (newDate: string) => {
        setPickUpDate(newDate);
    }

    const handleReturnDateChange = (newDate: string) => {
        setReturnDate(newDate);
    }

    const handleSearch = () => {
        // TODO: handle search
        // Current endpoint returns an empty response, and has not provided query params to search by
        // Assuming the endpoint is working, the query params would be:
        // location, pickUpDate, returnDate
        // Below is sample code to handle the search with the above query params
        // fetchCars(location, pickUpDate, returnDate).then(res => {
        //     console.log(res);
        // });
    }

    return (
        <div className="flex items-center justify-between w-8/12 mx-auto my-6">
            <div className="bg-white rounded-lg shadow-2xl w-full">
                <div className="flex justify-between items-center px-4 py-2">
                    <SearchDropdown id={'location'} icon={'/icons/map_pin.svg'} title={'location'}
                                    options={['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika']}
                                    selected={'Nairobi'} setSelected={handleLocationChange}/>
                    <DatePickerDropdown id={'pickUpDate'} icon={'/icons/calendar_blank.svg'} title={'Pick up date'}
                                        selected={''} setSelected={handlePickUpDateChange}/>
                    <DatePickerDropdown id={'returnDate'} icon={'/icons/calendar_check.svg'} title={'Return date'}
                                        selected={''} setSelected={handleReturnDateChange}/>

                    <RedButton onClick={handleSearch}>Search</RedButton>
                </div>
            </div>
        </div>
    );
}

const FilterSection = () => {
    const [makes, setMakes] = React.useState<Make[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [{total, currentPage, pageSize}, setPagination] = React.useState({
        total: 0,
        currentPage: 1,
        pageSize: 20,
    });
    const pagination = React.useMemo(
        () => ({
            total,
            currentPage,
            pageSize,
        }),
        [total, currentPage, pageSize]
    );
    const [selectedMake, setSelectedMake] = React.useState<Make>();

    const onMakeSelect = (make: Make) => {
        setSelectedMake(make);
        console.log(make);
    }

    React.useEffect(() => {
        setLoading(true);
        fetchMakes().then(res => {
            setLoading(false);
            setMakes(res?.data ?? []);
            setPagination(res?.pagination ? res?.pagination : pagination);
        });
    }, [pagination]);

    return (
        <div className="w-full p-y-4 flex flex-col items-center my-6">
            <span className="my-4">Best Services</span>
            <h2 className="my-4 mx-auto text-3xl font-bold w-6/12 text-center capitalize"
                style={{
                    // @ts-ignore
                    textWrap: 'balance',
                }}
            >
                Explore our top deals from Top Rated Dealers
            </h2>

            <MakeFilter loading={loading} options={makes} selected={selectedMake} onSelect={onMakeSelect}/>
            {/* TODO: Engage endpoint to fetch cars */}
            {/* Endpoint does not have query params to search by, so we use sample data */}
            <CarTileList cars={carDetails}/>
        </div>
    );
}

export default SearchSection;