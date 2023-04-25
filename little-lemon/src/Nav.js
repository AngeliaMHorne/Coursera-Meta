import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Nav = () => {

  return(
        <div className="navbar">
           <ul className="nav-links">
              <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
              <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
              <Link to={`${process.env.PUBLIC_URL}/menu`}>Menu</Link>
              <Link to={`${process.env.PUBLIC_URL}/reservations`}>Reservations</Link>
              <Link to={`${process.env.PUBLIC_URL}/login`}>Login</Link>
           </ul>
        </div>
  );

  

}

export default Nav;