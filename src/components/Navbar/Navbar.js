import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import bloginoLogo from '../../images/blogino.png';
import { UserContext } from '../../App';


const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [hideNav, setHideNav] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <nav className="w-full z-50 glassmorphism text-white navbar">
            <section className="px-2.5 py-1.5 shadow-md border-md">
                <main className="flex items-center justify-between">
                    <Link to="/">
                        <div className="flex items-center space-x-2">
                            <img src={bloginoLogo} className="w-32 object-cover" alt="" />
                        </div>
                    </Link>
                    <section className="flex items-center justify-between">
                        <div className="lg:block hidden">
                            <ul className="flex items-center space-x-5">
                                <li className="text-md capitalize nav_link">
                                    <Link to="/" className="text-md capitalize nav_link"> HOME</Link>
                                </li>
                                <li className="">
                                    <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="inline-flex justify-center items-center text-md capitalize nav_link"> CATEGORY
                                        <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    <ul className={`origin-top-right w-52 absolute mt-2 shadow-lg glassmorphism navbar z-50 top-20 rounded-b-lg ${isDropdownOpen ? 'block' : 'hidden'}`}>
                                        <li>
                                            <Link to="/" className="text-gray-700 block px-4 py-2 text-md nav_link hover:bg-gray-200" role="menuitem" tabIndex="-1" id="menu-item-0">TRAVEL</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="text-gray-700 block px-4 py-2 text-md nav_link hover:bg-gray-200" role="menuitem" tabIndex="-1" id="menu-item-0">FASHION</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="text-gray-700 block px-4 py-2 text-md nav_link hover:bg-gray-200" role="menuitem" tabIndex="-1" id="menu-item-0">SPORTS</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="text-gray-700 block px-4 py-2 text-md nav_link hover:bg-gray-200" role="menuitem" tabIndex="-1" id="menu-item-0">LIFE STYLE</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="">
                                    <Link to="/" className="text-md capitalize nav_link"> CONTACT US</Link>
                                </li>
                                <li className="bg-blue-100 p-3 shadow-md rounded-sm">
                                    <Link to="/createBlog" className="text-md capitalize nav_link"> CREATE NEW BLOG</Link>
                                </li>
                                <li className="bg-red-100 p-3 shadow-md rounded-sm">
                                    <Link to="/dashboard/managePost" className="text-md capitalize nav_link">DASHBOARD</Link>
                                </li>
                            </ul>

                        </div>
                    </section>
                    <section className="flex items-center space-x-5">
                        <div>
                            <ul className="flex items-center space-x-4">
                                <li className="lg:block hidden">
                                    <div className="relative flex items-center">
                                        <div className="absolute left-1.5 top-1.5 my-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-0.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                        <input type="search" className="w-full h-10 p-1 pl-10 rounded-md bg-gray-200 focus:outline-none focus:ring focus:border-blue-300" placeholder="Search" />
                                    </div>
                                </li>
                                <li className="lg:hidden block">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-400 focus:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-400 focus:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </li>
                                {
                                    loggedInUser.email ? <li>
                                        <div className="border-2 border-gray-200 rounded-full p-1">
                                            <Link className="flex items-center justify-between" to="/">
                                                <img className="w-16 h-12 object-cover rounded-full" src={loggedInUser.photoURL} alt="" />
                                                <h2 className="lg:block hidden text-lg font-extrabold text-gray-600 px-3 pb-1">{loggedInUser.displayName}</h2>
                                            </Link>
                                        </div>
                                    </li> :
                                        <li>
                                            <Link to="/login" className="bg-blue-400 text-white px-4 py-2 mr-4 rounded-full">Log In</Link>
                                        </li>
                                }
                                <li className={`${hideNav ? 'lg:hidden hidden' : 'lg:hidden block'}`}>
                                    <button onClick={() => setHideNav(!hideNav)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-400 focus:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </li>
                                <li className={`${hideNav ? 'lg:hidden block' : 'lg:hidden hidden'}`}>
                                    <button onClick={() => setHideNav(!hideNav)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-400 focus:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </li>

                            </ul>

                        </div>
                    </section>
                </main>
            </section>

            {/* Mobile Navbar */}
            <section className={`lg:hidden bg-blue-100 absolute py-5 w-full ${hideNav ? 'block' : 'hidden'}`}>
                <div>
                    <ul className="flex flex-col items-center space-y-5">
                        <li>
                            <Link to="/" className="text-md capitalize text-gray-500 hover:text-gray-800 nav_link">Home</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-md capitalize text-gray-500 hover:text-gray-800 nav_link">Home</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-md capitalize text-gray-500 hover:text-gray-800 nav_link">Home</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-md capitalize text-gray-500 hover:text-gray-800 nav_link">Home</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-md capitalize text-gray-500 hover:text-gray-800 nav_link">Home</Link>
                        </li>

                    </ul>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;