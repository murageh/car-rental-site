'use client';
import Image from "next/image";
import React from "react";

export const SearchDropdown = ({id, icon, title, options, selected, setSelected}: {
    id: string,
    icon: string,
    title: string,
    options: string[],
    selected: string,
    setSelected: any
}) => {
    return (
        // Icon and dropdown
        <div className="flex justify-center items-center gap-x-2">
            <Image src={icon} alt="location" layout='fixed' height={24} width={24}
                   objectFit={'cover'}
                   className={'max-h-full max-w-full object-fill'}/>
            <div className="relative">
                <label htmlFor={id} className="sr-only">
                    {title}
                </label>
                <select
                    id={id}
                    name={id}
                    className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm rounded-md"
                    defaultValue={selected}
                    onChange={e => setSelected(e.target.value)}
                >
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export const DatePickerDropdown = ({id, icon, title, selected, setSelected}: {
    id: string,
    icon: string,
    title: string,
    selected: string,
    setSelected: any
}) => {
    return (
        // Icon and dropdown
        <div className="flex justify-center items-center gap-x-2">
            <Image src={icon} alt="location" layout='fixed' height={24} width={24}
                   objectFit={'cover'}
                   className={'max-h-full max-w-full object-fill'}/>
            <div className="relative">
                <label htmlFor={id} className="sr-only">
                    {title}
                </label>
                <input
                    id={id}
                    name={id}
                    type="date"
                    className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm rounded-md"
                    defaultValue={selected}
                    onChange={e => setSelected(e.target.value)}
                />
            </div>
        </div>
    );
}

export const RedButton = ({children, onClick}: { children: React.ReactNode, onClick?: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <button className={'bg-secondary text-white px-4 py-2 rounded ml-4'}
                onClick={onClick}
        >{children}</button>
    );
}