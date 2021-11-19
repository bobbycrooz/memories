import React from "react";
import styled from "styled-components";

import yes from "../asset/yes.png";
import lap from "../asset/lap.png";
import share from "../asset/share.png";

import Carousel from '../components/Carousel'



const Temp = () => {
    const [showRelatedCourse, setShowRelatedCourse] = React.useState(true);
    const [showCourseList, setShowCourseList] = React.useState(true);
    

    const [user, setUser] = React.useState();
    return (
        <Section className='w-full '>
            <div className='amaizing  md:px-20 '>
                <div className='notice space-y-6  p-4'>
                    <div className='flex items-center'>
                        <img src={yes} alt='' />
                        <h1 className='txt_head ml-4'>Amazing choice, Bobby developer!</h1>
                    </div>

                    <button className='btn notice_btn flex space-x-3 items-center text-white'>
                        <img src={share} alt='' />
                        <h1>Share this course</h1>
                    </button>
                </div>

                {/* */}

                <div className='started mt-11  px-1'>
                    <h1 className='txt_head capitalize'>Let’s get started</h1>

                    <div className='course_content  w-full h-52 flex p-2 md:p-6 mt-6 shadow-md rounded-lg'>
                        <div className='media rounded-lg w-48 h-full '>
                            <img src={lap} alt='' className='rounded-lg h-full w-full' />
                        </div>

                        <div className='info h-full w-full ml-3 md:ml-6 '>
                            <h1 className='c_name font-medium text-2xl  text-black'>React Js</h1>
                            <p className='c_author capitalize'>by: Henrry Arthur</p>
                            <p className='c_count capitalize mt-6 md:mt-2 text-lg font-medium'>Your progress</p>
                            <div className='bg-gray-200 w-full h-2'>
                                <div className='h-full w-1/2 bg-black'></div>
                            </div>
                            <button className='btn text-white mt-3 '>start course</button>
                        </div>
                    </div>
                </div>
                {/* */}
                {/* */}
            </div>

            <div className='relative related_course text-txt-1 w-full h-auto my-14 md:px-20  px-4 md:py-6 '>
                <h1 className='related_courses text-4xl font-medium my-6'>Related Courses</h1>
                <div className='carousel -ml-6 md:ml-0 w-72 md:w-full mx-auto space-y-8  py-4'>
                    <Carousel />
                </div>
            </div>
        </Section>
    );
};

const Section = styled.div`
    .amaizing {
        .info {
            font-size: 16px;
            .c_name {
                font-size: 24px;
            }
            .c_author {
                font-size: 14px;
                color: #12121276;
            }
        }
        .notice {
            background-color: #e4f4e5;
        }

        .notice_btn {
            font-weight: 500;
            background: #0c6437;
        }

        .btn {
            font-size: 15px;

            font-weight: 500;
        }
    }
    .related_course {
        background-color: #fbfbfb;
    }
`;


export default Temp;
