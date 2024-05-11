

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navigation.css";

const Navigation = () => {
 return (
   <header className="header">
     <nav className="nav container">
       <NavLink to="UniWear/" className="nav__logo">
         Navigation Bar
       </NavLink>

       <div
         className={"nav__menu"}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="UniWear/discover" className="nav__link">
			 Discover
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="UniWear/sell" className="nav__link">
               Sell
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="UniWear/about"
               className="nav__link"
             >
               About
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="UniWear/login"
               className="nav__link"
             >
               Login
             </NavLink>
           </li>
           
         </ul>
         <div className="nav__close" id="nav-close">
           <IoClose />
         </div>
       </div>

       <div className="nav__toggle" id="nav-toggle">
         <IoMenu />
       </div>
     </nav>
   </header>
 );
};

export default Navigation;