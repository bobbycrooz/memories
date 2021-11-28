import React from "react";
import { Main } from "./style";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import Header from "../../components/header";
// import membg from "../../asset/mem1.jpg";

const index = () => {
     const [isSigning, setIsSigning] = React.useState(true);

     return (
          <Main class=''>
               <div className='layer w-full h-full relative flex items-center justify-center'>
                    <Header />

                    <form className='form-container  '>
                         <div class='bg-gray-100 rounded-lg p-8 flex flex-col w-full '>
                              <h2 class='text-gray-900 text-xl font-semibold font-lato title-font mb-2'>
                                   {isSigning ? "Create new memories account" : "Welcome back"}
                              </h2>

                              <p className='notice text-xs text-gray-900 mb-5'>
                                   {isSigning
                                        ? "Just few steps to begin sharing your memories"
                                        : "Login into your account"}
                              </p>
                              {/**/}

                              {isSigning && (
                                   <div class='relative mb-1'>
                                        <label for='full-name' class='leading-7 text-sm text-gray-600'>
                                             Full Name
                                        </label>
                                        <input
                                             type='text'
                                             id='full-name'
                                             name='full-name'
                                             placeholder='Bobby'
                                             class='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                        />
                                   </div>
                              )}

                              {/**/}
                              {/**/}
                              <div class='relative mb-1'>
                                   <label for='email' class='leading-7 text-sm text-gray-600'>
                                        Email
                                   </label>
                                   <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        placeholder='Bobby@gmail.com'
                                        class='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                   />
                              </div>
                              {/**/}
                              <div class='relative mb-4'>
                                   <label for='email' class='leading-7 text-sm text-gray-600'>
                                        Password
                                   </label>
                                   <input
                                        type='password'
                                        id='password'
                                        name='password'
                                        placeholder='*******'
                                        class='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                   />
                              </div>
                              {/**/}

                              <button class='text-white btn1-color border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg tracking-tight'>
                                   {isSigning ? "Get started, it's free" : "Login "}
                              </button>
                              <button
                                   onClick={() => setIsSigning((p) => !p)}
                                   className='border text-left text-xs text-gray-500 underline my-2'>
                                   forgot password
                              </button>
                              <div className='flex item-center '>
                                   <p class='text-xs text-gray-500'>already signed up?</p>
                                   <button className=' text-left text-xs text-gray-500 underline ml-2'>
                                        {!isSigning ? "Sign up" : "Log In "}
                                   </button>
                              </div>
                         </div>
                    </form>
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
