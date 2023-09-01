import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';

function Login(props) {
  // State to hold form input values
  const [formState, setFormState] = useState({ email: '', password: '' });

  // Mutation for user login
  const [login] = useMutation(LOGIN);

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the login mutation with user input
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });

      // Get the token from the mutation response
      const token = mutationResponse.data.login.token;

      // Log the user in using the Auth utility
      Auth.login(token);
    } catch (e) {
      console.log(e);
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
