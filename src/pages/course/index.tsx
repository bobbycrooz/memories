import React from "react";
import { Section } from "./styles";
import CoursePreview from "./CoursePreview";
import CourseList from "./course";
// import ilus from "../../asset/home1.png";
import img1 from "../../asset/img1.png";
import img2 from "../../asset/img2.png";
import img3 from "../../asset/img3.png";
import img4 from "../../asset/img4.png";
import img5 from "../../asset/img5.png";
// import grad from "../../asset/grad.png";
import pep from "../../asset/people.png";
import pep2 from "../../asset/pep2.png";
// import email from "../../asset/email.png";
// import cong from "../../asset/cong.png";
// import { CgArrowLongRight } from "react-icons/cg";
import Carousel, { CarouselTwo } from "../../components/Carousel";
// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Temp = () => {
    const [showRelatedCourse, setShowRelatedCourse] = React.useState(true);
    const [showCourseList, setShowCourseList] = React.useState(true);

    const [user, setUser] = React.useState();
    return (
         <Section>
              <div className='course_lobby w-full py-16 px-6 md:px-20'>
                   {showCourseList ? (
                        <CourseList setShowCourseList={setShowCourseList} />
                   ) : (
                        <CoursePreview
                             setShowCourseList={setShowCourseList}
                             setShowRelatedCourse={setShowRelatedCourse}
                        />
                   )}
              </div>

              {/* realated course */}
              {!showRelatedCourse ? (
                   <div className='relative related_course text-txt-1 w-full h-auto my-14 md:px-20  px-4 py-6 join_container'>
                        <h1 className='related_courses text-4xl font-medium my-6'>Related Courses</h1>
                        <div className='carousel -ml-6 md:ml-0 w-72 md:w-full mx-auto space-y-8  py-4'>
                             <Carousel />
                        </div>
                   </div>
              ) : (
                   <div className='relative join_container text-txt-1 w-full h-auto md:h-6vh my-20 px-14 py-9 md:py-0 flex md:flex-row flex-col items-center justify-between'>
                        <img src={user ? pep : pep2} alt='' className='w-full md:w-1/2 md:absolute' />
                        <div className='space  h-14 md:h-0 md:w-2/3'></div>
                        <div className='w-full text-center md:text-left md:w-1/2 md:h-48 space-y-4 flex flex-col justify-between '>
                             <h1 className='join_title text-3xl font-semibold capitalize'>join our amaizing webinar</h1>
                             <p className='join_text w-full md:w-3/4 '>
                                  Be part of our weekly webinars where amazing lecturers and practitioners take you
                                  through topics and courses that would blow your mind.
                             </p>
                             <button className='btn w-28 text-white mx-auto md:mx-0 '>join now</button>
                        </div>
                   </div>
              )}
              {/* realated course */}
         </Section>
    );
};

export default Temp;
