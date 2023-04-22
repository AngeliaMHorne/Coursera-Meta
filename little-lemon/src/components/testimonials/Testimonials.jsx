import React from 'react';
import './testimonials.css';
import test1 from '../../assets/test1.png';
import test2 from '../../assets/test2.png';
import test3 from '../../assets/test3.png';
import test4 from '../../assets/test4.png';

const Testimonials = () => {
  return (
    <>
      <div className="testimonials section_container">
        <div className="testimonials-content">
          <h3>Testimonials</h3>
          <div className="testimonials-content-images">          
            <img src={test1} alt="Testimonial 1"/>
            <img src={test2} alt="Testimonial 2"/>
            <img src={test3} alt="Testimonial 3"/>
            <img src={test4} alt="Testimonial 4"/>
          </div>
        </div>
      </div>

    </>
  )
}

export default Testimonials;