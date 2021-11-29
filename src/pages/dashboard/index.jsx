import React from "react";
import { Main } from "./style";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";

// import Hero from '../../components/home_hero'
import Header from "../../components/header";
// import membg from "../../asset/mem1.jpg";

const index = () => {
     return (
          <Main className='dashboard bg-gray-200 pt-20'>
               <Header />
               <div className='layout w-full h-auto  flex'>
                    <div className='border  side-pane flex justify-end p-2'>
                         <div className='border bg-gray-400  w-1/2 h-full'>
                         <h1>side bar content goes here</h1>
                         </div>
                    </div>
                    <div className='border  main-app p-2'>
                         <div className='w-full h-full bg-gray-400 border'>main contet goes here</div>
                    </div>
                    <div className='border   right-pane p-2 flex justify-start'>
                    <div className="w-1/2 bg-gray-400 h-full">
                    <h1>right content goes here</h1>
                    </div>
                    </div>
               </div>
          </Main>
     );
};

function Icon() {
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
export default index;
