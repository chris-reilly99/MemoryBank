import React from 'react';
import FeelingsList from './components/FeelingList';
import ProfHeader from './components/ProfHeader';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <ProfHeader />
    <div className="Bucket-app">
      <FeelingsList />
    </div>
    </div>
  );
};

export default App;
