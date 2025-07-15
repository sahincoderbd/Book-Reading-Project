import Button from 'daisyui/components/button';
import React, { useState } from 'react';
import hero from '../assets/pngwing 1.png';
import { NavLink, useLoaderData } from 'react-router';
import Book from '../Layout/Component/Book';
const Home = () => {

    const allBooks=useLoaderData();


    return (
        <div className='container mx-auto  bg-[#1313130D] rounded-xl mt-6  space-y-3'>
            {/* hero section */}
            <div className='min-h-[450px] flex flex-col px-7 py-10 lg:flex-row gap-4 items-center justify-between
            '>
                <div className='flex flex-col flex-nowrap gap-4 items-start'>
                <h1 className='font-[playfair-display] text-3xl lg:text-7xl font-bold'>Books to freshen up <br></br>your bookshelf</h1>
                <NavLink className='btn bg-accent h-12 text-primary text-base cursor-pointer rounded-md'>View The List</NavLink>
                </div>
                <div>
                    <img src={hero} alt="hero" className='w-full' />
                </div>
            </div>

            {/* Books section */}

            <div className=' text-center space-y-3 py-10'>
                <h2 className='text-4xl font-extrabold'>Books</h2>


                {/* */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                {
                    allBooks.map(book=><Book key={book.id} book={book}></Book>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;