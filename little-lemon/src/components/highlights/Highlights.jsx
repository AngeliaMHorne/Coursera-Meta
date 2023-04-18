import React from 'react';
import './highlights.css';
import card1 from '../../assets/Card.png';
import card2 from '../../assets/Card-1.png';
import card3 from '../../assets/Card-2.png';

const Highlights = () => {
  return (
  <>
    <div className="ll__highlights section__padding" id='highlights'>
      <div className="ll__highlights-content">
      <h2>This Week's Specials</h2>
      <button type='button'><a href="#menu">Online Menu</a></button>
      </div>
    </div>
    <div className="ll__highlights-content-cards">
      <img src={card1} alt="Greek Salad" id="card1" />
      <img src={card2} alt="Bruschetta" id="card2" />
      <img src={card3} alt="Lemon Dessert" id="card3" />
    </div>
  </>
  )
}

export default Highlights