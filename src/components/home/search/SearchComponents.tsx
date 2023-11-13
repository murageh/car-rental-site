
import React from 'react';
import {Make} from "@/components/home/search/models";

const MakeButton = ({make, selected, onClick}: { make: Make, selected: boolean, onClick: any }) => {
    return (
        // Image then text
        <button
            className={`flex gap-x-2 px-4 py-2 rounded-lg text-sm font-medium shadow-2xl ${selected ? 'bg-secondary text-white' : 'bg-white text-black'} ${selected ? 'scale-110' : 'scale-100' } ${selected ? 'font-bold' : 'font-medium' } ${selected ? 'shadow-lg' : 'shadow-none' } ${selected ? 'hover:scale-110' : 'hover:scale-100' } ${selected ? 'hover:font-bold' : 'hover:font-medium' } ${selected ? 'hover:shadow-lg' : 'hover:shadow-none' } ${selected ? 'hover:bg-secondary' : 'hover:bg-white' }`}
            onClick={onClick}
        >
            <div className={'bg-white rounded-full p-2'}>
                <img src={make.image} alt={make.name} height={24} width={24}/>
            </div>
            <span>{make.name}</span>
        </button>
    );
}

// bunch of buttons generated from an array of strings
export const MakeFilter = ({options, selected, onSelect}: { options: Make[], selected: string, onSelect: any }) => {
    return (
        <div className="my-4 flex justify-center items-center gap-x-2">
            {options.map(option => (
                <MakeButton
                    key={option.id}
                    make={option}
                    selected={option.name === selected}
                    onClick={() => onSelect(option.name)}
                />
            ))}
        </div>
    );
}