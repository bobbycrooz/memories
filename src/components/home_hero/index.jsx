import React from "react";
import { Main } from "./style";
import { Link } from "react-router-dom";
import mem1 from "../../asset/mem1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const index = () => {
     return (
          <Main class='text-gray-600 body-font  '>
               <div className='hero px-14   w-full h-full mt-20 pt-11'>
                    <div className='hero_background  mt-9 w-full flex justify-center rounded-t-md'>
                         <div className='hero_content w-1/2 space-y-6 '>
                              <h1 className='hero-text text-center text-4xl font-lato font-bold text-white mt-6'>
                                   A Platform for all your memories
                              </h1>

                              {/* */}
                              <div className='hero-search  w-full h-11 px-4'>
                                   <label htmlFor='search' className='w-full h-full flex bg-gray-100 rounded-md'>
                                        <div className='search-icon  flex justify-center items-center p-3'>
                                             <Icon />
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

                              {/* */}
                              <div className='bellow p-3 h-auto flex justify-around flex-wrap'>
                                   {[1, 1, 1, 1, 1, 1].map((item, index) => (
                                        <div className='small-box h-full p-1  w-20'>
                                             <div className='circle-icon-box rounded-full w-14 h-14 bg-white mx-auto  flex justify-center items-center '>
                                                  <svg
                                                       xmlns='http://www.w3.org/2000/svg'
                                                       className='h-5 w-5'
                                                       viewBox='0 0 20 20'
                                                       fill='#fff'>
                                                       <path
                                                            fillRule='evenodd'
                                                            d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                                                            clipRule='evenodd'
                                                       />
                                                  </svg>
                                             </div>
                                             <h1 className='small-box-text mx-auto text-md mt-3 font-joe font-semibold text-white'>
                                                  nice room
                                             </h1>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
                    <h1 className='hero2_title font-normal font-lato text-xl mt-4 text-gray-500 '>
                         Few memories you might want to check out.
                    </h1>
                    <div className='carousel   mt-1 w-full  rounded-b-md '>
                         <SimpleSlider />
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

function SimpleSlider() {
     var settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60",
          slidesToShow: 5,
          slidesToScroll: 5,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows:false
     };
     return (
          <div className='container  justify-between '>
               <Slider {...settings}>
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                         <div className='p-4 flex justify-center items-center '>
                              <div className='box h-full'>
                                   <img src={mem1} alt='' className='' />
                                   <div className='layer title '>
                                        <h1 className='mem-title text-white border-2 rounded-md p-2 text-xl font-lato capitalize'>
                                             <i> on my 18th birthday</i>
                                        </h1>
                                   </div>
                              </div>
                         </div>
                    ))}
               </Slider>
          </div>
     );   
}
export default index;

