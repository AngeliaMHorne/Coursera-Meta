import React from 'react';
import './reservations.css';
import { useState } from 'react';

function Reservations () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEMail] = useState("");
  const [tele, setTelephone] = useState("");
  const [time, setTimeRes] = useState("time");
  const [seats, setSeatsNum] = useState("seats");
  const [occasion, setOccasionType] = useState("occasion");

  const getIsFormValid = () => {
    return (
      firstName &&
      lastName &&
      email &&
      tele &&
      time !== "time" &&
      seats !== "seats"
    );
  };
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEMail("");
    setTelephone("");
    setTimeRes('time');
    setSeatsNum('seats');
    setOccasionType('occasion');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservations confirmed!");
    clearForm();
  };

  return (
    <div className = "Reservations">
      <div className="restitle"><h2>Reservations</h2></div>
      <form onSubmit={handleSubmit}>
        <fieldset>      
          <div className="Field">
            <label>
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First Name"
            />
          </div>
          <div className="Field">
            <label>
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last Name"
            />
          </div>
          <div className="Field">
            <label>
              E-mail
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEMail(e.target.value);
              }}
              placeholder="E-mail"
            />
          </div>
          <div className="Field">
            <label>
              Telephone Number
            </label>
            <input
              value={tele}
              onChange={(e) => {
                setTelephone(e.target.value);
              }}
              placeholder="Telephone Number"
            />
          </div>
          <div className="Field">
            <label>
              What time?
            </label>
            <select value={time}
              onChange={(e) =>
                setSeatsNum(e.target.value)}>
                  <option value="Seating">Choose a time:</option>
                  <option value="Five">17:00</option>
                  <option value="Six">18:00</option>
                  <option value="Seven">19:00</option>
                  <option value="Eight">20:00</option>
                  <option value="Nine">21:00</option>
                  <option value="Ten">22:00</option>
            </select>
          </div>
          <div className="Field">
            <label>
              How many seats?
            </label>
            <select value={seats}
              onChange={(e) =>
                setSeatsNum(e.target.value)}>
                  <option value="Seating">Choose a seating option:</option>
                  <option value="Two">Seating for Two</option>
                  <option value="Four">Seating for Four</option>
                  <option value="Six">Seating for Six</option>
                  <option value="More">Custom Seating</option>
            </select>
          </div>
          <div className="Field">
            <label>
              Is it a special occasion?
            </label>
            <select value={occasion}
              onChange={(e) =>
                setOccasionType(e.target.value)}>                                    
                  <option value="Eventtype">Choose an occasion:</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Event">Custom Event</option>
            </select>
          </div>
          <div className="reservebutton">
            <button type="submit" disabled={!getIsFormValid()}>
              Make Reservation!
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Reservations