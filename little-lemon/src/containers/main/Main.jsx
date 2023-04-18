import React from 'react';
import './main.css';
import Highlights from '../../components/highlights/Highlights';
import Testimonials from '../../components/testimonials/Testimonials';

const Main = () => {
  return (
    <div>
      <div>
        <Highlights />
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  )
}

export default Main;