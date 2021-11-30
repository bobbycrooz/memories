import React from "react";
import { Main, Memcard } from "./style";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Hero from '../../components/home_hero'
import Header from "../../components/header";
// import membg from "../../asset/mem1.jpg";

const index = () => {
     return (
          <Main className='dashboard bg-gray-200 pt-20 text-gray-700'>
               <Header />
               <div className='layout w-full h-auto  flex'>
                    <div className='border  side-pane flex justify-end p-2'>
                         <div className='border 0  w-1/2 h-full'>
                              <h1></h1>
                         </div>
                    </div>
                    <div className='  main-app p-2 py-4'>
                         <div className='w-full h-full bg-gray-50  rounded-t-md shadow-sm p-2'>
                              <section className='trending p-3'>
                                   {/* */}
                                   <div className='most-rencent py-5 p-2 capitalize w-full border-b font-semibold text-2xl font-lato'>
                                        <h1 className='recent-title'>Your memories</h1>
                                   </div>
                                   <div className='mt-6 container w-full'>
                                        <SimpleSlider />
                                   </div>
                              </section>

                              {/* */}
                              <section className='trending p-3'>
                                   {/* */}
                                   <div className='most-rencent py-5 p-2 capitalize w-full border-b font-semibold text-2xl font-lato'>
                                        <h1 className='recent-title'>most recent memories for you</h1>
                                   </div>
                                   <div className='mt-6 container w-full'>
                                        <div className='grid grid-cols-3 gap-y-20 gap-6 px-4'>
                                             {Array(6)
                                                  .fill(1)
                                                  .map((item, index) => (
                                                       <Memcard className='memories-card w-full  rounded-t-md shadow-md'>
                                                            <div className='img-container w-full relative'></div>

                                                            <div className='card-content w-full p-3'>
                                                                 <div className='date-name w-full py-5  flex relative text-sm'>
                                                                      <h1 className='date uppercase text-gray-500 font-semibold'>
                                                                           feb 19, 2020 |
                                                                      </h1>
                                                                      <p className='name uppercase ml-1'>
                                                                           by
                                                                           <span className='style-name ml-1'>
                                                                                bobbyDev
                                                                           </span>
                                                                      </p>

                                                                      {/* */}
                                                                 </div>

                                                                 {/* */}
                                                                 <div className='body      w-full mt-2 py-5  space-y-5   flex flex-col justify-between'>
                                                                      <h1 className='title text-3xl font-joe capitalize '>
                                                                           First vacation to atlanta. you see
                                                                      </h1>
                                                                      <span className='h-1'></span>

                                                                      <Link
                                                                           className='read-more capitalize  text-sm 
                                                                      border py-1 px-3 w-16'>
                                                                           view
                                                                      </Link>
                                                                 </div>
                                                            </div>
                                                       </Memcard>
                                                  ))}
                                        </div>
                                   </div>
                              </section>
                         </div>
                    </div>
                    <div className='border   right-pane p-2 flex justify-start'>
                         <div className='w-1/2  h-full'>
                              <h1></h1>
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



function SimpleSlider() {
     var settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60",
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true,
     };
     return (
          <div className='slider px-4'>
               <Slider {...settings}>
                    {Array(6)
                         .fill(1)
                         .map((item, index) => (
                              <div className='box p-4'>
                                   <Memcard className='memories-card w-full  rounded-t-md shadow-md'>
                                        <div className='img-container w-full relative'></div>

                                        <div className='card-content w-full p-3'>
                                             <div className='date-name w-full py-5  flex relative text-sm'>
                                                  <h1 className='date uppercase text-gray-500 font-semibold'>
                                                       feb 19, 2020 |
                                                  </h1>
                                                  <p className='name uppercase ml-1'>
                                                       by
                                                       <span className='style-name ml-1'>bobbyDev</span>
                                                  </p>

                                                  {/* */}
                                             </div>

                                             {/* */}
                                             <div className='body      w-full mt-2 py-5  space-y-5   flex flex-col justify-between'>
                                                  <h1 className='title text-3xl font-joe capitalize '>
                                                       First vacation to atlanta. you see
                                                  </h1>
                                                  <span className='h-1'></span>

                                                  <Link
                                                       className='read-more capitalize  text-sm 
                                                                      border py-1 px-3 w-16'>
                                                       view
                                                  </Link>
                                             </div>
                                        </div>
                                   </Memcard>
                              </div>
                         ))}
               </Slider>
          </div>
     );
}
export default index;
