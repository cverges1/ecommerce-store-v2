import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await login({
        variables: { email: formState.email, password: formState.password },
      });
  
      if (data && data.login && data.login.token) {
        const token = data.login.token;
        Auth.login(token);
      } else {
        console.error("Token not received in the response.");
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState(previousState => ({
      ...previousState,
      [name]: value,
    }));
  };

  return (
    <div class="wrapper-div flex-column w-50 align-items-center justify-content-center">
      <h2>Sign in to your account</h2>
      <form id="sign-in-form" onSubmit={handleFormSubmit}>
        <div class="flex-column">
          <label for="sign-in-email">Email:</label>
          <input id="sign-in-email" type="text" placeholder="" onChange={handleChange} />
        </div>
        <div class="flex-column">
          <label for="sign-in-password">Password:</label>
          <input id="sign-in-password" type="password" placeholder="" onChange={handleChange} />
        </div>
        <button type="submit">SIGN IN</button>
      </form>
      <div class="register-link">
        <p>Don't have an account yet?</p>
        <a href="/signup">REGISTER</a>
      </div>
    </div>
  );
}

export default Login;
