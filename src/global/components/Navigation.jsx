import { useEffect } from 'react';
import M from 'materialize-css'; // Import Materialize CSS library
import 'materialize-css/dist/css/materialize.min.css'; // Import Materialize CSS styles
import { TiThMenu } from "react-icons/ti";
import logo from '../../../src/assets/uniwear-high-resolution-logo-transparent.png'; // Import logo image
import './Navigation.css';
import { NavLink } from "react-router-dom";

const Navigation = () => {
  useEffect(() => {
    // Initialize sidenav when the component mounts
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  }, []);

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            <img src={logo} alt="Logo" style={{ width: '150px', height: '40px' }} /> {/* Specify logo dimensions */}
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons"><TiThMenu /></i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><NavLink to="UniWear/">Home</NavLink></li>
            <li><NavLink to="UniWear/discover">Discover</NavLink></li>
            <li><NavLink to="UniWear/sell">Sell</NavLink></li>
            <li><NavLink to="UniWear/about">About</NavLink></li>
            <li><NavLink to="UniWear/login">Login</NavLink></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </>
  );
};

export default Navigation;
