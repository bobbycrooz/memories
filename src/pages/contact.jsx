import React from "react";
import styled from "styled-components";
import tel from "../asset/debby-hudson-tqdyMlJk7Wk-unsplash 1.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ContactUs = () => {
    return (
        <Main>
            <section className='hero bg-pri-1 relative flex justify-center px-4 items-center'>
                <h1 className=' text-3xl md:text-6xl font-semibold text-white capitalize absolute w-60 md:w-80 left-6 md:left-16'>
                    How may we help you?
                </h1>
                <div className='space w-8% md:w-2/3'></div>
                <div className='img_wrpper'>
                    <img src={tel} alt='' className='w-full h-full' />
                </div>
            </section>

            <section className='accordion py-12 px-2 md:px-32'>
                <div className='faq'>
                    <h1 className='faq_text font-semibold text-2xl'>Frequently asked questions</h1>
                </div>

                <div className='accord_container space-y-8 mt-6'>
                    {[1, 1, 1, 1, 1].map((item, index) => (
                        <Accordion id={`fjkn-${index}`} />
                    ))}
                </div>

                {/* */}
                {/* */}
                <div className='signup h-full  mt-20 '>
                    <h1 className='font-semibold text-3xl capitalize'>still have a question</h1>

                    {/*  */}
                    <form action='' className='w-full md:w-1/2 mt-11 px-4 md:px-0'>
                        <div className='grid gap-6 md:grid-cols-2 grid-cols-1 w-full'>
                            {/*  */}
                            <div className='input_container h-20  flex flex-col justify-between'>
                                <label htmlFor='fname ' className='text-xl'>
                                    First Name
                                </label>
                                <input
                                    type='text'
                                    name='fname'
                                    id=''
                                    placeholder='Enter your fisrt name'
                                    className='outline-none  shadow-inner rounded-lg h-11 px-4'
                                />
                            </div>

                            <div className='input_container h-20  flex flex-col justify-between'>
                                <label htmlFor='fname ' className='text-xl'>
                                    Last Name
                                </label>
                                <input
                                    type='text'
                                    name='lname'
                                    id=''
                                    placeholder='Enter your last name'
                                    className='outline-none  shadow-inner rounded-lg h-11 px-4'
                                />
                            </div>

                            <div className='input_container h-20  flex flex-col justify-between'>
                                <label htmlFor='fname ' className='text-xl'>
                                    Email
                                </label>
                                <input
                                    type='text'
                                    name='email'
                                    id=''
                                    placeholder='Enter your fisrt name'
                                    className='outline-none  shadow-inner rounded-lg h-11 px-4'
                                />
                            </div>

                            <div className='input_container h-20  flex flex-col justify-between'>
                                <label htmlFor='fname ' className='text-xl'>
                                    Phone
                                </label>
                                <input
                                    type='text'
                                    name='fname'
                                    id=''
                                    placeholder=''
                                    className='outline-none  shadow-inner rounded-lg h-11 px-4'
                                />
                            </div>
                        </div>
                        <div className='input_container h-60 w-full  flex flex-col justify-center mt-6'>
                            <label htmlFor='fname ' className='text-xl'>
                                message
                            </label>
                            <textarea
                                className='outline-none  shadow-inner rounded-lg h- px-4 mt-4 pt-6'
                                name=''
                                id=''
                                placeholder='Enter your message'
                                cols='30'
                                rows='10'></textarea>
                        </div>

                        <button
                            type='submit'
                            className='p-2 px-4 bg-sec-1 capitalize text-lg rounded-lg font-semibold text-white mt-6'>
                            submit
                        </button>
                    </form>
                </div>
                {/* */}
                {/* */}
            </section>
        </Main>
    );
};

function Accordion({ id }) {
    // accordion function
    function handleAccord(i_D) {
        const accdElem = document.getElementById(i_D);
        accdElem.classList.toggle("active");
    }
    return (
        <Accord id={id} key={id} className='w-full rounded-xl shadow border px-8 flex flex-col items-center'>
            <div onClick={() => handleAccord(id)} className='data_triger flex justify-between items-center w-full mt-4'>
                <h1 className=' md:text-xl capitalize font-semibold'>
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui{" "}
                </h1>
                <AiOutlinePlus className='plus' />
                <AiOutlineMinus className='minus' />
            </div>

            <div className='accordion_sum py-6'>
                <p className='text-txt-3'>
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
                    mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
                    voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
                    qui esse pariatur duis deserunt
                </p>
            </div>
        </Accord>
    );
}

export const Main = styled.main`
    height: 100%;
    .accordion {
        background-color: #fcfcfc;
        height: 100%;
    }

    form {
        .input_container {
        }

        input, textarea {
            box-shadow: 0px 0px 5px 0 #0004 inset;
        }
    }
`;

export const Accord = styled.main`
    height: 80px;
    transition: all 0.2s linear;

    &.active {
        height: 180px;
        @media screen and (max-width: 420px) {
            height: auto;
        }

        .accordion_sum {
            height: 100%;

            p {
                opacity: 1;
                visibility: visible;
            }
        }
        .data_triger {
            .plus {
                display: none;
            }
            .minus {
                display: block;
            }
        }
    }

    .data_triger {
        .plus {
        }
        .minus {
            display: none;
        }
    }
    .accordion_sum {
        height: 0;

        p {
            visibility: hidden;
            opacity: 0;
        }
    }
`;

export default ContactUs;
