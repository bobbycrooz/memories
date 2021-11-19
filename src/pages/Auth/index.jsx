import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { GrFormClose } from "react-icons/gr";
import googleIcon from "../../asset/google.png";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import {SIGN_UP,LOG_IN } from '../../redux/AuthSlice'



// component for authentication login and sign up
const index = (props) => {
     const [isSigningUp, setIsSigningUp] = React.useState(true);
  
     const dispatch = useDispatch();

     function submitHandler(data) {
          if (isSigningUp) {
               dispatch(SIGN_UP(data));
               console.log('im signing up');
          } else {
               dispatch(LOG_IN(data));
               
          }
     }

     return (
          <AuthCard className='w-full p-2 px-4 md:px-11 my-4'>
               <div className='cancle_btn flex justify-between  mb-4'>
                    <span className='space w-6'></span>
                    <div className='icon '>
                         <GrFormClose onClick={props.closeModal} className='text-3xl text-txt-1' />
                    </div>
               </div>

               {/* */}

               <div className='header'>
                    {isSigningUp && <h1 className='text-txt-1 font-bold text-3xl capitalize '>sign up</h1>}
                    {isSigningUp && <p className='learn'>Learn on your own time from top lecturers</p>}

                    <div className='w-full text-center'>
                         {" "}
                         {!isSigningUp && <h1 className='font-semibold text-4xl '>Welcome back</h1>}
                    </div>
                    <button
                         onClick={() => setIsSigningUp((prev) => !prev)}
                         className='google_btn flex items-center mt-6 rounded-lg p-2 py-3  justify-center capitalize border w-full'>
                         <img src={googleIcon} alt='' />
                         <p className='ml-4 font-semibold text-txt-1'>
                              {" "}
                              {!isSigningUp ? "Sign up with Google" : "Sign in with Google"}
                         </p>
                    </button>
               </div>

               {/* */}

               <div className='hr w-full relative h-11 my-1 flex items-center'>
                    <div className='border w-full'></div>
                    <div className='absolute alternative bg-white p-2'>
                         <h1 className='text-center capitalize'>
                              {isSigningUp ? "sign in with Email" : "Sign up with Email"}
                         </h1>
                    </div>
               </div>
               {/* */}

               {/* form component*/}
               <Form isSigningUp={isSigningUp} setIsSigningUp={setIsSigningUp} submitHandler={submitHandler} />
               {/* form component*/}
          </AuthCard>
     );
};

const AuthCard = styled.div`
     height: 100%;

     .alternative {
          left: 50%;
          transform: translateX(-50%);
     }

     form {
          label {
               height: auto;
               margin: 15px 0;

               span {
                    font-weight: 600;
                    font-size: 16px;
                    color: #171717;
               }

               input {
                    height: 48px;
                    border-radius: 8px;
                    border: 1px solid #c4c4c4;
                    margin-top: 5px;
                    padding: 10px;
                    color: #171717;
                    font-weight: 500;
                    &::placeholder {
                         /* color: red; */
                         color: #c4c4c4;
                    }

                    &:focus {
                         outline: #11c469;
                         border: 3px solid #11c469;
                    }
               }

               .input_ {
                    border: 1px solid red;
                    width: 16px;
                    height: 16px;
               }
               input[type="checkbox"] {
                    position: relative;

                    &::before {
                         position: absolute;
                         content: "";
                         width: 100%;
                         height: 100%;
                         top: 0;
                         left: 0;
                         background-color: #11c469;
                    }

                    &:checked {
                         background-color: #11c469;
                    }
               }
          }

          button {
               border-radius: 8px;
               font-weight: semibold;
               font-size: 20px;

               &:disabled {
                    background: #c4c4c4;
               }
          }
     }
`;

export default index;
