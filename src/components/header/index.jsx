import React from "react";
import { Header } from "./style";
import {NavLink, Link , useLocation} from 'react-router-dom'
import logo from '../../asset/logo1.png'
const index = () => {

const location = useLocation()


     return (
          <Header auth={true} className={`${location.pathname !== "/auth" && "bg-white"}`}>
               <div class='text-gray-600 body-font  shadow-lg'>
                    <div class='container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-around'>
                         <Link to='/' class='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
                              <img src={logo} alt='' />
                         </Link>

                         <div className='space w-2/3' />

                         {/* */}
                         {/* CTO button*/}
                         <div className='button-container'>
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
          </Header>
     );
};




function Icon() {
return (
     <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path
               strokeLinecap='round'
               strokeLinejoin='round'
               strokeWidth={2}
               d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
          />
     </svg>
);
  
}
export default index