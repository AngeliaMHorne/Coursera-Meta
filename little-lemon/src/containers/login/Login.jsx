import React from 'react';
import './login.css';
import { useState } from 'react';

const PasswordErrorMessage = () => { 
  return ( 
    <p className="FieldError">Password should have at least 8 characters</p> 
  ); 
 }; 

function Login () {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState({ 
    value: "", 
    isTouched: false, 
  }); 

  const getIsFormValid = () => {
    return (
      username &&
      password.value.length >= 8
    );
  };
  const clearForm = () => {
    setUserName("");
    setPassword({ 
      value: "", 
      isTouched: false, 
    }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in!");
    clearForm();
  };

  return (
    <div className = "Login">
      <div className="logtitle"><h2>Login</h2></div>
      <form onSubmit={handleSubmit}>
        <fieldset>      
          <div className="Field">
            <label>
              User Name
            </label>
            <input
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="User Name"
            />
          </div>
          <div className="Field"> 
           <label> 
             Password 
           </label> 
           <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password" 
           /> 
           {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
         </div> 
          <div className="loginbutton">
            <button type="submit" disabled={!getIsFormValid()}>
              Login
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;