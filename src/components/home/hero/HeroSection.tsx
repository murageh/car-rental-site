import React from 'react';
import Image from "next/image";

// images
import heroImg from '../../../assets/images/backgrounds/honda.png';
import MainHeader from "@/components/shared/header/MainHeader";
import CircularProgressBar from "@/components/shared/progress/CircularProgressBar";
import {Zilla_Slab} from "next/font/google";
import {AppleStoreButton, GooglePlayButton} from "@/components/shared/inputs/Inputs";

// custom font for headline - closest match - Zilla Slab
const zillaSlab = Zilla_Slab({
    adjustFontFallback: false,
    display: "swap",
    style: ['normal', 'italic'],
    weight: ["300", "400", "500", "700", "600"],
    subsets: ['latin'],
});
const HeroSection = () => {
    return (
        <section
            className="clamp bg-darkWhite bg-heroBg bg-cover bg-center bg-blend-multiply"
        >
            <div className={'wrapper flex flex-col justify-between gap-y-4 items-center'}>
                <MainHeader/>

                {/*  Absolute image in the bottom left corner, with only the right half being visible  */}
                <div
                    className="z-[0] relative w-11/12 md:w-8/12 md:absolute md:bottom-0 md:left-[-10%] h-full bg-contain bg-no-repeat bg-[bottom_-10%_left_-50%] bg-blend-multiply"
                    style={{
                        backgroundImage: `url(${heroImg.src})`,
                    }}
                />

                {/*  Main hero content  */}
                <div className="z-[1] flex flex-col items-center w-full md:w-8/12 md:self-end h-auto md:h-[80%]">
                    <h1 className={`${zillaSlab.className} wrap text-center capitalize leading-[1.5] text-2xl md:text-6xl md:leading-[1.5] lg:text-7xl lg:leading-[1.5] text-white font-medium`}>
                        Fast and easy way to rent <span className='text-secondary'>a branded</span> car
                    </h1>
                    <p className="text-center text-xl my-6 font-normal text-white">
                        Discover RentalX car rental options in USA with rent car
                        <br/>
                        Select form a range of car options and local specials
                    </p>

                    {/*  Google store and Apple Store buttons  */}
                    <div className="flex justify-center items-center gap-x-2 my-4">
                        <AppleStoreButton/>
                        <GooglePlayButton/>
                    </div>

                    {/*  Car specs  */}
                    <div className="w-full md:w-auto flex scale-75 md:scale-100 justify-center items-center gap-x-4 mt-auto mb-auto ml-auto md:mr-4">
                        <CircularProgressBar headline={'222'} unit={'km/h'} metric={'Top Speed'} progress={40}
                                             offset={20}/>
                        <CircularProgressBar headline={'92'} unit={'C'} metric={'Engine temp'} progress={60}
                                             offset={-40}/>
                        <CircularProgressBar headline={'65'} unit={'HP'} metric={'Car power'} progress={40}
                                             offset={10}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;