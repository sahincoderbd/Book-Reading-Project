import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='container mx-auto mt-3'>
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <NavLink to='/'> Home </NavLink>
       <NavLink to='/listed-books'> Listed Books </NavLink>
       <NavLink to='/pages-to-read'> Pages to Read </NavLink>
        
      </ul>
    </div>
    <a className=" text-4xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-10 text-lg">
    <NavLink to='/'> Home </NavLink>
       <NavLink to='/listed-books'> Listed Books </NavLink>
       <NavLink to='/pages-to-read'> Pages to Read </NavLink>
    </ul>
  </div>
  <div className="navbar-end gap-4 ">
    <NavLink className="btn bg-accent  h-12 text-primary text-base cursor-pointer rounded-md">Sign In</NavLink>
    <NavLink className="btn bg-blue  h-12 text-primary text-base cursor-pointer rounded-md">Sign Up</NavLink>
  </div>
</div>
        </div>
    );
};

export default Header;