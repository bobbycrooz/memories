import React from "react";
import styled from 'styled-components';
import logo from "../../asset/logo2.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
      <Footer className='bg-txt-1 text-txt-2 flex justify-around items-center'>
          <div className='logo'>
              <img src={logo} alt='' />
          </div>
          
          
          
          
          
          <nav className='navbar hidden md:flex h-full items-center space-x-8'>
              <NavLink to='/Home' className='hover:text-red-600'>
                  <div className='nav_item'>Home</div>
              </NavLink>
              <NavLink to='/Course' className='hover:text-red-600'>
                  <div className='nav_item'>Course</div>
              </NavLink>
              <NavLink to='/About' className='hover:text-red-600'>
                  <div className='nav_item'>About</div>
              </NavLink>
              <NavLink to='/Contact' className='hover:text-red-600'>
                  <div className='nav_item'>Contact</div>
              </NavLink>
          </nav>
      </Footer>
  );
};

const Footer = styled.footer`
    height: 150px;
    @media screen and (max-width: 420px) {
        height: 90px;
    }
`;

export default Home;
