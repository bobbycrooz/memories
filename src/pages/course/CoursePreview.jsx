import React from "react";
import { Section, CourseCard, CoursePreview, ContDiv } from "./styles";
import bob from "../../asset/bob.png";
import prev from "../../asset/Group 4014 (1).png";
import man from "../../asset/Rectangle 308.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Accordion from "../../components/Accordion";
import { Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useToast, Button } from "@chakra-ui/react";

const Course = ({ setShowRelatedCourse, setShowCourseList }) => {
    const { push } = useHistory();
    const [showContent, setShowContent] = React.useState(true);

    function toggleCourse() {
        let courseEle = document.getElementById("courseEle");
        courseEle.classList.toggle("active");
        setShowContent((prev) => !prev);
        setShowRelatedCourse((prev) => !prev);
    }

    function handleBuycourse(params) {
        push("/Purchase");
    }
    return (
        <div className='course_preview  w-full py-4 '>
            <CoursePreview id='courseEle' className=' bg-white  flex'>
                <div className='course_media w-2/3 h-full shadow-xl  rounded-xl'>
                    <div className='video_elem  w-full bg-gray-400 rounded-xl'>
                        <img src={man} alt='' className='absolute rounded-xl w-full h-full' />
                        <img
                            src={prev}
                            alt=''
                            onClick={() => setShowCourseList((prev) => !prev)}
                            className='prev cursor-pointer'
                        />
                    </div>
                    <div className='video_details px-8 py-4 space-y-6'>
                        <h1 className='course_name font-medium text-xl'>React Native</h1>
                        {true ? (
                            <button onClick={handleBuycourse} className='btn text-white'>
                                buy this course{" "}
                            </button>
                        ) : (
                            <button className='btn text-white'>Start now</button>
                        )}
                    </div>
                </div>
                <div className='accordion rounded-xl hidden md:block'>
                    {showContent && (
                        <>
                            <Box className='content_header' p={4}>
                                <h1 className='text-3xl font-semibold capitalize'>content</h1>
                            </Box>
                            <ContDiv>
                                <Accordion />
                            </ContDiv>
                        </>
                    )}
                </div>
                <div className='menu h-full w-20 bg-gray-400 rounded-xl hidden md:block'>
                    <GiHamburgerMenu className='w-14  h-8 mx-auto mt-4 cursor-pointer' onClick={toggleCourse} />
                </div>
            </CoursePreview>

            <div className='about my-14 md:w-2/3 '>
                <h1 className='text-3xl font-semibold'>About this course</h1>
                <p className='text_info text-xl mt-6'>
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                    exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat
                    irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip
                    deserunt reprehenderit elit laborum.
                    <br />
                    <br />
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                    exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                </p>
             
            </div>

            <div className='about my-11 md:w-2/3 '>
                <h1 className='text-3xl font-semibold'>Instructor</h1>
                <div className=' flex  my-3  items-center'>
                    <div className='avatar-wrapper rounded-full w-11 h-11 bg-gray-300'>
                        <img src={bob} alt='' className='rounded-full w-full h-full' />
                    </div>

                    <h1 className='instructor_name ml-4 text-xl font-semibold'>Bobby dev</h1>
                </div>
                <p className='text_info text-xl mt-6'>
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                    exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat
                    irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip
                    deserunt reprehenderit elit laborum.
                </p>
            </div>
        </div>
    );
};



function ToastExample() {
    const toast = useToast();
    return (
        <Button
            onClick={() =>
                toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                })
            }>
            Show Toast
        </Button>
    );
}

export default Course;
