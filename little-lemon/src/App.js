import './App.css';
import React from 'react'
import { About, Footer, Header, Home, Login, Main, Menu, Orderonline, Reservations} from './containers';
import { Navbar } from './components';

const App = () => {
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
}

export default App
