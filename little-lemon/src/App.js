import './App.css';
import React from 'react'
import {Reservations, Menu, Login, Main, Footer, About, Home} from "./containers";
import { Navbar } from './components';
import { BrowserRouter, Route, Routes } from "react-router-dom";

/*const App = () => {
  return (
  <div className="App">
    <div className="color__bg">
      <Navbar />
    </div>
    <div className="color__bg__box">
      <Header />
    </div>
    <Main />
    <About />
    <Footer />
  </div>
  )
}*/


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Navbar />
       <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
