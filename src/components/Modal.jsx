import React from "react";
import cert from "../asset/cert.png";
import lock from "../asset/lock.png";
import vid from "../asset/vid.png";
import lap from "../asset/lap.png";

import AuthComponent from "../pages/Auth";
import styled from "styled-components";
import { Portal } from "react-portal";
import { GrFormClose } from "react-icons/gr";

import { SHOW_MODAL } from "../redux/modalSlice";
import { useSelector, useDispatch } from "react-redux";

const Modal = ({ setIsOpen }) => {
    const modalRef = React.useRef();
    const dispatch = useDispatch();

    function outSideClick() {
        if (modalRef.current === event.target) {
            dispatch(SHOW_MODAL(false));
        }
    }

    function closeModal() {
        dispatch(SHOW_MODAL(false));
    }

                    // <CourseSum closeModal={closeModal} />;

    return (
        <Portal>
            <Layer onClick={outSideClick} ref={modalRef} className="">
                <Cardcontainer className='rounded-lg'>
                  <AuthComponent closeModal={closeModal} /> 
                </Cardcontainer>
            </Layer>
        </Portal>
    );
};
{/* <CourseSum closeModal={closeModal} />; */}

const CourseSum = React.forwardRef((props, ref) => {
    return (
        <div className='w-full p-5 ' ref={ref}>
            <div className='cancle_btn flex justify-between  mb-4'>
                <span className='space w-6'></span>
                <div className='icon '>
                    <GrFormClose onClick={props.closeModal} className='text-3xl text-txt-1' />
                </div>
            </div>

            <div className='course_content  w-full h-32 flex'>
                <div className='media rounded-lg w-40 h-full '>
                    <img src={lap} alt='' className='rounded-lg h-full w-full' />
                </div>

                <div className='info h-full w-full md:w-40 md:ml-6 ml-2 space-y-2 '>
                    <h1 className='c_name font-semibold text-2xl  text-black'>React native</h1>
                    <p className='c_author capitalize'>by: Henrry Arthur</p>
                    <p className='c_count capitalize'>Course 12 videos</p>
                </div>
                <div className='price  flex justify-between w-1/2'>
                    <space className='w-8'></space>
                    <h1 className='c_name font-semibold text-xl  text-txt-1'>$100</h1>
                </div>
            </div>

            <div className='border w-full mt-8 my-3'></div>

            <div className='course_content  w-full h-46 '>
                <h1 className='c_name font-semibold text-xl md:text-2xl   text-txt-1'>Included with your purchase</h1>

                <div className='item flex my-1 mt-3  items-center'>
                    <img src={vid} alt='' />

                    <p className='count ml-5 mb-1 md:text-xl text text-black'>12 Videos</p>
                </div>
                <div className='item flex my-1 items-center'>
                    <img src={lock} alt='' />

                    <p className='count ml-5 mb-1 md:text-xl text text-black'>Lifetime access to all course in certificate</p>
                </div>
                <div className='item flex my-1 items-center'>
                    <img src={cert} alt='' />

                    <p className='count ml-5 mb-1 md:text-xl text text-black'>Certificate of completion</p>
                </div>
            </div>
            <div>
                {" "}
                <button className='btn text-white my-4'>proceed</button>
            </div>
        </div>
    );
});

const Layer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #0009;
     z-index: 898899;
;
    
`;

const Cardcontainer = styled.div`
    position: absolute;

    width: 600px;
    height: auto;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 420px) {
        width: 90%;
    }
`;

export default Modal;
