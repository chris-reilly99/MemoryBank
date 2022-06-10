import React from 'react';
import FeelingsList from './components/FeelingList';
import ProfHeader from './components/ProfHeader';
import RecallMem from './components/RecallMem';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <ProfHeader />
    <div className="Bucket-app">
     <RecallMem />
     <div>
      <FeelingsList />
      </div>
    </div>
    </div>
  );
};

export default App;