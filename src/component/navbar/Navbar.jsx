import React from 'react';
import './navbar.css';
import { useState } from 'react';

import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.png';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] =useState(false)
  return (
    <div className='gpt3__navabar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is DI?</a></p>
          <p> <a href='#posibility'>Open DI</a> </p>
          <p> <a href='#feature'>Case Studies</a></p>
          <p> <a href='#blog'>Library</a>  </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>sign in</p>
        <button type='button'> Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
         toggleMenu? <RiCloseLine color='#fff' size={27} onClick = {()=>setToggleMenu(false)}/>
         :toggleMenu? <RiMenu3Line color='#fff' size={27} onClick = {()=>setToggleMenu(true)}/>
  
         { toggleMenu &&(<div className="" gpt3__navbar-container scale-up-center>
            <div className="gpt3__navbar-menu_container-links">
                <p><a href='#home'>Home</a></p>
                 <p><a href='#wgpt3'>What is DI?</a></p>
                 <p> <a href='#posibility'>Open DI</a> </p>
                 <p> <a href='#feature'>Case Studies</a></p>
                <p> <a href='#blog'>Library</a>  </p>
                <div className="gpt3__navbar-menu__container-links-sign">
                 <p>sign in</p>
                  <button type='button'> Sign up</button>
                 </div>
             </div>
          </div>
         )}
      </div>
    </div> 
  )
}

export default Navbar