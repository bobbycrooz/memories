import React from "react";
import { Section, CourseCard } from "./styles";
import ilus from "../../asset/home1.png";
import img1 from "../../asset/img1.png";
import img2 from "../../asset/img2.png";
import img3 from "../../asset/img3.png";
import img4 from "../../asset/img4.png";
import img5 from "../../asset/img5.png";
import lap from "../../asset/lap.png";
import grad from "../../asset/grad.png";
import pep from "../../asset/people.png";
import pep2 from "../../asset/pep2.png";
import email from "../../asset/email.png";
import cong from "../../asset/cong.png";
import { CgArrowLongRight } from "react-icons/cg";
import Carousel, { CarouselTwo } from "../../components/Carousel";

import { useSelector, useDispatch } from "react-redux";

const features = [
     {
          img: img1,
          text: "software development",
     },
     {
          img: img2,
          text: "software languages",
     },
     {
          img: img3,
          text: "project management",
     },
     {
          img: img4,
          text: "agile",
     },
     {
          img: img5,
          text: "artificial inteligency",
     },
];

const HomeComponent = ({ isLoggedIn, user }: any) => {
     // const User = useSelector(({ authSlice }) => authSlice);
     return (
          <Section>
               {/*  __hero starts__*/}

               {!user ? (
                    <>
                         <div className='hero h-auto  md:h-9vh flex flex-col md:flex-row  justify-center items-center w-full px-11 py-20'>
                              <div className='content   flex  items-center'>
                                   <div className='content_wrapper  items-center w-full h-auto md:h-72 md:space-y-5 space-y-2'>
                                        <h1 className='hero_title  font-semibold font-src'>Learning @ Your Pace</h1>
                                        <p className='hero_text text-xl font-normal'>
                                             Get rid of the routine feel from your learning process while adding fun to
                                             it.
                                        </p>
                                        <button
                                             
                                             className='btn rounded-lg text-white ml-28 md:mx-0'>
                                             sign up
                                        </button>
                                   </div>
                              </div>

                              <div className='space  w-11'></div>
                              <div className='ilustration '>
                                   <img src={ilus} alt='' className='w-full h-full' />
                              </div>
                         </div>
                    </>
               ) : (
                    <div className='main bg-pri-1 relative'>
                         <img src={cong} alt='' className='w-full h-full ' />
                         <h1 className='md:text-6xl text-5xl font-semibold text-white capitalize absolute   top-20 md:left-11  left-6'>
                              welcome back
                         </h1>
                    </div>
               )}

               {/*  __hero ends___*/}

               {/*_____what we offer___*/}
               {!user ? (
                    <>
                         {" "}
                         <div className='offer_section h-auto bg-pink-100 py-8 px-14 md:px-28 space-y-4'>
                              <h1 className='offer_title font-semibold text-3xl capitalize mt-11 text-center md:text-left'>
                                   what we offer
                              </h1>

                              <p className='offer_text text-center md:text-left'>
                                   We bring to a fun filled education with the best lecturers and tutors.
                              </p>

                              <div className='cards grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-5'>
                                   {features.map((item) => (
                                        <div className='card shadow-lg rounded-lg bg-white p-4 flex justify-center flex-col items-center h-44 w-full'>
                                             <img src={item.img} alt='' />

                                             <p className='info mt-3 font-semibold capitalize'>{item.text}</p>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </>
               ) : (
                    <>
                         {" "}
                         <div className='my_learning flex items-center bg-red-400 py-4'>
                              <div className='inner  w-9% mx-auto h-auto  md:h-8% flex flex-col justify-between'>
                                   <div className='title_info flex items-center justify-between capitalize'>
                                        <h1 className='text-xl  md:text-3xl  w-1/2 font-semibold'>
                                             Let’s continue learning, Cameron{" "}
                                        </h1>
                                        <p className='explore underline font-semibold  text-sec-1'>explore course</p>
                                   </div>

                                   <div className='current_courses overflow-hidden  -ml-6'>
                                        <CarouselTwo />
                                   </div>
                              </div>
                         </div>
                    </>
               )}
               {/*  _____what we offer ends___*/}

               {/* carousel */}
               <div className='carousel_section h-auto py-11  md:h-screen md:py-20 md:px-28 p-11'>
                    <h1 className='-ml-6 font-semibold text-xl md:text-3xl capitalize '>courses and specialization</h1>

                    <div className='carousel -ml-11 md:ml-0 w-72 md:w-full mx-auto space-y-8  py-4'>
                         <Carousel />
                    </div>
                    <div className='explore text-red-500 w-36 mx-auto  flex items-center'>
                         <p className='explore underline'>explore course</p>
                         <CgArrowLongRight className='ml-3' />
                    </div>
               </div>
               {/* carousel */}

               {/* people */}
               <div className='relative join_container text-txt-1 w-full md:h-6vh h-auto py-9 my-14 px-8 md:px-28 flex md:flex-row flex-col-reverse items-center justify-between'>
                    <img src={!user ? pep : pep2} alt='' className='mt-11 md:mt-0 w-2/3  md:w-1/2 md:absolute' />
                    <div className='space w-2/3 md:w-8%'></div>
                    <div className='w-full  md:w-1/2 h-48  flex flex-col justify-between'>
                         <h1 className='join_title text-3xl font-semibold capitalize text-center md:text-left'>
                              join our amaizing webinar
                         </h1>
                         <p className='join_text w-full md:w-3/4 text-center md:text-left'>
                              Be part of our weekly webinars where amazing lecturers and practitioners take you through
                              topics and courses that would blow your mind.
                         </p>
                         <button className='btn w-28 text-white mx-auto md:mx-0'>join now</button>
                    </div>
               </div>
               {/* people */}

               {/*  patner */}
               <div className='partner  py-20 h-full w-full mt-11'>
                    <div className='  mx-auto w-52 h-60 space-y-8'>
                         <h1 className='text-4xl capitalize text-center'>our partner</h1>
                         <img src={grad} alt='' className='mx-auto' />
                    </div>
               </div>
               {/*  patner */}

               {/*  email */}
               <div className='email py-9  md:py-20 px-4 md:px-36   h-auto md:h-full w-full  flex flex-col-reverse  md:flex-row items-center   '>
                    <div className=' w-full md:w-1/2 md:h-56  flex flex-col justify-between space-y-6 md:space-y-0'>
                         <h1 className='email-title text-3xl font-semibold capitalize text-center md:text-left'>
                              Be Notified of New Videos and Webinars
                         </h1>
                         <p className='email-title text-center md:text-left'>
                              Become part of a broad community to get in on grooming tips, education videos,
                              notifications, and anything and everything that’ll help you grow.
                         </p>
                         <form className='nesletter relative mx-auto md:mx-0  h-12 rounded-xl'>
                              <input
                                   type='email'
                                   name=''
                                   className='absolute left-0 w-full h-full outline-none pl-6 rounded-xl shadow-inner'
                                   id=''
                                   placeholder='Enter Your Email Address'
                              />

                              <button
                                   type='submit'
                                   className='absolute -right-1  md:-right-2 bg-red-400 w-32 h-full capitalize text-white rounded-xl'>
                                   get started
                              </button>
                         </form>
                    </div>

                    <div className='space h-6 md:hidden'></div>

                    <div className='image-wrapper'>
                         <img src={email} alt='' className='' />
                    </div>
               </div>
               {/*  email */}
          </Section>
     );
};

export default HomeComponent;
