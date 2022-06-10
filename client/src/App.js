import React from 'react';
import { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Header from './components/Header';
import CardA from './components/CardA';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';

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
// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <ApolloProvider client={client}>

      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<CardA />}

          />

          <Route
            path='/SignUp'
            element={<SignUp />}

          />
          <Route
            path='/Login'
            element={<Login />}

          />


        </Routes>

      </Router>

    </ApolloProvider>
  );
}

export default App;


/* <CardA 
title="title"
text="blah"
/>
<CardA 
title="title2"
/>
<CardA 
title="title3"
/>  */