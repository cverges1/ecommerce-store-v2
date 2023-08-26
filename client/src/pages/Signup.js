import React, { useState } from 'react';
import Auth from '../utils/auth'; 

function Signup(props) {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Auth.signup({
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      });

      if (response && response.token) {
        Auth.login(response.token);
      } else {
        console.log('No token received after sign-up.');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="wrapper-div flex-column w-50 align-items-center justify-content-center">
      <h2>Create Account</h2>
      <form id="sign-up-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="sign-up-first-name">First Name:</label>
          <input id="sign-up-first-name" type="text" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="sign-up-last-name">Last Name:</label>
          <input id="sign-up-last-name" type="text" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="sign-up-email">Email:</label>
          <input id="sign-up-email" type="email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="sign-up-password">Password:</label>
          <input id="sign-up-password" type="password" onChange={handleChange} />
        </div>
        <button type="submit">SIGN UP</button>
      </form>
      <div id="error" className="red-error"></div>
    </div>
  );
}

export default Signup;