import React from 'react';
import './home.css';
import Header from '../../containers/Header';
import About from '../../containers/About';
import Highlights from '../../components/highlights/Highlights';
import Testimonials from '../../components/testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Highlights />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <About />
      </div>
    </div>
  )
}

export default Home;