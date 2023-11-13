import React from 'react';
import Image from "next/image";
import Link from "next/link";

const MainHeader = () => {
    const HeaderLink = ({href, children}: { href: string, children: React.ReactNode }) => {
        return (
            <Link href={href} className={'text-gray hover:text-secondary hover:font-medium hover:scale-110 hover:border-b-2 hover:border-b-secondary text-lg mx-4'}>
                {children}
            </Link>
        );
    }

    return (
        <div className={'z-10 self-start w-full bg-transparent h-16 flex justify-between items-center px-4 md:px-8'}>
            {/*  Red-colored logo (Autochek) to the left, menu items to the center and 2 action buttons on the right (search button and a login button)  */}
            <div className={'flex justify-start items-center'}>
                <span className={'text-secondary text-2xl font-bold'}>Autochek</span>
            </div>
            <div className={'flex justify-center items-center gap-x-2 transition-all ease-in-out'}>
                <HeaderLink href={'#'}>Home</HeaderLink>
                <HeaderLink href={'#'}>About</HeaderLink>
                <HeaderLink href={'#'}>Cars</HeaderLink>
                <HeaderLink href={'#'}>Pricing</HeaderLink>
                <HeaderLink href={'#'}>Contact</HeaderLink>
            </div>
            <div className={'flex justify-end items-center'}>
                <button className={'bg-white text-primary px-2 py-2 rounded'}>
                {/*  search icon  */}
                    <Image src={'/icons/search.svg'} alt={'search'} height={20} width={20}/>
                </button>
                <button className={'bg-secondary text-white px-4 py-2 rounded ml-4'}>Log In</button>
            </div>
        </div>
    );
};

export default MainHeader;