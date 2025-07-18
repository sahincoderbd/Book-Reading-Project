import Button from 'daisyui/components/button';
import React, { useEffect, useState } from 'react';
import hero from '../assets/pngwing 1.png';
import { NavLink } from 'react-router';
import Book from '../Layout/Component/Book';
const Home = () => {

  
     const [allBooks, setAllBooks] = useState([]);
     const [bookLength, setBookLength] = useState(8);
     useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>{
            setAllBooks(data);
        })

     },[])

     const handleShowDetails = () => {
        setBookLength(allBooks.length);
     }
   
    return (
        <div className='container mx-auto  mt-4  space-y-3 px-2 lg:px-0'>
            {/* hero section */}
            <div className='min-h-[450px] rounded-xl bg-[#1313130D] dark:bg-gray-700 flex flex-col-reverse  px-7 py-10 lg:flex-row gap-4 items-center justify-between dark:border dark:border-gray-600
            '>
                <div className='flex-2/3  flex-col flex-nowrap gap-4 space-y-3 items-center lg:items-start text-center lg:text-left'>
                <h1 className='font-[playfair-display] text-4xl lg:text-7xl font-bold'>Books to freshen up your bookshelf</h1>
                <NavLink className='btn bg-accent h-12 text-primary text-base font-normal cursor-pointer rounded-md' to='/listed-books'>View The List</NavLink>
                </div>
                <div className='flex-1/3'>
                    <img src={hero} alt="hero" className='w-full' />
                </div>
            </div>

            {/* Books section */}

            <div className=' text-center space-y-5 py-10'>
                <h2 className='text-4xl font-extrabold'>Books</h2>


                {/* */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 '>
                {
                    allBooks.slice(0,bookLength).map(book=><Book key={book.id} book={book}></Book>)
                }
                
                </div>
                <button onClick={handleShowDetails}  className={`btn mx-auto bg-accent text-primary px-5 py-3 text-base ${bookLength===allBooks.length && 'hidden'}`} >Show All Books</button>
            </div>
        </div>
    );
};

export default Home;