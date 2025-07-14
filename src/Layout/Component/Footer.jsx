import React from 'react';

import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='py-5 bg-[#1A1919]'>
           <footer className="">
           <div className="flex flex-col  text-primary container mx-auto border-b border-secondary dark:border-secondary justify-between lg:flex-row gap-4 lg:gap-10 text-base-content py-10 px-2 lg:px-0">
            <div className='flex-[30%] space-y-4 pr-8 '>
                        <h2>
                <NavLink className='text-3xl font-bold ' to='/'>Book Vibes</NavLink>
                        </h2>       
                <p>
                There are many variations of 
                passages of Lorem Ipsum but the majority have suffered alteration in some form.
                </p>
                
            </div>
            <nav className='space-y-4 flex flex-col flex-nowrap flex-2/12'>
                <h6 className="footer-title">Services</h6>
                <a className="">Branding</a>
                <a className="">Design</a>
                <a className="">Marketing</a>
                <a className="">Advertisement</a>
            </nav>
            <nav className='space-y-2 flex flex-col flex-nowrap flex-2/12'>
                <h6 className="footer-title">Company</h6>
                <a className="">About us</a>
                <a className="">Contact</a>
                <a className="">Jobs</a>
                <a className="">Press kit</a>
            </nav>
            <nav className='space-y-2 flex flex-col flex-nowrap flex-2/12'>
                <h6 className="footer-title">Legal</h6>
                <a className="">Terms of use</a>
                <a className="">Privacy policy</a>
                <a className="">Cookie policy</a>
            </nav>
            <nav className='space-y-2 flex flex-col flex-nowrap flex-2/12'>
                <h6 className="footer-title">Legal</h6>
                <a className="">Terms of use</a>
                <a className="">Privacy policy</a>
                <a className="">Cookie policy</a>
            </nav>
            </div>
            {/* copy right section  */}
            <div className="">
            <div className='footer sm:footer-horizontal container mx-auto text-neutral-content items-center p-4'>
            <aside className="grid-flow-col items-center">
                
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <p>Powered by Sahin</p>
            </nav>
            </div>
            </div>
           </footer>
        </div>
    );
};

export default Footer;