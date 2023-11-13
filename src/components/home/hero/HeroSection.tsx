import React from 'react';
import Image from "next/image";

// images
import heroImg from '../../../assets/images/backgrounds/kindpng_5805133.png';
import MainHeader from "@/components/shared/header/MainHeader";
import CircularProgressBar from "@/components/shared/progress/CircularProgressBar";
import {Zilla_Slab} from "next/font/google";

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
            className="relative h-[min(100vh,_900px)] w-full bg-heroBg bg-cover bg-center bg-blend-multiply"
        >
            <div className={'wrapper flex flex-col justify-between items-center'}>
                {/*  Absolute image in the bottom left corner, with only the right half being visible  */}
                <div
                    className="z-[0] absolute bottom-0 left-[-10%] h-full w-8/12 bg-contain bg-no-repeat bg-[bottom_-10%_left_-50%] bg-blend-multiply"
                    style={{
                        backgroundImage: `url(${heroImg.src})`,
                    }}
                />
                <MainHeader/>

                {/*  Main hero content  */}
                <div className="z-[1] flex flex-col items-center w-full md:w-8/12 md:self-end h-full md:h-[80%]">
                    <h1 className={`${zillaSlab.className} wrap text-center capitalize leading-[1.5] text-2xl md:text-5xl md:leading-[1.5] lg:text-5xl lg:leading-[1.5] text-white font-medium`}>
                        Fast and easy way to rent <span className='text-secondary'>a branded</span> car
                    </h1>
                    <p className="text-center text-lg my-6 font-normal text-white">
                        Discover RentalX car rental options in USA with rent car
                        <br/>
                        Select form a range of car options and local specials
                    </p>

                    {/*  Google store and Apple Store buttons  */}
                    <div className="flex justify-center items-center gap-x-2 my-4">
                        <button className="bg-white text-primary px-2 py-2 rounded w-[120px]">
                            <Image src="/icons/app-store.png" alt="app store" layout='fixed' height={310} width={924}
                                   objectFit={'cover'} className={'max-h-full max-w-full object-fill'}/>{' '}
                        </button>
                        <button className="bg-white text-primary px-2 py-2 rounded w-[120px]">
                            <Image src="/icons/google-play.png" alt="google play" layout='fixed' height={546}
                                   width={168}
                                   objectFit={'cover'} className={'max-h-full max-w-full object-fill'}/>
                        </button>
                    </div>

                    {/*  Car specs  */}
                    <div className="flex justify-center items-center gap-x-4 mt-auto mb-auto ml-auto">
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