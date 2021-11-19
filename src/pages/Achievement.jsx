import React from "react";
import styled from "styled-components";

import cham from "../asset/cham.png";
import track from "../asset/track.png";
import ach from "../asset/ach.png";
import { FaRegUser } from "react-icons/fa";

import Carousel from "../components/Carousel";

const Temp = () => {
    const [showRelatedCourse, setShowRelatedCourse] = React.useState(true);
    const [showCourseList, setShowCourseList] = React.useState(true);

    const [user, setUser] = React.useState();
    return (
        <Section className='w-full h-screen mb-28 px-4 md:px-28'>
            <div className='archieve_bg  border-pri-1 w-full relative '>
                <img src={cham} alt='' className='w-full h-full' />
                <div className='absolute overlay top-0 w-full left-0 bottom-0 '></div>

                <div className='user absolute  w-full text-center'>
                    <div className='circle rounded-full flex items-center justify-center md:w-40 md:h-40 w-16 h-16 bg-gray-300 mx-auto'>
                        <FaRegUser className='text-3xl md:text-6xl text-black' />
                    </div>

                    <h1 className='name_bold text-white text-3xl md:text-6xl font-semibold mt-3'>idris ifeoluwa</h1>
                </div>

                <div className='card text-left absolute bottom-0 shadow-md md:p-6 p-2'>
                    <div className='h-1/2 w-full flex flex-col md:flex-row items-center'>
                        <div className='w-1/2 hidden'>
                            <h1 className='font-bold text-txt-4 text-xl  md:text-2xl'>Currently learning</h1>
                        </div>
                        <div className='w-1/2 '>
                            <h1 className='font-bold text-txt-4 text-lg  md:text-2xl'>Achievements</h1>
                        </div>
                    </div>
                    <hr />

                    <div className='h-1/2 w-full flex flex-col md:flex-row items-center'>
                        <div className='w-full my-3 md:my-0  md:w-1/2 flex items-center  '>
                            <img src={track} alt='' className='w-11 ' />
                            <div className='track ml-3'>
                                <h1 className='font-semibold capitalize'>Software development</h1>
                                <p className='start_date'>Started May 14</p>
                            </div>
                        </div>
                        <div className='w-full my-3 md:my-0  md:w-1/2 flex items-center'>
                            <img src={ach} alt='' className='w-11 ' />
                            <div className='track ml-3'>
                                <h1 className='font-semibold capitalize'>React Js</h1>
                                <p className='start_date'>Achieved May 24</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-60 w-full '></div>
        </Section>
    );
};

const Section = styled.div`
    .archieve_bg {
        height: 500px;
        background: red;

        .overlay {
            background-color: #0008;
        }
        .user {
            top: 45%;
            left: 50%;
            transform: translate(-50%, -65%);
        }

        .card {
            background-color: #fff;
            width: 90%;
            height: 220px;
            bottom: -22%;
            left: 50%;
            transform: translateX(-50%);
        }

        .start_date {
            font-size: 15px;
            color: #646464;
            font-weight: 500;
        }
    }
    .related_course {
        background-color: #fbfbfb;
    }

    @media screen and (max-width: 640px) {
    }

    @media screen and (max-width: 420px) {
        .archieve_bg {
            height: 380px;

            .card {
                height: auto;
            }
        }
    }

    @media screen and (max-width: 320px) {
    }
`;

export default Temp;
