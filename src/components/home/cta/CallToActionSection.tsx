import React from 'react';
import {AppleStoreButton, GooglePlayButton} from "@/components/shared/inputs/Inputs";
import Image from "next/image";

const CallToActionSection = () => {
    return (
        <section className="py-12 bg-white flex flex-col justify-center">
            <div className="wrapper w-full flex flex-col justify-center items-center">
                <div
                    className={'relative w-11/12 bg-blueBlack rounded-lg py-8 px-16 flex flex-col md:flex-row'}>
                    <div className={'w-full self-start md:self-center md:w-7/12 h-full p-4'}>
                        <h2 className="text-left text-white my-4 w-full text-5xl font-bold max-w-full">
                            Download the free RentalX app
                        </h2>
                        <p className={'text-left text-lg my-4 font-medium text-white max-w-full'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aenean commodo ligula eget dolor. Aenean massa.
                        </p>

                        {/*  App Store and Play Store buttons */}
                        <div className="flex justify-start items-center gap-x-2 my-4">
                            <AppleStoreButton/>
                            <GooglePlayButton/>
                        </div>
                    </div>
                    {/*  Mobile app image, occupying right half in large screens, otherwise centered on the next column. Is absolute, and pops out of its parent booth top and below  */}
                        <Image src={'/images/mobile-app.png'} alt={''} height={831} width={471}
                               className={'w-auto max-w-full rounded-lg relative md:absolute md:max-w-5/12 h-auto max-h-[800px] p-4 mx-auto md:m-auto md:top-1/2 md:left-1/2 md:bottom-0 md:right-0 md:transform'}/>

                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;