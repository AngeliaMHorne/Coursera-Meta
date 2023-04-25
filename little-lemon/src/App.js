import './App.css';
import React from 'react'
import {Reservations, Menu, Login, Footer, About, Home} from "./containers";
import { Navbar } from './components';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Navbar />
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
          <Route path={`${process.env.PUBLIC_URL}/menu`} element={<Menu />} />
          <Route path={`${process.env.PUBLIC_URL}/reservations`} element={<Reservations />} />
          <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login />} />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
