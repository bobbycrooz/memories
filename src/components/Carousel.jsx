import React from "react";
import lap from "../asset/lap.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styled from "styled-components";

const Carousel = () => {
    function handleCarouselCardClick(params) {}

    return (
         <React.Fragment>
              <OwlCarousel
                   items={4}
                   margin={30}
                   autoplay
                   autoplayTimeout={3000}
                   responsive={{
                        0: {
                             items: 1,
                        },
                        400: {
                             items: 1,
                             margin: 3,
                        },
                        600: {
                             items: 2,
                             margin: 3,
                        },
                        700: {
                             items: 3,
                        },
                        800: {
                             items: 3,
                        },
                        1000: {
                             items: 3,
                        },
                        1200: {
                             items: 4,
                             margin: 22,
                        },
                   }}
                   loop
                   stageClass='mb-40 h-40'
                   stageOuterClass='outer-stage overflow-x-hidden  w-96 md:w-full '
                   dotsClass='dot-container h-2'
                   className='owl-theme p-4  h-full '>
                   {[1, 1, 1, 1, 1, 1, 1].map((item) => (
                        <CourseCard
                             onClick={() => handleCarouselCardClick(item)}
                             className='rounded-lg bg-white shadow-lg'>
                             <div className='couse_media w-full h-32 relative bg-gray-500 rounded-t-lg'>
                                  <img src={lap} alt='' className='absolute rounded-t-lg w-full h-full' />
                             </div>
                             <div className='typo flex flex-col justify-between  h-full w-full p-4 rounded-b-lg'>
                                  <div className='course_info'>
                                       <div className='name_price flex justify-between'>
                                            <h1 className='name'>React</h1>
                                            <div className='price  rounded-lg bg-pri-1 px-2'>$100</div>
                                       </div>
                                       <p className='info text-sm w-3/5'>Amet minim mollit non deserunt ullamco</p>
                                  </div>
                                  <div className='couse_count mt-12 capitalize '>1 course</div>
                             </div>
                        </CourseCard>
                   ))}
              </OwlCarousel>
         </React.Fragment>
    );
};

export function CarouselTwo() {
    function handleCard2Click(params) {}
    return (
        <React.Fragment>
            <OwlCarousel
                items={3}
                margin={120}
                autoplay
                responsive={{
                    0: {
                        items: 1,
                    },
                    400: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                        margin: 80,
                    },
                    700: {
                        items: 2,
                    },
                    800: {
                        margin: 50,
                        items: 2,
                    },
                    1000: {
                        margin: 50,
                        items: 2,
                    },
                    1200: {
                        items: 3,
                        margin: 170,
                    },

                    1400: {
                        items: 4,
                        margin: 360,
                    },
                }}
                autoplayTimeout={3000}
                stageOuterClass='outer-stage overflow-hidden w-96 md:w-full '
                dots={false}
                // stageClass='border border-red-400 w-full bg-red-400'
                className='owl-theme p-4  h-full '>
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
                    <CourseCardTwo onClick={() => handleCard2Click(item)} className='rounded-lg bg-white shadow flex overflow-hidden'>
                        <div className='couse_media w-2/3 h-full  relative bg-gray-500 rounded-l-lg'>
                            <img src={lap} alt='' className='absolute rounded-t-lg w-full h-full' />
                        </div>

                        <div className='typo flex flex-col justify-between  h-full w-full p-3  md:p-4 rounded-b-lg'>
                            <p className='name text-lg text-txt-3 font-normal'>Sofftware development</p>

                            <h1 className=' desc text-xl font-src font-medium text-black mt-1'>
                                Introduction to Software Development
                            </h1>

                            <div className='couse_count mt-8 capitalize '>lecture 12m</div>
                        </div>
                    </CourseCardTwo>
                ))}
            </OwlCarousel>
        </React.Fragment>
    );
}

const CourseCard = styled.div`
     /* width: 250px; */
     width: 100%;

     &:hover {
          transition: all 0.2s ease-in;
          transform: scale(1.03);
     }

     .outer-stage {
          border: 1px solid red;
     }
`;

const CourseCardTwo = styled.div`
    width: 409px;
    height: 174px;
    &:hover {
        transition: all 0.2s ease-in;
        transform: scale(1.03);
    }

    .couse_count {
        font-size: 14px;
        color: #646464;
    }

    @media screen and (max-width: 420px) {
        width: 380px;
        /* height: auto; */
    }
`;

export default Carousel;
