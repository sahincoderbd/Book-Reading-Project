import React from 'react';

const Book = ({book}) => {
    const {
      name, image, author, totalPages,rating,category,tags,publisher,yearOfPublishing  
    } = book;
    return (
        <div className=' rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col flex-nowrap gap-4' >
            <img src={image} alt="" />
            <h2>{book.name}</h2>
        </div>
    );
};

export default Book;