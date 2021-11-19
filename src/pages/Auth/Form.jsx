import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
// form component containing the input field for authentication

const Form = ({ isSigningUp, setIsSigningUp, submitHandler }) => {
     const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
     } = useForm();
     
     
     function handleValidation() {
          let passContainer = document.getElementById("pass_cont");
          passContainer.classList.toggle("active");
     }

     return (
          <form className='w-full h-auto my-1' onSubmit={handleSubmit(submitHandler)}>
               {/* name input*/}
               {isSigningUp && (
                    <label className='block'>
                         <span className='text-gray-700 font-semibold'>First Name</span>
                         <input
                              type='text'
                              className='form-input mt-1 block w-full'
                              placeholder='Enter your full name'
                              {...register("name")}
                         />
                    </label>
               )}

               {/* eamil input*/}
               <label className='block'>
                    <span className='text-gray-700 font-semibold'>Email</span>
                    <input
                         type='email'
                         id='EMAIL'
                         className='form-input mt-1 block w-full'
                         {...register("email")}
                         placeholder='Enter your email'
                    />
               </label>

               {/* password input*/}
               <Label id="pass_cont" className=' block password_container relative'>
                    <span className='text-gray-700 font-semibold'>Password</span>

                    <input
                         {...register("password")}
                         type='password'
                         className='form-input mt-1 block w-full'
                         placeholder='Enter Password'
                         onChange={handleValidation}
                    />
                    <div className='hidden validation w-full  shadow-sm rounded-4 p-3 border bg-white absolute top-20 left-0 space-y-1'>
                         <h1 className='pass_text'>Your password must include</h1>
                         <div className='checks ml-3'>
                              <div className='text_wrapper mb-1 flex items-center'>
                                   <span className='w-1 h-1 rounded-full bg-gray-900'></span>
                                   <p className='text-sm ml-2'>At least one capital letter</p>
                              </div>
                              <div className='text_wrapper  flex  items-center'>
                                   <span className='w-1 h-1 rounded-full bg-gray-900'></span>
                                   <p className='text-sm ml-2'>One uppercase letter</p>
                              </div>
                         </div>
                    </div>
               </Label>

               <div className='terms  w-full flex items-center my-6'>
                    <div className='relative input_'>
                         <input {...register("check")} type='checkbox' name='' className='w-4 h-4' />
                    </div>
                    {isSigningUp ? (
                         <p className='agree ml-4'>
                              I agree to the <b className='text-sec-1'>Terms & Conditions</b>{" "}
                         </p>
                    ) : (
                         <p className='agree ml-4'>Remember me</p>
                    )}
               </div>
               <button
                    disabled={false}
                    className={`signUp_btn flex items-center p-2 justify-center capitalize text-white  w-full ${
                         true && "bg-pri-1"
                    } `}>
                    {" "}
                    {isSigningUp ? "sign up" : "sign in"}
               </button>

               {isSigningUp ? (
                    <p className='agree mt-4'>
                         Already have an account? <b className='text-sec-1'>Login</b>
                    </p>
               ) : (
                    <p className='agree mt-4'>
                         Don't have an account? <b className='text-sec-1'>Create an account</b>
                    </p>
               )}
          </form>
     );
};

const Label = styled.label`
     /* .validation{
display: none;
} */
     &.active {
          .validation {
               display: block;
               z-index: 999;
          }
     }
`;

export default Form;
