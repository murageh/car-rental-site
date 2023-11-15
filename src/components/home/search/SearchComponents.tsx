import React from 'react';
import {CarDetails, Make} from "@/components/home/search/models";
import Image from "next/image";
import {shortNumber} from "@/utils";
import {Chip} from "@/components/shared/layouts";
import {FaExternalLinkAlt, FaMapMarkerAlt} from "react-icons/fa";
import Link from "next/link";

const MakeButton = ({make, selected, onClick}: { make: Make, selected: boolean, onClick: () => void }) => {
    return (
        // Image then text
        <div className={'p-2'}>
            <button
                className={`make-button ${selected ? 'selected' : ''} flex justify-between items-center gap-x-2 px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:scale-110 hover:font-bold hover:bg-secondary ${selected ? 'bg-secondary text-white' : 'bg-white text-black'} ${selected ? 'scale-110' : 'scale-100'} ${selected ? 'font-bold' : 'font-medium'}`}
                onClick={onClick}
            >
                <div className={'bg-white rounded-full p-1 h-6 w-6'}>
                    <Image src={make.imageUrl} alt={make.name} height={24} width={24}
                           className="h-full w-full object-cover"/>
                </div>
                <span className={'text-center'}>{make.name}</span>
            </button>
        </div>
    );
}

// bunch of buttons generated from an array of strings
export const MakeFilter = ({loading, options, selected, onSelect}: { loading: boolean, options: Make[], selected?: Make, onSelect: (option: Make) => void }) => {
    return (
        <div className="make-filter my-4 flex flex-wrap gap-y justify-center items-center gap-x-2 max-w-full">
            {options.slice(0, 6).map(option => (
                <MakeButton
                    key={option.id}
                    make={option}
                    selected={option.name === selected?.name}
                    onClick={() => onSelect(option)}
                />
            ))}
            {
                options.length > 5 && (
                    <button
                        className={'px-4 py-2 rounded-lg text-sm font-medium shadow-2xl bg-white text-black hover:bg-white hover:shadow-none hover:scale-100'}>
                        <span className={'font-bold'}>Explore {options.length} more+</span>
                    </button>
                )
            }
            {
                loading && (
                    <div className={'animate-pulse'}>
                        <div className={'bg-gray-300 rounded-lg p-2 h-12 w-12'}/>
                    </div>
                )
            }
            {
                // no options. show a message
                options.length === 0 && (
                    <span className={'text-gray-500 text-sm font-medium'}>No makes found</span>
                )
            }
        </div>
    );
};

export const CarTile = ({car}: { car: CarDetails }) => {
    return (
        <div className="car-tile w-full h-full p-2 md:w-4/12 lg:w-3/12">
            <div className="h-full bg-white rounded-xl shadow-xl w-full flex flex-col px-4 py-8 gap-y-2">
                <div className="w-full mb-4 h-[200px] bg-gray-300 rounded-lg">
                    <Image src={car.imageUrl} alt={'audi'} height={200} width={500}
                           className={'car-img h-full w-full object-cover rounded-lg'}/>
                </div>

                {/*  name  */}
                <span className={'text-lg font-medium'}>{car.carName}</span>

                {/*  Color, Body type, Engine type:Type,   */}
                <div className={'flex justify-start gap-x-2 gap-y-2 items-center flex-wrap'}>
                    <span
                        className={'text-base font-normal'}>{car.exteriorColor} {car.bodyType?.name} &bull; {car.engineType}</span>
                </div>

                {/*  price, town  */}
                <div className={'flex justify-start gap-x-2 gap-y-2 items-center flex-wrap'}>
                    <Chip title={'Location'} className={'px-2 py-1 rounded-full'} size={'md'}
                          color={'primary'}>
                        <FaMapMarkerAlt className={'mr-1'}/>{' '}
                        {car.state}
                    </Chip>
                    <Chip title={'Price'} className={'px-2 py-1 rounded-full'} size={'md'}
                          color={'success'}>Kes. {shortNumber(car.marketplacePrice)}</Chip>
                    <Chip title={'Mileage'} className={'px-2 py-1 rounded-full'} size={'md'}
                          color={'secondary'}>Mileage: {shortNumber(car.mileage)} {car.mileageUnit}</Chip>
                </div>

                {/*  Transmission, Fuel type, Drive type  */}
                <div className={'flex justify-start gap-x-2 gap-y-2 items-center flex-wrap'}>
                    <Chip title={'Fuel type'} className={'px-2 py-1 rounded-full'} size={'md'}
                          color={'primary'}>{car.fuelType} {car.ccMeasurement ? ' - ' + car.ccMeasurement + 'cc' : ''}</Chip>
                    <Chip title={'Transmission'} className={'px-2 py-1 rounded-full'} size={'md'}
                          color={'success'}>{car.transmission}</Chip>
                    <Chip title={'Drive type'} className={'px-2 py-1 rounded-full'} size={'md'}
                          color={'secondary'}>{car.model.wheelType}</Chip>
                </div>

                {/*  View more info on the website  */}
                <div className={'flex justify-start gap-x-2 gap-y-2 items-center flex-wrap'}>
                    <Link href={car.websiteUrl} target={'_blank'}
                          className={'px-4 py-2 rounded-lg text-sm font-medium shadow-2xl bg-info text-white border border-transparent hover:bg-white hover:text-info hover:shadow-none hover:border-info'}>
                        <span className={'font-bold'}>
                            Visit car website{' '}&nbsp;
                            <FaExternalLinkAlt className={'inline-block'}/>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export const CarTileList = ({cars}: { cars: CarDetails[] }) => {
    return (
        <div className="car-tile-list w-full flex justify-center items-center flex-wrap gap-x-4 gap-y-4">
            {cars.map(car => (
                <CarTile key={car.id} car={car}/>
            ))}
        </div>
    );
}