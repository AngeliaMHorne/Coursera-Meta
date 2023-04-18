import React from 'react';
import './testimonials.css';
import test1 from '../../assets/test1.png';
import test2 from '../../assets/test2.png';
import test3 from '../../assets/test3.png';
import test4 from '../../assets/test4.png';

const Testimonials = () => {
  return (
    <>
      <div className="ll_testimonials section__margin" id='testimonials'>
        <div className="ll_testimonials-content">
          <h3>Testimonials</h3>
          <div className="ll__testimonials-content-images" id='testimages'>          
            <img src={test1} alt="Testimonial 1" id="test1" />
            <img src={test2} alt="Testimonial 2" id="test2" />
            <img src={test3} alt="Testimonial 3" id="test3" />
            <img src={test4} alt="Testimonial 4" id="test4" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Testimonials;