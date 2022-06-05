import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CardA from './components/CardA';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>

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

    </div>
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