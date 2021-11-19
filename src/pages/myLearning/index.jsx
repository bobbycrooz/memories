import React from "react";
import { Section, CourseCard, Bar } from "./styles";
import img1 from "../../asset/img1.png";
import img2 from "../../asset/img2.png";
import img3 from "../../asset/img3.png";
import img4 from "../../asset/img4.png";
import img5 from "../../asset/img5.png";
import lap from "../../asset/lap.png";
import pep from "../../asset/people.png";
import pep2 from "../../asset/pep2.png";

import { useHistory } from "react-router-dom";

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

const Learning = () => {
    const [user, setUser] = React.useState(true);
    const { push } = useHistory();
    return (
        <Section>
            <div className='black_banner p-4 md:px-14 flex items-center'>
                <h1 className='font-bold text-4xl text-white capitalize'>my learning</h1>
            </div>
            <div className='bg-red-400 current_lerning w-full p-4 py-11 md:px-1 grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 md:gap-8 gap-3 gap-y-3 md:gap-y-8 h-auto'>
                {[1, 1, 1, 1,1,1,1,1,1,1,1].map((item) => (
                    <LearningCard dataItem={item} />
                ))}
            </div>

            {/* people */}
            <div className='relative join_container text-txt-1 w-full  h-auto md:h-6vh my-20 p-4 md:px-1 flex flex-col md:flex-row items-center justify-between '>
                <img src={user ? pep : pep2} alt='' className='w-full md:w-1/2 md:absolute' />
                <div className='space h-20 md:w-2/3'></div>
                <div className='w-full space-y-3  md:w-1/2 h-full md:h-48  flex flex-col justify-between md:text-left text-center'>
                    <h1 className='join_title text-3xl font-semibold capitalize'>join our amaizing webinar</h1>
                    <p className='join_text w-full md:w-3/4'>
                        Be part of our weekly webinars where amazing lecturers and practitioners take you through topics
                        and courses that would blow your mind.
                    </p>
                    <button className='btn w-28 text-white mx-auto md:mx-0'>join now</button>
                </div>
            </div>
            {/* people */}
        </Section>
    );
};

function LearningCard({ dataItem }) {
    const { push } = useHistory();

    function handleLearnCardClick(params) {
        // goto corse page and set current course to the current course item
        push("/Course");
    }

    return (
        <>
            <CourseCard
                onClick={() => handleLearnCardClick(dataItem)}
                className='rounded-lg bg-white shadow-lg relative cursor-pointer'>
                <div className='couse_media w-full h-4% relative bg-gray-500 rounded-t-lg'>
                    <img src={lap} alt='' className='absolute rounded-t-lg w-full h-full' />
                </div>
                <div className='  w-full p-2 md:p-4  rounded-b-lg h-3/5 flex flex-col justify-between'>
                    <div className='course_info '>
                        <div className='name_price flex justify-between'>
                            <h1 className='name font-semibold'>React</h1>
                        </div>
                        <p className='info text-sm w-4/5'>Amet minim mollit non deserunt ullamco</p>
                    </div>

                    <div className='mb-2'>
                        <Bar w='65%' className='couse_count capitalize relative w-full'>
                            <div className='h-full progress absolute left-0'></div>
                        </Bar>
                        <p className=' mt-1 text-sm capitalize'>{true ? "65% Complete" : "start course"}</p>
                    </div>
                </div>
            </CourseCard>
        </>
    );
}

export default Learning;
