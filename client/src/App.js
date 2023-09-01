import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import IndividualCategory from './pages/IndividualCategory';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { CartProvider } from './utils/CartContext';
import ShoppingCart from './pages/ShoppingCart';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
          {/* <CartProvider>   */}
      <Router>
        <React.Fragment>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/category/:id" element={<IndividualCategory />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
          </Routes>
          <Footer />
        </React.Fragment>
      </Router>
      {/* </CartProvider> */}

    </ApolloProvider>
  );
}

export default App;
