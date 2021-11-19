import React from "react";
import { Section, CourseCard } from "./styles";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

import lap from "../../asset/lap.png";

const Course = ({ setShowCourseList }) => {
    const { push } = useHistory();

    function handleCardClick(params) {
        // set current course state to selected course
        setShowCourseList((p) => !p);
    }

    return (
         <>
              <div className=' '>
                   <div className='title_info flex items-center justify-between capitalize w-full'>
                        <h1 className='text-xl md:text-3xl '>Explore new skills </h1>
                        <NavLink to='/learning'>
                             {" "}
                             <p className='explore underline font-semibold  text-sec-1'>my learning</p>
                        </NavLink>
                   </div>

                   <div className='course_list-wrapper px-14'>
                        <div className=' current_courses h-full my-12 grid gap-y-6 md:gap-y-11 gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                             {[1, 1, 1, 1, 1, 1, ].map((item) => (
                                  <CourseCard
                                       onClick={() => handleCardClick(item)}
                                       className='rounded-lg bg-white shadow-lg relative'>
                                       <div className='couse_media w-full h-4% relative bg-gray-500 rounded-t-lg'>
                                            <img src={lap} alt='' className='absolute rounded-t-lg w-full h-full' />
                                       </div>
                                       <div className='  w-full p-2 md:p-3  rounded-b-lg h-3/5 flex flex-col justify-between'>
                                            <div className='course_info '>
                                                 <div className='name_price flex justify-between'>
                                                      <h1 className='name'>React</h1>
                                                      <div className='price  rounded-lg bg-pri-1 px-2'>$100</div>
                                                 </div>
                                                 <p className='info text-sm w-full mt-1 pr-8 '>
                                                      Amet minim mollit non deserunt ullamco
                                                 </p>
                                            </div>

                                            <div className='couse_count  capitalize '>1 course</div>
                                       </div>
                                  </CourseCard>
                             ))}
                        </div>
                   </div>
              </div>
         </>
    );
};

export default Course;
