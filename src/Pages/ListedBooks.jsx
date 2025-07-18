import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getReadItemsFromLs, getWishListFromLs } from '../Utility/localStorage';
import { AiFillBook, AiOutlineAccountBook } from 'react-icons/ai';
import { SiBookstack } from 'react-icons/si';
import { IoMdHeart } from 'react-icons/io';

const ListedBooks = () => {

    const books=useLoaderData();
    const [allBooksOfWishlist,setAllBooksOfWishlist]=useState([]);
    const [allBooksOfReadList,setAllBooksOfReadList]=useState([]);

    useEffect(()=>{
        const storedBooksFromWishList=getWishListFromLs();
        const storedReadItemsFromLs=getReadItemsFromLs();
        console.log(storedBooksFromWishList);
        setAllBooksOfWishlist(storedBooksFromWishList);
        setAllBooksOfReadList(storedReadItemsFromLs);
    },[])

    return (
        <div className='text-center text-3xl font-bold py-10 flex flex-col flex-nowrap gap-4 container mx-auto'>
            <h2 className='text-3xl bg-gray-200 dark:bg-gray-700 rounded-sm py-3 '>Books</h2>

            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                <label className="tab text-lg font-normal gap-2 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700">
                    <input className='bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700' type="radio" name="my_tabs_4" />
                    <SiBookstack />
                    Read List
                </label>
                <div className="tab-content bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 p-6">Tab content 1</div>

                <label className="tab text-lg font-normal bg-gray-100 dark:bg-gray-800 border-gray-100 dark:border-gray-800">
                    <input type="radio" name="my_tabs_4" defaultChecked />
                    <IoMdHeart/>
                    Wish List
                </label>
                <div className="tab-content bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 p-6">Tab content 2</div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;