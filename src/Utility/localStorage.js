// to add readed book
const getReadItemsFromLs = () => {
  const items = localStorage.getItem('readItems');
  return items ? JSON.parse(items) : [];
}

// to add wishlisted book
const getWishListFromLs=()=>{
  const wishlistedItems=localStorage.getItem('wishListedBooks');
  return wishlistedItems ? JSON.parse(wishlistedItems):[];
}
// Add to read book to LS
const addToReadLs = (id) => {
const storedBookItems =getReadItemsFromLs();
// console.log(storedBookItems);
const exists = storedBookItems.find((bookId)=>bookId===id);
if(!exists){
    storedBookItems.push(id);
    localStorage.setItem('readItems',JSON.stringify(storedBookItems));
}
else{
console.log('Book already added to read');
}

}

// Add to wishlist book to LS
const addWishlistToLs=id=>{
  const storedWishlistedItems= getWishListFromLs();
  const exists=storedWishlistedItems.find(ItemId=>ItemId===id);

  if(!exists){
    storedWishlistedItems.push(id);
    localStorage.setItem('wishListedBooks',JSON.stringify(storedWishlistedItems));
  }
  else{
    console.log('book already added to wishlist');
  }
}

export {addToReadLs,getReadItemsFromLs,getWishListFromLs,addWishlistToLs};