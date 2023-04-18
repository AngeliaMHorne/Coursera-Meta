import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Vector.png';
import './navbar.css';

const Menusys = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#menu">Menu</a></p>
  <p><a href="#reservations">Reservations</a></p>
  <p><a href="#orderonline">Order Online</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenusys, setToggleMenusys] = useState (false);
  return (
    <div className="ll__navbar">
      <div className="ll__navbar-links">
        <div className="ll__navbar-links_logo">
          <img src={logo} alt="Little Lemon"/>
        </div>
        <nav className="ll__navbar-links_container">
          <Menusys />
          <div className="ll__navbar-links_login">
            <p>Login</p>
          </div>
        </nav>

        <div className="ll__navbar-menusys">
          {toggleMenusys
            ? <RiCloseLine color="#000000" size={27} onClick={() => setToggleMenusys(false)}/>
            : <RiMenu3Line color="#000000" size={27} onClick={() => setToggleMenusys(true)}/>
          }
          {toggleMenusys && (
            <div className="ll__navbar-menusys_container scale-up-center">
              <div className="ll__navbar-menusys_container-links">
                <Menusys />
              </div>
              <div className="ll__navbar-menusys_container-links_login">
                <p>Login</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar