import decode from 'jwt-decode';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { SIGNUP_MUTATION } from './mutations';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// create a new class to instantiate for a user
class AuthService {
  // get user data from JSON web token by decoding it
  getProfile() {
    return decode(this.getToken());
  }

  // return `true` or `false` if token exists (does not verify if it's expired yet)
  loggedIn() {
    const token = this.getToken();
    return token ? true : false;
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  async signup(userData) {
    try {
      const response = await client.mutate({
        mutation: SIGNUP_MUTATION,
        variables: {
          userData,
        },
      });

      console.log('Response from server:', response);

      if (response.data.addUser && response.data.addUser.token) {
        console.log('Token received:', response.data.addUser.token);
        this.login(response.data.addUser.token);
      } else {
        console.log('No token received after sign-up.');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  }
  login(idToken) {
    // Saves user token to localStorage and reloads the application for logged in status to take effect
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.reload();
  }
}

const authServiceInstance = new AuthService();
export default authServiceInstance;
