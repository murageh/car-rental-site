import React from 'react';
import Image from "next/image";
import backgroundImg from '../../../assets/images/backgrounds/mercedes.png';
import {FaStar} from "react-icons/fa";

const Testimonials = () => {
    return (
        <section className="py-12 px-2 bg-blueBlack flex flex-col justify-center">
            <div className="wrapper flex flex-col md:flex-row justify-between gap-x-2 gap-y-4 items-center">
                <div className="w-full md:w-6/12 p-y-4 flex flex-col items-start my-6">
                    <span className="my-4 text-darkWhite">Testimonials</span>
                    <h2 className="text-left text-white my-4 w-full text-5xl font-bold capitalize">
                        Our clients reviews and testimonials
                    </h2>
                    <p className={'text-left text-lg my-4 font-medium text-white'}>
                        The majority of our clients have come back to us for more services. Here are some of the
                        testimonials from our clients
                    </p>

                    <blockquote className="review relative p-4 my-4 font-normal text-lg text-white">
                        <p className="mb-4">
                            “There are amazing people working here who are down-to-earth and willing to work with
                            anyone!
                            Their priority is to take care of their own and make sure sure satisfied!”
                        </p>
                        {/* rating */}
                        <div className="stars flex items-center justify-start gap-x-2 my-10">
                            {
                                Array(5).fill(0).map((_, i) => (
                                    <FaStar key={i} className={'star text-secondary'}/>
                                )) // 5 stars
                            } {/* end rating */} 5.0
                        </div>

                        {/*  author (pic on the left, name and position on top of the other to the right of the picture)  */}
                        <div className="my-4 flex items-center justify-start gap-x-6">
                            <div className="bg-white rounded-full p-1 h-16 w-16">
                                <Image src={'https://www.w3schools.com/howto/img_avatar.png'}
                                       alt={'avatar'} height={48} width={48}
                                       className="h-full w-full object-cover rounded-full"/>
                            </div>
                            <div className={'flex flex-col items-start justify-center'}>
                                <span className={'text-white text-3xl font-bold'}>Wade Warren</span>
                                <span className={'text-white text-xl'}>Owner co-working space</span>
                            </div>
                        </div>
                    </blockquote>
                </div>

                <div className="w-full md:w-6/12 h-full p-4">
                    <Image src={backgroundImg.src} alt={''} layout={'responsive'} height={backgroundImg.height}
                           width={backgroundImg.width} className={'max-w-full h-auto'}/>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;