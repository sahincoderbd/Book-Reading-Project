import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { HiOutlineUsers } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import { SlLocationPin } from 'react-icons/sl';
import { VscBook } from 'react-icons/vsc';
import { useNavigate } from 'react-router';

const ListedBookItem = ({book}) => {
    const {id,
        name, image, author, rating,category,tags,yearOfPublishing,publisher,totalPages
      } = book;
      const navigation=useNavigate();
    const handleBookItem=(id)=>{
        navigation(`/book-details/${id} `, { state: { book } });
    }
    return (
        <div className='p-3 lg:p-5 dark:bg-gray-700 flex flex-col lg:flex-row gap-5 rounded-lg border border-gray-300 dark:border-gray-700'>

            <div className='flex-1/10 bg-gray-200 dark:bg-gray-600 rounded-lg p-5 '>
                <img className='w-xl' src={image} alt={name} />
            </div>
            <div className='flex-3/4 text-wrap py-5 text-left space-y-2 lg:space-y-4'>
                <h3 className='text-2xl lg:text-4xl '>{name}</h3>

                <p>By: {author} </p>
                <div className='flex gap-2 text-xl items-center flex-wrap'>
             Tag:{
                tags.map((tag, index) => <a key={index} className=' text-accent font-normal  dark:bg-accent dark:text-primary bg-[#23BE0A0D] rounded-4xl px-3 py-1 text-sm' href='#'>{tag}</a> )

               
            }
             <p className='lg:ml-3 flex gap-1 flex-wrap items-center'><SlLocationPin className='text-lg' /> Year of Publishing: {yearOfPublishing}</p>

            </div>
            <div className='flex flex-wrap gap-3 lg:gap-5'>
                <p className=' flex gap-1 flex-nowrap items-center'><HiOutlineUsers 
                className='text-lg' /> Publisher : {publisher}</p>
           
                <p className=' flex gap-1 flex-nowrap items-center'><VscBook className='text-lg
                ' /> Pages : {totalPages}</p>
                </div>
                <hr className='my-5 border-gray-300 dark:border-gray-700' />
                <div className='flex flex-wrap gap-3 lg:gap-5 '>
                <button className="btn btn-soft rounded-3xl bg-[#328EFF26] px-5 text-[#328EFF] ">Category: {category}</button>
                <button className="btn btn-soft text-[#FFAC33] rounded-3xl bg-[#FFAC3326]">Rating: <FaRegStar/>{rating}</button>
                <button onClick={()=>handleBookItem(id)} className="btn rounded-3xl btn-accent text-primary">View Details</button>
                </div>
            </div>
            
        </div>
    );
};

export default ListedBookItem;