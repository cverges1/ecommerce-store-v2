import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      const token = data.addUser.token;
      if (token) {
        Auth.login(token);
      } else {
        console.log('No token received after sign-up.');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div class="wrapper-div flex-column w-50 align-items-center justify-content-center">
      <h2>Create Account</h2>
      <form id="sign-up-form" onSubmit={handleFormSubmit}>
        <div class="form-group">
          <label for="sign-up-first-name">First Name:</label>
          <input id="sign-up-first-name" type="text" onChange={handleChange}/>
        </div>
        <div class="form-group">
          <label for="sign-up-last-name">Last Name:</label>
          <input id="sign-up-last-name" type="text" onChange={handleChange}/>
        </div>
        <div class="form-group">
          <label for="sign-up-email">Email:</label>
          <input id="sign-up-email" type="email" onChange={handleChange}/>
        </div>
        <div class="form-group">
          <label for="sign-up-password">Password:</label>
          <input id="sign-up-password" type="password" onChange={handleChange}/>
        </div>
        <button type="submit">SIGN UP</button>
      </form>
      <div id="error" class="red-error"></div>
    </div>
  );
}

export default Signup;
