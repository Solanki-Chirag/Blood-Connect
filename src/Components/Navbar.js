import React from 'react';
import { NavLink,Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        
                        <Link
                        to={"/SignIn"}
                        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 lg:px-8 py-2 lg:py-2.5 mr-2 mr-1 focus:outline-none "
                        >
                            Log In
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            

                            <li>
                            <NavLink
                            to={"/About"}
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                    ${isActive? "text-orange-700":"text-grey-700"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                ABOUT US
                            </NavLink>
                        </li>

                        <li>
                        <NavLink
                        to={"/Contact"}
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                ${isActive? "text-orange-700":"text-grey-700"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            CONTACT US
                        </NavLink>
                    </li>
                       
                    <li>
                        <NavLink
                        to={"/OrganizeCamp"}
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                ${isActive? "text-orange-700":"text-grey-700"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            ORGANIZE A CAMP
                        </NavLink>
                    </li>


                    <li>
                    <NavLink
                    to={"/Blogs"}
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                            ${isActive? "text-orange-700":"text-grey-700"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        BLOG
                    </NavLink>
                </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

