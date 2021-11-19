import React from "react";
import { pushRotate as Menu } from "react-burger-menu";
import {NavLink} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { FaRegUser } from "react-icons/fa";

import './style.css'
const Hambuger = (props) => {
    const UserDetails = useSelector(({ authSlice }) => authSlice);
    const [side, setSide] = React.useState(false)
    
    
    const showMenu = () => {
        setSide(false)
        
    };
    
    // to handl state change
    const handleStateChange = (state) => {
        setSide(state.isOpen);

    };
    
    // toggle side bar visibilie
    const toggleMenu = () => {
        setSide((prev) => !prev);

    };

    return (
        <Menu {...props} isOpen={side} onStateChange={(state) => handleStateChange(state)} className='bg-white p-6 overflow-hidden'>
            {UserDetails.loggedIn ? (
                <React.Fragment>
                    {/* <> */}
                    <NavLink to='/Home' className='hover:text-red-600 menu-item '>
                        <div onClick={showMenu} className='nav_item my-4'>
                            Home
                        </div>
                    </NavLink>
                    <NavLink to='/Course' onClick={showMenu} className='hover:text-red-600 menu-item'>
                        <div className='nav_item my-4'>Course</div>
                    </NavLink>
                    <NavLink to='/About' onClick={showMenu} className='hover:text-red-600 menu-item'>
                        <div className='nav_item my-4'>About</div>
                    </NavLink>
                    <NavLink to='/Contact' onClick={showMenu} className='hover:text-red-600 menu-item'>
                        <div className='nav_item my-4'>Contact</div>
                    </NavLink>
                    {/* </> */}
                    <button className='text-pri-1 p-1 border border-pri-1 font-normal  px-4 rounded-sm'>login</button>
                    <br />

                    <button className='bg-pri-1 p-1 font-normal mt-2 text-white px-4 rounded-sm'>Sign Up</button>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {/* <> */}

                    <div className='avatar_box border space-x-4 rounded-sm p-4 items-center my-3 bg-gray-200 h-20 flex '>
                        <div className='avatar rounded-full w-9 h-9 text-white  bg-txt-3 flex justify-center items-center'>
                            <FaRegUser />
                        </div>
                        <h1 className='user_name capitalize text-txt-3 font-medium'>bobby developer</h1>
                    </div>
                    <div className='ml-1'>
                        <NavLink onClick={showMenu}  to='/learning' className='hover:text-red-600 menu-item '>
                            <div className='nav_item my-4'>My Learning</div>
                        </NavLink>
                        <NavLink onClick={showMenu}  to='/ach' className='hover:text-red-600 menu-item'>
                            <div className='nav_item my-4'>Achievment</div>
                        </NavLink>
                        <NavLink onClick={showMenu}  to='/Purchased' className='hover:text-red-600 menu-item'>
                            <div className='nav_item my-4'>Help center</div>
                        </NavLink>
                        <NavLink onClick={showMenu}  to='/Contact' className='hover:text-red-600 menu-item'>
                            <div className='nav_item my-4'>Contact</div>
                        </NavLink>
                    </div>
                    {/* </> */}
                    <button className='text-pri-1 p-1 border border-pri-1 font-normal  px-4 rounded-sm'>Log out</button>
                </React.Fragment>
            )}
        </Menu>
    );
};

export default Hambuger;
