import React from "react";
import { Main, Memcard } from "./style";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Hero from '../../components/home_hero'
import Header from "../../components/header";
// import membg from "../../asset/mem1.jpg";

const index = () => {
     const [showDetails, setShowDetails] = React.useState(true);

     function detailsHandler() {
          setShowDetails((p) => !p);
          console.log("i clickked");
          window.scrollTo(0,10)
     }

     return (
          <Main className='dashboard bg-gray-200 pt-20 text-gray-700'>
               <Header />
               <div className='layout w-full h-auto  flex'>
                    {/* */}
                    {/* side pane */}
                    <div className='border  side-pane flex justify-end p-2'>
                         <div className='border 0  w-2/3 h-full'>
                              <div className='card w-full shadow-md bg-gray-50 p-2 rounded-lg mt-2'>
                                   <div className='flex items-center border-b justify-between py-2' >
                                        <h1 className='not-medium capitalize'>notificaions</h1>
                                        <span className=''>x</span>
                                   </div>

                                   <div className='body p-1 mt-2'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est odio corrupti
                                        perferendis aut perspiciatis illo quisquam dignissimos tempora
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* main app */}

                    <div className='  main-app p-2 py-4'>
                         <div className='w-full h-full bg-gray-50  rounded-t-md shadow-sm p-2'>
                              {/* memories details*/}

                              {showDetails && (
                                   <section id='details' className='details w-full p-2 py-5'>
                                        <div className='most-rencent py-5 p-2 capitalize w-full border-b font-semibold text-2xl font-lato flex justify-between'>
                                             <h1 className='recent-title'>Memory by bobbyDev</h1>

                                             <button onClick={detailsHandler} className='close text-lg font-semibold'>
                                                  close
                                             </button>
                                        </div>

                                        <div className='img-gallery border w-full  h-80 bg-gray-400'>
                                             <img src='' alt='img gallery' />
                                        </div>

                                        <div className='action-coontainer  border flex justify-between'>
                                             <div className='date border p-2'>date</div>
                                             <div className='action border p-2'>action icon goes in here..</div>
                                        </div>

                                        <section id='descripton' className='discription w-full py-2 p-1 bordered'>
                                             <div className='most-rencent p-2 capitalize w-full border-b font-semibold text-xl font-lato'>
                                                  <h1 className='descriprition-title'>On this faithful day..</h1>
                                             </div>

                                             <p className='details w-2/3 py-6 p-2 text-lg'>
                                                  {" "}
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quae
                                                  deserunt, ea dolor laborum earum quisquam. Ad mollitia tenetur quidem
                                                  cupiditate aperiam quisquam autem deserunt exercitationem enim? Eius,
                                                  eligendi tempora?
                                                  <br />
                                                  <br />
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio animi
                                                  deleniti dicta perspiciatis atque, expedita recusandae eveniet magnam
                                                  facere ipsam quo velit aperiam molestias iure. Suscipit nostrum soluta
                                                  facilis veritatis.
                                                  <br />
                                                  <br />
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio animi
                                                  deleniti dicta perspiciatis atque, expedita recusandae eveniet magnam
                                                  facere ipsam quo velit aperiam molestias iure. Suscipit nostrum soluta
                                                  facilis veritatis.
                                                  <br />
                                                  <br />
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio animi
                                                  deleniti dicta perspiciatis atque, expedita recusandae eveniet magnam
                                                  facere ipsam quo velit aperiam molestias iure. Suscipit nostrum soluta
                                                  facilis veritatis.
                                             </p>

                                             <div className='sign-name font-2xl font-pac text-indigo-700'>bobby</div>
                                        </section>
                                   </section>
                              )}

                              {/* your post from */}
                              <section className='trending p-3'>
                                   {/* */}
                                   <div className='most-rencent py-5 p-2 capitalize w-full border-b font-semibold text-2xl font-lato'>
                                        <h1 className='recent-title'>Your memories</h1>
                                   </div>
                                   <div className='mt-6 container w-full'>
                                        <SimpleSlider click={detailsHandler} />
                                   </div>
                              </section>

                              {/* recenet posts */}
                              <section className='trending p-3'>
                                   {/* */}
                                   <div className='most-rencent py-5 p-2 capitalize w-full border-b font-semibold text-2xl font-lato'>
                                        <h1 className='recent-title'>most recent memories for you</h1>
                                   </div>
                                   <div className='mt-6 container w-full'>
                                        <div className='grid grid-cols-3 gap-y-20 gap-6 px-4'>
                                             {Array(6)
                                                  .fill(1)
                                                  .map((item, index) => (
                                                       <Memcard className='memories-card w-full  rounded-t-md shadow-md'>
                                                            <div className='img-container w-full relative'></div>

                                                            <div className='card-content w-full p-3'>
                                                                 <div className='date-name w-full py-5  flex relative text-sm'>
                                                                      <h1 className='date uppercase text-gray-500 font-semibold'>
                                                                           feb 19, 2020 |
                                                                      </h1>
                                                                      <p className='name uppercase ml-1'>
                                                                           by
                                                                           <span className='style-name ml-1'>
                                                                                bobbyDev
                                                                           </span>
                                                                      </p>

                                                                      {/* */}
                                                                 </div>

                                                                 {/* */}
                                                                 <div className='body      w-full mt-2 py-5  space-y-5   flex flex-col justify-between'>
                                                                      <h1 className='title text-3xl font-joe capitalize '>
                                                                           First vacation to atlanta. you see
                                                                      </h1>
                                                                      <span className='h-1'></span>

                                                                      <button
                                                                           onClick={detailsHandler}
                                                                           className='read-more capitalize  text-sm 
                                                                      border py-1 px-3 w-16'>
                                                                           view
                                                                      </button>
                                                                 </div>
                                                            </div>
                                                       </Memcard>
                                                  ))}
                                        </div>
                                   </div>
                              </section>
                         </div>
                    </div>

                    {/* right pane */}

                    <div className='border   right-pane p-2 flex justify-start'>
                         <div className='w-1/2  h-full'>
                              <h1></h1>
                         </div>
                    </div>
               </div>
          </Main>
     );
};

function Icon() {
     return (
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='#878989'>
               <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
               />
          </svg>
     );
}

function SimpleSlider({ click }) {
     var settings = {
          // className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60",
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true,
     };
     return (
          <div className='slider px-5'>
               <Slider {...settings}>
                    {Array(6)
                         .fill(1)
                         .map((item, index) => (
                              <div className='box p-4'>
                                   <Memcard className='memories-card w-full  rounded-t-md shadow-md'>
                                        <div className='img-container w-full relative'></div>

                                        <div className='card-content w-full p-3'>
                                             <div className='date-name w-full py-5  flex relative text-sm'>
                                                  <h1 className='date uppercase text-gray-500 font-semibold'>
                                                       feb 19, 2020 |
                                                  </h1>
                                                  <p className='name uppercase ml-1'>
                                                       by
                                                       <span className='style-name ml-1'>bobbyDev</span>
                                                  </p>

                                                  {/* */}
                                             </div>

                                             {/* */}
                                             <div className='body      w-full mt-2 py-5  space-y-5   flex flex-col justify-between'>
                                                  <h1 className='title text-3xl font-joe capitalize '>
                                                       First vacation to atlanta. you see
                                                  </h1>
                                                  <span className='h-1'></span>

                                                  <button
                                                       onClick={click}
                                                       className='read-more capitalize  text-sm 
                                                                      border py-1 px-3 w-16'>
                                                       view
                                                  </button>
                                             </div>
                                        </div>
                                   </Memcard>
                              </div>
                         ))}
               </Slider>
          </div>
     );
}
export default index;
