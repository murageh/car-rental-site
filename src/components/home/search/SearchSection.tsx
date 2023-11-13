'use client';
import React from 'react';
import {DatePickerDropdown, RedButton, SearchDropdown} from "@/components/shared/inputs/Inputs";
import {MakeFilter} from "@/components/home/search/SearchComponents";
import {makeOptions} from "@/components/home/search/models";

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

    return (
        <div className="flex items-center justify-between w-8/12 mx-auto my-6">
            <div className="bg-white rounded-lg shadow-2xl w-full">
                <div className="flex justify-between items-center px-4 py-2">
                    <SearchDropdown id={'location'} icon={'/icons/map_pin.svg'} title={'location'}
                                    options={['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika']}
                                    selected={'Nairobi'} setSelected={() => {
                    }}/>
                    <DatePickerDropdown id={'pickUpDate'} icon={'/icons/calendar_blank.svg'} title={'Pick up date'}
                                        selected={''} setSelected={() => {
                    }}/>
                    <DatePickerDropdown id={'returnDate'} icon={'/icons/calendar_check.svg'} title={'Return date'}
                                        selected={''} setSelected={() => {
                    }}/>

                    <RedButton onClick={() => {
                    }}>Search</RedButton>
                </div>
            </div>
        </div>
    );
}

const FilterSection = () => {
    const onMakeSelect = (make: string) => {
        console.log(make);
    }

    return (
        <div className="w-full p-y-4 flex flex-col items-center my-6">
            <span className="my-4">Best Services</span>
            <h2 className="my-4 mx-auto text-3xl font-bold w-6/12 text-center capitalize"
                style={{
                    textWrap: 'balance',
            }}
            >
                Explore our top deals from Top Rated Dealers
            </h2>

            <MakeFilter options={makeOptions} selected={''} onSelect={onMakeSelect}/>
        </div>
    );
}

export default SearchSection;