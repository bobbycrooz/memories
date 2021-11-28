import React from "react";
import { Main } from "./style";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";

import mem1 from "../../asset/mem.gif";
import mem2 from "../../asset/mem2.jpg";
import mem3 from "../../asset/mem3.jpg";

const index = () => {
     return (
          <Main class='text-gray-600 body-font'>
               <section class='text-gray-600 body-font'>
                    <div class='container mx-auto flex px-11 py-24 md:flex-row flex-col items-center justify-center'>
                         <div class='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
                              <img class='object-cover object-center rounded' alt='hero' src={mem2} />
                         </div>
                         {/* */}
                         <div className='space w-11'></div>
                         {/* */}
                         <div class=' md:w-1/2  flex flex-col md:items-start md:text-left items-center text-center'>
                              <h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                                   Start putting your eventfull 
                                   <br class='hidden lg:inline-block' />
                                   moment out to the world
                              </h1>
                              <p class='mb-8 leading-relaxed'>
                                   Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
                                   cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage
                                   hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                              </p>
                              <div class='flex justify-center'>
                                   <button class='btn1-color inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                                        Start
                                   </button>
                              </div>
                         </div>
                    </div>
               </section>
               {/* */}

               <section class='text-gray-600 body-font'>
                    <div class='container mx-auto flex px-11 py-24 md:flex-row-reverse flex-col items-center justify-center'>
                         <div class='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
                              <img class='object-cover object-center rounded' alt='hero' src={mem1} />
                         </div>
                         {/* */}
                         <div className='space w-11'></div>
                         {/* */}
                         <div class='md:w-1/2  flex flex-col md:items-start md:text-left items-center text-center'>
                              <h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                                   keep your memories for futture 
                                   <br class='hidden lg:inline-block' />
                                   references
                              </h1>
                              <p class='mb-8 leading-relaxed'>
                                   Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
                                   cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage
                                   hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                              </p>
                              <div class='flex justify-center'>
                                   <button class='btn1-color inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                                        Keep
                                   </button>
                              </div>
                         </div>
                    </div>
               </section>
               {/* */}

               <section class='text-gray-600 body-font'>
                    <div class='container mx-auto flex px-11 py-24 md:flex-row flex-col items-center justify-center'>
                         <div class='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
                              <img class='object-cover object-center rounded' alt='hero' src={mem3} />
                         </div>
                         {/* */}
                         <div className='space w-11'></div>
                         {/* */}
                         <div class=' md:w-1/2  flex flex-col md:items-start md:text-left items-center text-center'>
                              <h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                                   Show others how you feel about
                                   <br class='hidden lg:inline-block' />
                                   their memories.
                              </h1>
                              <p class='mb-8 leading-relaxed'>
                                   Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
                                   cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage
                                   hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                              </p>
                              <div class='flex justify-center'>
                                   <button class='btn1-color inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                                        Likes
                                   </button>
                              </div>
                         </div>
                    </div>
               </section>
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
