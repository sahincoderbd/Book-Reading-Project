import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getReadItemsFromLs, getWishListFromLs } from '../Utility/localStorage';
import { SiBookstack } from 'react-icons/si';
import { IoMdHeart } from 'react-icons/io';
import ListedBookItem from '../Layout/Component/ListedBookItem';
import { FaAngleDown } from 'react-icons/fa';



const ListedBooks = () => {

    const books=useLoaderData();
    const [allBooksOfWishlist,setAllBooksOfWishlist]=useState([]);

    const [allBooksOfReadList,setAllBooksOfReadList]=useState([]);

    useEffect(()=>{
        let storedBooksFromWishList=getWishListFromLs();
        const storedReadItemsFromLs=getReadItemsFromLs();

        storedBooksFromWishList=storedBooksFromWishList.filter(item=>!storedReadItemsFromLs.includes(item));

        localStorage.setItem('wishListedBooks',JSON.stringify(storedBooksFromWishList));

        const bookReadList = books.filter(book=>storedReadItemsFromLs.includes(book.id) );
        setAllBooksOfReadList(bookReadList);

       
        const bookWishlist = books.filter(item=>storedBooksFromWishList.includes(item.id));
        setAllBooksOfWishlist(bookWishlist);

        
    },[]);
    // shorting book 
    const handleSort=(sortBy)=>{

        const sortArray=(array,key)=>{
            return [...array].sort((a,b)=>{
                if(key ==='rating') return a.rating-b.rating;
                if(key ==='numberToPages') return a.totalPages-b.totalPages;
                if(key ==='publishingYear') return b.yearOfPublishing-a.yearOfPublishing;
                else{
                    return 0;
                }
                
            });
        };
        setAllBooksOfReadList(sortArray(allBooksOfReadList,sortBy));
        setAllBooksOfWishlist(sortArray(allBooksOfWishlist,sortBy));
    }



    return (
        <div className='text-center text-3xl font-bold py-10 flex flex-col flex-nowrap gap-4 container mx-auto'>
            <h2 className='text-3xl bg-gray-200 dark:bg-gray-700 rounded-sm py-3 '>Books</h2>
        

            <div className="dropdown dropdown-bottom dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1 px-6 w-50 bg-accent text-primary">Sort By <FaAngleDown/></div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li onClick={()=>handleSort('rating')}><a>Rating</a></li>
                <li onClick={()=>handleSort('numberToPages')}><a>Number of pages</a></li>
                <li onClick={()=>handleSort('publishingYear')}><a>Publisher year</a></li>
            </ul>
            </div>

                    {/* name of each tab group should be unique */}
           
                <div className="tabs tabs-lift py-8">
                <label className="tab text-lg font-normal gap-2  dark:[--tab-bg:#1e2939] [--tab-bg:#f5f5f5] [--tab-border-color:#d1d5dc] dark:[--tab-border-color:#364153]"  >
                    <input className=' bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700' type="radio" name="my_tabs_4" defaultChecked />
                    <SiBookstack/>
                    Read List
                </label>
                <div className="tab-content space-y-5 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 p-6">

                {
                    allBooksOfReadList.map(book=><ListedBookItem key={book.id} book={book}></ListedBookItem>)
                }


               </div>

                <label className="tab text-lg font-normal  dark:[--tab-bg:#1e2939] [--tab-bg:#f5f5f5] [--tab-border-color:#d1d5dc] dark:[--tab-border-color:#364153]">
                    <input type="radio" name="my_tabs_4" />
                    <IoMdHeart/>
                    Wish List
                </label>
                <div className="tab-content bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 p-6 space-y-5">

                {
                    allBooksOfWishlist.map(book=><ListedBookItem key={book.id} book={book}></ListedBookItem>)
                }

                </div>
                </div>
          </div>
    );
};

export default ListedBooks;