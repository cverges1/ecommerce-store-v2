import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USERS } from '../utils/mutations';

function Signup(props) {
  // State to hold form input values
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // Mutation for user signup
  const [signup] = useMutation(ADD_USERS);

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the signup mutation with user input
      const { data } = await signup({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          password: formState.password,
        },
      });

      // If signup is successful and a token is received, log the user in
      if (data.addUser && data.addUser.token) {
        Auth.login(data.addUser.token);
      } else {
        console.log('No token received after sign-up.');
      }
    } catch (error) {
      console.log('Full error object:', error);
    }
  };

  // Function to handle input field changes
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
          <input
            id="sign-up-first-name"
            type="text"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sign-up-last-name">Last Name:</label>
          <input
            id="sign-up-last-name"
            type="text"
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sign-up-email">Email:</label>
          <input
            id="sign-up-email"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sign-up-password">Password:</label>
          <input
            id="sign-up-password"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit">SIGN UP</button>
      </form>
      <div id="error" className="red-error"></div>
    </div>
  );
}

export default Signup;
