import React from 'react'
import styled from "styled-components";

import tel from '../asset/overjoyed-black-woman-holds-textbook-pencil-exclaims-with-amazement-look 1.png'

import rec from "../asset/Rectangle 292.png";
import recInv from "../asset/Rectangle 312.png";
import pep3 from "../asset/Group 4020.png";
import bob from "../asset/bob.png";

const AboutUs = () => {
    return (
        <Main>
            <section className='hero bg-pri-1 relative flex justify-center px-4 items-center'>
                <h1 className='text-3xl md:text-6xl font-semibold text-white capitalize absolute w-6% md:w-4% left-4 md:left-16'>
                    Taking E-Learning to a new level
                </h1>
                <div className='space w-2/3'></div>

                <div className='img_wrpper -mr-14 md:mr-0'>
                    <img src={tel} alt='' className='w-full h-full ' />
                </div>
            </section>

            <section id='about' className='about py-11 px-8 h-auto md:h-7vh flex items-center justify-center'>
                <div className='info h-auto md:h-52 w-full md:w-2/3  space-y-8 text-center'>
                    <h1 className='about_title capitalize font-semibold text-3xl'>about us </h1>
                    <p className='text text-xl'>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis
                        deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt
                        sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis
                        id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit
                        aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
                    </p>
                </div>
            </section>

            <section id='about' className='about relative  px-2 md:h-screen flex flex-col md:flex-row items-center justify-center my-11'>
                <img src={rec} alt='' className='absolute h-screen w-full' />
                <div className=' img_wrapper  '>
                    <img src={pep3} alt='' className='w-full h-full' />
                </div>
                <span className='w-28 h-28' ></span>
                <div className=''>
                    <div className='red_card rounded-lg p-6 space-y-6'>
                        <h1 className='mission font-semibold text-2xl capitalize'>our mission</h1>
                        <p className='info_mission leading-8'>
                            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis
                            deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt
                            sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea
                            quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor
                            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id
                            deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute
                            id deserunt nisi.
                        </p>
                    </div>
                </div>
            </section>

            <section
                id='about'
                className='about relative h-auto  md:h-screen flex flex-col px-14 py-8 justify-center my-48 '>
                <img src={recInv} alt='' className='absolute top-0 left-0 w-full' />
                <div className='w-full text-center mb-11'>
                    {" "}
                    <h1 className='about_title capitalize font-semibold text-3xl'>about us </h1>
                </div>
                <div className='grid gap-8 w-full grid-cols-1 md:grid-cols-4'>
                    {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
                        <div className='team_card rounded-lg relative border-t-2 border-pri-1 bg-white flex flex-col justify-center h-48'>
                            <div className='absolute imgs -top-8 avatar-wrapper rounded-full w-16 h-16 bg-gray-300'>
                                <img src={bob} alt='' className='rounded-full w-full h-full' />
                            </div>

                            <div className='space h-12'></div>
                            <div className='details   text-center'>
                                <h1 className='name font-semibold text-2xl capitalize'>bobby Crozz</h1>
                                <h1 className='track  text-txt-3 text-2xl capitalize'>Developer</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    );
};


export const Main = styled.main`
    .avatar-wrapper{
    left:37%;
    
    
    } .img_wrapper {
        height: 85%;
        /* width:40%; */
    }
    .red_card {
        width: 420px;
        height: 529px;
        background-color: #ff4100;
        color: white;

        p {
            font-size: 20px;
        }
    }

    .team_card{
        .imgs{

            left:50%;
            transform: translate(-50%);
        }

    }
`;

export default AboutUs
