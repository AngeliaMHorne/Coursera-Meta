import './App.css';
import React from 'react'
import { About, Footer, Header, Home, Login, Main, Menu, Orderonline, Reservations} from './containers';
import { Navbar } from './components';
import { Routes, Route, Link } from "react-router-dom";


const App = () => {
  return (
  <div className="App">
    <div> 
	    <nav>
        <Link to="./containers/home" className="nav-item">Home</Link>
        <Link to="./containers/about" className="nav-item">About</Link>
        <Link to="./containers/main" className="nav-item">Main</Link>
        <Link to="./containers/reservations" className="nav-item">Reservations</Link>
	    </nav>
        <Routes> 
          <Route path="./containers/home" element={<Home />}></Route>
          <Route path="./containers/about" element={<About />}></Route>
          <Route path="./containers/main" element={<Main />}></Route>
          <Route path="./containers/reservations" element={<Reservations />}></Route>
          
        </Routes>
    </div>
    <Home />
  </div>
  )
}

export default App
