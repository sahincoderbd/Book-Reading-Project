import React from 'react';
import '../App.css'
import { useLocation } from 'react-router';
import { addToReadLs, addWishlistToLs, getReadItemsFromLs, getWishListFromLs } from '../Utility/localStorage';
import toast, { Toaster } from 'react-hot-toast';



const BookDetails = () => {

    const {state}=useLocation();
    console.log(state);
    const {book}=state;
    const {id,name, image,review, author,totalPages,publisher,yearOfPublishing, rating, category, tags} = book;

    const warningSuccess=(readOrWishList)=>toast.success(`Book Successfully Added to ${readOrWishList}`);
    const warningExist=(readOrWishList)=>toast.error(`Book Already been Added to ${readOrWishList} . so you cannot be able to add again`);
   

    const handleAddToRead = (id) => {
   
        const getStoredFromReadLS=getReadItemsFromLs();

        const existsReadList=getStoredFromReadLS.find(readedBookId=>readedBookId===id);
        
        // Logic to add the book to the "Read" list

        if(!existsReadList){       
        addToReadLs(id);
        warningSuccess('Read');
       
        }
        else{
            warningExist('Read');
        }
    }
    
    const handleAddToWishlist=(id)=>{
        const getStoredFromWishlistLS=getWishListFromLs();
    const getStoredFromReadLS=getReadItemsFromLs();
        
        const existsWishlist=getStoredFromWishlistLS.find(readedBookId=>readedBookId===id);
        const existsReadList=getStoredFromReadLS.find(readedBookId=>readedBookId===id);

        if(!existsWishlist && !existsReadList){

        addWishlistToLs(id);
        warningSuccess('Wishlist');
        }
        else{
            warningExist('WishList Or Read');
        }

       
       
    }



    return (
        <div className=' container mx-auto mt-4 py-10 space-y-3 flex flex-col lg:flex-row gap-4 px-2 lg:px-0'> 

                <div className='flex-1 bg-[#1313130D] dark:bg-gray-700 rounded-xl p-6 lg:p-8 text-center'>
                    <img className='items-stretch' src={image} alt={name} />
                </div>   
                <div className='flex-1 space-y-3'>
                <h2 className='text-4xl font-bold '>{name}</h2>
                <p className='text-lg mt-3 '>By : {author}</p>
                <hr className='border-dashed text-gray-300 dark:text-gray-600 '/>
                <p className='text-lg mt-3 '>{category}</p>
                <hr className='border-dashed text-gray-300 dark:text-gray-600 pb-3'/>
                <p><strong>Review : </strong> {review}</p>
                <div className='pb-5 '>
                    <strong className=''>Tags: </strong> {
                        tags.map((tag, index) => <a key={index} className='text-accent dark:bg-accent dark:text-primary bg-[#23BE0A0D] rounded-4xl px-3 py-1.5 text-sm mr-2' href='#'>#{tag}</a> )
                    }
                </div>
                <hr className='border-dashed text-gray-300 dark:text-gray-600 pb-3'/>

                <p className='flex justify-between flex-nowrap w-full lg:w-1/2  '>Number of Pages: <strong className='text-lg '> {totalPages} </strong></p>
                <p className='flex justify-between flex-nowrap w-full lg:w-1/2  '>Publisher: <strong className='text-lg '>  {publisher}</strong></p>
                <p className='flex justify-between flex-nowrap w-full lg:w-1/2  '>Year of Publishing: <strong className='text-lg '> {yearOfPublishing}</strong></p>
                <p className='flex justify-between flex-nowrap w-full lg:w-1/2  '>Rating: <strong className='text-lg '> {rating}</strong></p>
                    <div className='flex flex-nowrap gap-4 pt-5'>
                    <button onClick={()=>handleAddToRead(id)} className='btn bg-transparent border border-[#1313134D] dark:border-gray-500 px-6 py-3 text-base'>Read</button>

                    <button onClick={()=>handleAddToWishlist(id)} className='btn bg-accent text-white border border-[#1313134D] dark:border-accent px-6 py-3 text-base'>Add to Wishlist</button>
                    </div>
                </div>   
                
                    <Toaster
                    position="top-right"
                    reverseOrder={false}
                    gutter={8}
                    toastOptions={{
                      // Define default options
                      className: '',
                      duration: 5000,
                      removeDelay: 1000,
                      style: {
                        background: '#363636',
                        color: '#fff',
                      }}}
                    />
        </div>
    );
};

export default BookDetails;