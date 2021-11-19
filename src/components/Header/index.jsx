import React from "react";
import styled from "styled-components";
// import { Divide as Hamburger } from 'hamburger-react'
import logo from "../../asset/logo1.png";
import { NavLink } from "react-router-dom";
import { BiChevronDown, BiChevronUp, BiMenuAltRight } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { LOG_IN, LOG_OUT } from "../../redux/AuthSlice";
import { SHOW_MODAL } from "../../redux/modalSlice";
import Hambuger from "../sideNav/Hambuger";
import {useHistory} from 'react-router-dom'

const Home = ({ isLoggedIn, setIsLoggedIn, user }) => {
     const [isOpened, setIsOpened] = React.useState(true);
     const dispatch = useDispatch();
     const history = useHistory()
     // const state = useSelector((state) => state.state);
     const menuRef = React.useRef();

     // ~~~~~~~~~~~~~~~~~~~~~~~~~~functions
     function openMenu() {
          const menuBtn = document.getElementById("menuBtn");
          menuBtn.classList.toggle("active");
          setIsOpened((prev) => !prev);
     }

     function closeMenu() {
          if (menuRef.current && menuRef.current !== event.target) {
               const menuBtn = document.getElementById("menuBtn");
               menuBtn.classList.remove("active");
               setIsOpened(false);
          } else {
               null;
          }
     }
     
     function logOut(){
     localStorage.clear()
                history.push('/Home')
     }


     // ~~~~~~~~~~~~~~~~~~~~~~~~~~functions

     React.useEffect(() => {
          document.addEventListener("click", closeMenu, true);
          return () => {
               document.removeEventListener("click", closeMenu, true);
          };
     });

     return (
          <Header className='w-full h-20 md:h-28 flex justify-around items-center  bottom-1'>
               <div className='logo  items-center flex'>
                    <img src={logo} alt='' className='logo-img ' />
               </div>
               {/* wider screen */}
               <nav className='navbar hidden  md:flex h-full items-center space-x-8'>
                    <NavLink to='/Home' className='hover:text-red-600 navLink'>
                         <div className='nav_item'>Home</div>
                    </NavLink>
                    <NavLink to='/Course' className='hover:text-red-600 navLink'>
                         <div className='nav_item'>Course</div>
                    </NavLink>
                    <NavLink to='/About' className='hover:text-red-600 navLink'>
                         <div className='nav_item'>About</div>
                    </NavLink>
                    <NavLink to='/Contact' className='hover:text-red-600 navLink'>
                         <div className='nav_item'>Contact</div>
                    </NavLink>
               </nav>
               {/* wider screen */}

               {/* wider screen */}
               <div className='auth hidden md:flex h-full items-center space-x-4'>
                    {!user ? (
                         <>
                              {" "}
                              <button to='/login' onClick={() => dispatch(SHOW_MODAL(true))}>
                                   <div className='login_item btn_2'>login</div>
                              </button>
                              <NavLink to='/signup' onClick={closeMenu}>
                                   <div className='signup_item btn text-white'>sign up</div>
                              </NavLink>
                         </>
                    ) : (
                         <div id='menuBtn' className='menu_container  relative'>
                              <button
                                   onClick={openMenu}
                                   className='w-52  relative menu_btn flex items-center justify-between cursor-pointer p-3 active'>
                                   <div className='avatar rounded-full w-9 h-9 text-white  bg-txt-3 flex justify-center items-center'>
                                        <FaRegUser />
                                   </div>
                                   <h1 className='user_name capitalize text-txt-3 font-medium'>
                                        {!user.name ? "no name" : user.name}
                                   </h1>

                                   {!isOpened ? <BiChevronDown /> : <BiChevronUp />}
                              </button>

                              <div
                                   ref={menuRef}
                                   id='drop_down_menu'
                                   className='drop_down absolute flex flex-col z-10 top-14 w-52 left-0 text-left rounded-md p-2
                                shadow-md 
                            '>
                                   <NavLink className='drop_down_link p-1 px-3 ' to='/Learning'>
                                        My learning
                                   </NavLink>
                                   <NavLink className='drop_down_link p-1 px-3 ' to='/ach'>
                                        Achievement
                                   </NavLink>
                                   <NavLink className='drop_down_link p-1 px-3 ' to='/Purchased'>
                                        Help center
                                   </NavLink>
                                   <button
                                        onClick={logOut}
                                        className='drop_down_link p-1 px-3 text-left'
                                        to='/Learning'>
                                        Logout
                                   </button>
                              </div>
                         </div>
                    )}
               </div>
               {/* wider screen */}

               {/* smaller screen */}
               <div className='h-full w-14 md:hidden  flex justify-center align-items'></div>
               {/* smaller screen */}
          </Header>
     );
};

const Header = styled.div`
    .logo-img {
        width: 80%;
    }
    .menu_container {
        .drop_down {
            background: #ffece5;
            display: none;
            .drop_down_link {
                font-size: 16px;
                font-weight: 500;
                color: #171717;
                padding: 8px 12px;

                &:hover {
                    background: rgba(255, 204, 187, 1);
                    border-radius: 8px;
                }
            }
        }
        // _______
        &.active {
            .drop_down {
                display: flex;

                .drop_down_link {
                    &:hover {
                    }
                }
            }
        }
    }
    .navLink.active {
        color: red;
    }

    .menu_btn {
        border-radius: 8px;

        &:hover {
            background: rgba(255, 204, 187, 1);
        }
    }

    @media screen and (max-width: 640px) {
        .logo-img {
            width: 50%;
        }
    }

    @media screen and (max-width: 420px) {
        .logo-img {
            width: 40%;
        }
    }

    @media screen and (max-width: 320px) {
    }
`;

export default Home;
