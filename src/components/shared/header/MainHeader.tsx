'use client';
import React, {useCallback} from 'react';
import Image from "next/image";
import Link from "next/link";
import {RedButton} from "@/components/shared/inputs/Inputs";
import {useStickyHeader} from "@/hooks/useStickyHeader";
import {IoClose} from "react-icons/io5";
import {FaSearch} from "react-icons/fa";
import {HiMenu} from "react-icons/hi";

const MainHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const sticky = useStickyHeader();

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [isMenuOpen]);

    const HeaderLink = ({href, children}: { href: string, children: React.ReactNode }) => {
        return (
            <Link href={href}
                  onClick={toggleMenu}
                  className={'text-gray hover:text-secondary hover:font-medium hover:scale-110 hover:border-b-2 hover:border-b-secondary text-lg mx-4'}>
                {children}
            </Link>
        );
    }

    React.useEffect(()=>{
        // attach click event listener to modal container
        const modalContainer = document.getElementById('modalContainer');
        const modalContainerClickHandler = (e: any) => {
            if (e.target === modalContainer) {
                toggleMenu();
            }
        }

        modalContainer?.addEventListener('click', modalContainerClickHandler);

        return () => {
            modalContainer?.removeEventListener('click', modalContainerClickHandler);
        }
    }, [toggleMenu]);

    return (
        <header
            className={
                'z-10 self-start w-full h-16 flex justify-between items-center px-4 md:px-8 ' +
                'transition-all ease-in-out duration-500 ' +
                `${sticky ? 'bg-blueBlack' : 'bg-transparent'} `
            }
            style={{
                boxShadow: sticky ? '0 10px 30px rgba(0, 0, 0, 0.1)' : 'none'
            }}
        >
            <nav className={'main-menu hidden w-full md:flex justify-between items-center gap-x-2'}>
                {/*  Red-colored logo (Autochek) to the left, menu items to the center and 2 action buttons on the right (search button and a login button)  */}
                <div className={'logo flex justify-start items-center'}>
                    <span className={'text-secondary text-2xl font-bold'}>Autochek</span>
                </div>
                <div className={'flex justify-center items-center gap-x-2 transition-all ease-in-out'}>
                    <HeaderLink href={'#'}>Home</HeaderLink>
                    <HeaderLink href={'#'}>About</HeaderLink>
                    <HeaderLink href={'#'}>Cars</HeaderLink>
                    <HeaderLink href={'#'}>Pricing</HeaderLink>
                    <HeaderLink href={'#'}>Contact</HeaderLink>
                </div>
                <div className={'flex justify-end items-center gap-x-2'}>
                    <button className={'bg-white text-primary px-2 py-2 rounded'}>
                        {/*  search icon  */}
                        <Image src={'/icons/search.svg'} alt={'search'} height={20} width={20}/>
                    </button>
                    <RedButton>
                        Log In
                    </RedButton>
                </div>
            </nav>

            {/*  Mobile menu  */}
            <nav className={'mobile-menu w-full relative flex md:hidden justify-between items-center'}>
                <div className={'flex justify-start items-center'}>
                    <span className={'text-secondary text-2xl font-bold'}>Autochek</span>
                </div>
                <div className={'flex justify-end items-center gap-x-2'}>
                    <button className={'bg-transparent text-white px-2 py-2 rounded'}>
                        <FaSearch size={20} className={''}/>
                    </button>
                    <button id={'menu-toggle'} onClick={toggleMenu}
                            className={'bg-transparent text-white px-2 py-2 rounded'}>
                        {
                            isMenuOpen ?
                                <IoClose size={20} className={'text-white'}/>
                                :
                                <HiMenu size={20} className={'text-white'}/>
                        }
                    </button>
                </div>
                {
                    // modal-type menu. dismisses when clicked outside
                    // has close button on the top right
                    isMenuOpen &&
                    <div id={'modalContainer'} className={'fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-blueBlack bg-opacity-80 z-20 p-6 flex flex-col justify-center items-start'}>
                        <div className={'bg-blueBlack w-10/12 mx-auto rounded-xl p-4 flex flex-col justify-center items-center'}>
                            <div className={'flex justify-end items-center w-full'}>
                                <button id={'menuClose'} onClick={toggleMenu}
                                        className={'bg-transparent text-white px-2 py-2 rounded'}>
                                    <IoClose size={20}/>
                                </button>
                            </div>
                            <div className={'flex flex-col justify-center items-center gap-y-4'}>
                                <HeaderLink href={'#'}>Home</HeaderLink>
                                <HeaderLink href={'#'}>About</HeaderLink>
                                <HeaderLink href={'#'}>Cars</HeaderLink>
                                <HeaderLink href={'#'}>Pricing</HeaderLink>
                                <HeaderLink href={'#'}>Contact</HeaderLink>
                                <RedButton>
                                    Log In
                                </RedButton>
                            </div>
                        </div>
                    </div>
                }
            </nav>
        </header>
    );
};

export default MainHeader;