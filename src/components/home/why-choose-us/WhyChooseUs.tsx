import React from 'react';
import Image from "next/image";
import {FaDollarSign, FaRegClock, FaRocketchat, FaUserAlt} from "react-icons/fa";
import backgroundImg from '../../../assets/images/backgrounds/rolls-royce.png';

const WhyChooseUs = () => {
    return (
        <section className="py-12 bg-white">
            <div className="wrapper flex flex-col justify-center items-center">
                <div className="w-full p-y-4 flex flex-col items-center my-6">
                    <span className="my-4">Why choose us</span>
                    <h2 className="my-4 mx-auto text-3xl font-bold w-6/12 text-center capitalize balance">
                        We offer best experience with out rentals
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center w-full">
                    <div className="w-full md:w-8/12 h-full p-4">
                        <Image src={backgroundImg.src} alt={''} layout={'responsive'} height={backgroundImg.height}
                               width={backgroundImg.width} className={'max-w-full h-auto'}/>
                    </div>
                    <div className="w-full md:w-4/12 p-4 flex flex-col items-center justify-start">
                        {
                            [
                                {
                                    icon: <FaUserAlt className={'text-3xl text-white'}/>,
                                    title: 'Experienced Driver',
                                    text: "Don't have a driver? Don't worry! We have many experienced drivers for you."
                                },
                                {
                                    icon: <FaDollarSign className={'text-3xl text-white'}/>,
                                    title: 'Best price guaranteed',
                                    text: "Find a lower price? We will refund you 100% of the difference."
                                },
                                {
                                    icon: <FaRegClock className={'text-3xl text-white'}/>,
                                    title: '24-hour car delivery',
                                    text: 'Book your car anytime and we will deliver it directly to you.'
                                },
                                {
                                    icon: <FaRocketchat className={'text-3xl text-white'}/>,
                                    title: '24/7 Technical support',
                                    text: "Have a question? Contact our support anytime you need."
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center justify-between gap-x-2 my-4">
                                    <div className="flex justify-center items-center bg-secondary rounded-full p-3">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col items-start justify-center gap-y-2">
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <p className="text-gray-500">{item.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;