import React from 'react';
import './about.css';
import about1 from '../../assets/about1.png';
import about2 from '../../assets/about2.png';

const About = () => {
  return (
    <div className="ll_about" section__padding id='about'>
      <div className="ll__about-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.<br></br>The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12 to 15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
        </p>
        <div className="ll__about-image">
          <img src={about1} alt="Brothers 1" />
          <img src={about2} alt="Brothers 2" />
        </div>
      </div>
    </div>
  )
}

export default About;