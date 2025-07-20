import React from 'react';
import { NavLink,Link } from 'react-router';

const Header = () => {
    return (
        <div className='container mx-auto mt-3'>
            <div className="navbar ">
  <div className="navbar-start gap-2">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 
        gap-3 shadow text-base">
       <NavLink to='/'> Home </NavLink>
       <NavLink to='/listed-books'> Listed Books </NavLink>
       <NavLink to='/pages-to-read'> Pages to Read </NavLink>
        
      </ul>
    </div>
    <Link to='/' className="font-[playfair-display] text-2xl lg:text-4xl font-bold"><h2>Book Vibe</h2></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-10 text-lg">
    <NavLink className='focus:border-2 rounded-md border-accent px-3 py-1 focus:text-accent' to='/'> Home </NavLink>
       <NavLink className='focus:border-2 rounded-md border-accent px-3 py-1 focus:text-accent' to='/listed-books'> Listed Books </NavLink>
       <NavLink className='focus:border-2 rounded-md border-accent px-3 py-1 focus:text-accent' to='/pages-to-read'> Pages to Read </NavLink>
    </ul>
  </div>
  <div className="navbar-end gap-4 ">
    <NavLink className="btn bg-accent h-12 text-primary text-base cursor-pointer rounded-md hidden lg:flex">Sign In</NavLink>
    <NavLink className="btn bg-blue  h-12 text-primary text-base cursor-pointer rounded-md">Sign Up</NavLink>
  </div>
</div>
        </div>
    );
};

export default Header;