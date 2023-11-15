import React from 'react';
import {FaBasketballBall, FaFacebookF, FaInstagram, FaRegEnvelope, FaTwitter} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <section className="py-12 px-4 bg-blueBlack ignoreMinHeight">
            <div className="wrapper flex justify-between items-center h-auto min-h-auto">
                <div className={'w-full flex flex-col justify-center items-start'}>
                    <div className={'w-full flex flex-col gap-y-4 md:flex-row justify-between gap-x-4'}>
                        <div className={'flex flex-col mb-6 md:mb-0 justify-center items-start'}>
                            <h2 className="text-left text-white my-4 w-full text-3xl font-bold capitalize">
                                Car Rental
                            </h2>
                            <p className={'text-left text-lg my-4 font-normal text-white'}>
                                Anytime, anywhere, we provide the best services!
                            </p>
                            <div className={'flex justify-between items-center gap-x-4'}>
                                <FaRegEnvelope className={'text-secondary text-2xl'}/>
                                <span className={'text-white text-xl'}>sampleemail@domain.com</span>
                            </div>
                        </div>
                        <FooterSection title={'Services'}>
                            <Services/>
                        </FooterSection>
                        <FooterSection title={'Resources'}>
                            <Resources/>
                        </FooterSection>
                        <FooterSection title={'Support'}>
                            <Support/>
                        </FooterSection>
                        <FooterSection title={'Connect with us'}>
                            <ConnectWithUs/>
                        </FooterSection>
                    </div>

                    {/*  Horizontal Line  */}
                    <div className={'w-full border-b border-white my-10'}/>

                    {/*  Copyright with dynamic year (2023 - whatever year it is)  */}
                    <div className={'w-full flex justify-center items-center gap-x-4'}>
                        <span className={'text-white text-lg font-normal'}>
                            © 2023
                            {new Date().getFullYear() > 2023 ? ` - ${new Date().getFullYear()}` : ''}
                            &nbsp;Car Rental.
                        </span>
                        <span className={'text-white text-lg font-normal'}>All rights reserved</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterTextLink = ({title, url}: { title: string, url: string }) => {
    return (
        <Link href={url} className={'text-white text-lg font-normal hover:text-secondary'}>
            {title}
        </Link>
    );
}
const Services = () => {
    return (
        <div className={'flex flex-col justify-center items-start gap-y-4'}>
            <FooterTextLink title={'Home'} url={'/'}/>
            <FooterTextLink title={'Download'} url={'#'}/>
            <FooterTextLink title={'Pricing'} url={'#'}/>
            <FooterTextLink title={'About'} url={'#'}/>
        </div>
    );
}

const Resources = () => {
    return (
        <div className={'flex flex-col justify-center items-start gap-y-4'}>
            <FooterTextLink title={'Home'} url={'/'}/>
            <FooterTextLink title={'Download'} url={'#'}/>
            <FooterTextLink title={'Pricing'} url={'#'}/>
            <FooterTextLink title={'About'} url={'#'}/>
        </div>
    );
}

const Support = () => {
    return (
        <div className={'flex flex-col justify-center items-start gap-y-4'}>
            <FooterTextLink title={'FAQ'} url={'/'}/>
            <FooterTextLink title={'How it works'} url={'#'}/>
            <FooterTextLink title={'Features'} url={'#'}/>
        </div>
    );
}

const ConnectWithUs = () => {
    const links = [
        {
            icon: <FaFacebookF className={'text-white text-2xl'}/>,
            url: '#',
            title: 'Facebook', // for accessibility
        },
        {
            icon: <FaTwitter className={'text-white text-2xl'}/>,
            url: '#',
            title: 'Facebook',
        },
        {
            icon: <FaInstagram className={'text-white text-2xl'}/>,
            url: '#',
            title: 'Facebook',
        },
        {
            icon: <FaBasketballBall className={'text-white text-2xl'}/>,
            url: '#',
            title: 'Website',
        },
    ];

    const SocialLink = ({icon, url, title}: { icon: React.ReactNode, url: string, title: string }) => {
        // circular links, white border, transparent background. on hover, bg-secondary, border-secondary
        return (
            <Link href={url}
                  className={'rounded-full border border-white hover:bg-secondary hover:border-secondary p-2'}>
                <span className={'sr-only'}>{title}</span>
                {icon}
            </Link>
        );
    }

    return (
        <div className={'flex flex-col justify-center items-start gap-y-4'}>
            <div className={'flex justify-start items-center gap-x-4'}>
                {
                    links.map(link => (
                        <SocialLink icon={link.icon} url={link.url} title={link.title} key={link.url}/>
                    ))
                }
            </div>
            <div className={'flex flex-col justify-center items-start gap-y-2'}>
                <span className={'text-white text-lg font-normal'}>Subscribe to our newsletter</span>
                <div className={'flex justify-start items-center gap-x-2 p-2 bg-white rounded-lg'}>
                    <input type="email" placeholder={'Enter your email'}
                           className={'bg-white px-4 py-2 rounded-lg'}/>
                    <button className={'bg-secondary text-white px-4 py-2 rounded-lg'}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

const FooterSection = ({title, children}: { title: string, children: React.ReactNode }) => {
    return (
        <div className={'flex flex-col justify-start items-start gap-y-4 py-2 px-10'}>
            <span className={'text-white text-xl font-bold'}>{title}</span>
            {children}
        </div>
    );
}

export default Footer;