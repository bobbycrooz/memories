import React from "react";
import { Header } from "./style";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../asset/logo1.png";
import logo2 from "../../asset/logo3.png";

const index = () => {
     const location = useLocation();
     const [dash, setDash] = React.useState(false);
     
     React.useEffect(() => {
     
     if (location.pathname === '/dash'){
     setDash(true)
     }
     
     },)

     return (
          <Header  className={`${location.pathname !== "/auth" && "bg-white shadow-md"}`}>
          
          {dash ? <DashboardHeader /> : <DefaultHeader /> }
               
          </Header>
     );
};

function Search() {
     return (
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='#878989'>
               <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
               />
          </svg>
     );
}


function Bell() {
     return (
          <svg
               xmlns='http://www.w3.org/2000/svg'
               className='h-6 w-6 hover:text-red-700'
               fill='none'
               viewBox='0 0 24 24'
               stroke='currentColor'>
               <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
               />
          </svg>
     );
}

function DashboardHeader() {
     return (
          <div class='text-gray-600 body-font  shadow-sm px-36'>
               <div class='container mx-auto flex flex-wrap  py-1 flex-col md:flex-row items-center justify-between '>
                    <div className=' flex items-center'>
                         <Link to='/' class='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mt-1'>
                              <img src={logo2} alt='' />
                         </Link>

                         <div className='search-container w-80'>
                              <div className='hero-search  w-full h-11 px-4'>
                                   <label htmlFor='search' className='w-full h-full flex bg-gray-100 rounded-md'>
                                        <div className='search-icon  flex justify-center items-center p-3'>
                                             <Search />
                                        </div>
                                        <input
                                             type='text'
                                             name='search'
                                             id=''
                                             placeholder='Search'
                                             className='w-full h-full bg-gray-100 pl-4 rounded-md
                                             outline-none font-joe
                                             '
                                        />
                                   </label>
                              </div>
                         </div>
                    </div>

                    {/* */}
                    {/* CTO button*/}

                    <div className='profile-container   h-full flex items-center'>
                         <nav className='flex space-x-3'>
                              <button className='nav py-2 px-4 '>Home</button>
                              <button className='nav py-2 px-4 '>Post</button>
                              <button className='nav py-2 px-4 '>Settings</button>

                              <button className='nav py-2 px-4 '>
                                   <Bell />
                              </button>
                         </nav>
                         <div className='avatar flex items-center  ml-6'>
                              <div className='w-11 h-11 flex items-center justify-center  rounded-full bg-gray-600 text-white font-joe font-semibold'>
                                   B
                              </div>
                              <button className='nav ml-4'>Bobby</button>
                         </div>
                    </div>
               </div>
          </div>
     );
     
     
   
}

function DefaultHeader() {
     return (
          <div class='text-gray-600 body-font  shadow-sm px-1'>
               <div class='container mx-auto flex flex-wrap  py-1 flex-col md:flex-row items-center justify-around '>
                    <Link to='/' class='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mt-1'>
                         <img src={logo2} alt='' />
                    </Link>

                    <div className='space w-2/3' />

                    {/* */}
                    {/* CTO button*/}

                    <div className={`${location.pathname === "/auth" ? "hidden" : "button-container"}`}>
                         <NavLink
                              to='/auth'
                              class={`${
                                   location.pathname === "/auth" && "btn2-color "
                              } inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 font-medium`}>
                              Login
                         </NavLink>

                         <button class='btn1-color inline-flex ml-3 items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 font-medium'>
                              Sign Up
                         </button>
                    </div>
               </div>
          </div>
     );
}
export default index;
