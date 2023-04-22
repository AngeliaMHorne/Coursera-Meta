import React from 'react';
import './main.css';
import Highlights from '../components/highlights/Highlights';
import Testimonials from '../components/testimonials/Testimonials';
import About from '../containers/About';

const Main = () => {
  return (
    <div>
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

export default Main;