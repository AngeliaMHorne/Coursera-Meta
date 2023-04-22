import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Vector.png';
import './navbar.css';
import Nav from '../../Nav';

const Menusys = () => (
   <Nav />
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
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar