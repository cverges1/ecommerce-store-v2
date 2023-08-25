import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {};

  const handleChange = (event) => {};

  return (
    <div class="wrapper-div flex-column w-50 align-items-center justify-content-center">
      <h2>Sign in to your account</h2>
      <form id="sign-in-form">
        <div class="flex-column">
          <label for="sign-in-email">Email:</label>
          <input id="sign-in-email" type="text" placeholder="" />
        </div>
        <div class="flex-column">
          <label for="sign-in-password">Password:</label>
          <input id="sign-in-password" type="password" placeholder="" />
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
