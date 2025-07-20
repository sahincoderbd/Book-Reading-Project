import React from 'react';
import { IoMdStar } from 'react-icons/io';
import { useNavigate, } from 'react-router';


const Book = ({book}) => {
    
    const {id,
      name, image, author, rating,category,tags  
    } = book;
    const navigation=useNavigate();
    const handleBookItem=()=>{
        navigation(`/book-details/${id} `, { state: { book } });
    }

  
    return (
        <div onClick={handleBookItem} className=' cursor-pointer rounded-lg p-4 md:p-5 flex flex-col flex-nowrap gap-3 border border-[#13131326] dark:border-gray-700' >

            <img src={image} alt={name} className='w-full h-64 object-contain bg-[#F3F3F3] dark:bg-gray-800 rounded-lg' />
            <div className='flex gap-2'>
            {
                tags.map((tag, index) => <a key={index} className='text-accent dark:bg-accent dark:text-primary bg-[#23BE0A0D] rounded-4xl px-3 py-1.5 text-sm' href='#'>{tag}</a> )
            }
            </div>
            
            <h2 className='text-3xl font-bold text-left'>{book.name}</h2>
            <p className='text-lg text-left '>By : {author}</p>

            <hr className='border-dashed text-gray-300 dark:text-gray-600 '/>

            <div className='flex justify-between items-center text-lg'>
            <a className='' href="">{category}</a> 
            <p className='flex items-center gap-1 '>{rating} <IoMdStar className='text-2xl text-accent'/></p>

            </div>

        </div>
    );
};

export default Book;