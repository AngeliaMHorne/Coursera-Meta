import React from 'react'
import { Link } from "react-router-dom";
import logo2 from '../assets/Rectangle.png';
import "./footer.css";

const Footer = () => {

  return(
    <div className="footer_container">
        <div className="footer_container_logo">
          <img src={logo2} alt="Little Lemon" />
        </div>
      <div className="footer_container_links">
        <div className="footer_container_nav">
          <ul>
            <li>Navigation</li>           
              <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
              <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
              <Link to={`${process.env.PUBLIC_URL}/menu`}>Menu</Link>
              <Link to={`${process.env.PUBLIC_URL}/reservations`}>Reservations</Link>
              <Link to={`${process.env.PUBLIC_URL}/login`}>Login</Link>
          </ul>
        </div>
        <div className="footer_container_contact">
          <ul>
            <li>Contact</li>
              <a target="_blank" href="https://www.google.com/maps/dir//Chicago,+IL,+USA/@41.8337754,-88.0609151,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x880e2c3cd0f4cbed:0xafe0a6ad09c0c000!2m2!1d-87.6297982!2d41.8781136">Address</a>
              <a target="_blank" href="tel:5555555">Phone</a>
              <a target="_blank" href="mailto:email@littlelemon.com">Email</a>
          </ul>
        </div>
        <div className="footer_container_social">
          <ul>
            <li>Social</li>
              <a target="_blank" href="https://www.twitter.com">Twitter</a>
              <a target="_blank" href="https://www.instagram.com">Instagram</a>
              <a target="_blank" href="https://www.facebook.com">Facebook</a>
              <a target="_blank" href="https://www.yelp.com">Yelp</a>
          </ul>
        </div>
      </div>
    </div>
  );

  

}

export default Footer;