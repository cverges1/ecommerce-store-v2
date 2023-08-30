import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
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
      <h2>Sign in to your account</h2>
      <form id="sign-in-form" onSubmit={handleFormSubmit}>
        <div className="flex-column">
          <label htmlFor="sign-in-email">Email:</label>
          <input
            id="sign-in-email"
            type="text"
            name="email"
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <div className="flex-column">
          <label htmlFor="sign-in-password">Password:</label>
          <input
            id="sign-in-password"
            type="password"
            name="password"
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <button type="submit">SIGN IN</button>
      </form>
      <div className="register-link">
        <p>Don't have an account yet?</p>
        <Link to="/signup">REGISTER</Link>
      </div>
    </div>
  );
}

export default Login;
