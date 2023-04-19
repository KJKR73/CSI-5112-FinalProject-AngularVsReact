import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import History from './Components/History';
import Interaction from './Components/Interaction';

// code for fetching data

function App() {
  return (
    <div className="bg-gray-100 w-full h-screen">
      <Header />
      <Interaction />
      <History
        Show={true}
      />
    </div>
  );
}
mhesbffbjhebfjhwbefjhbwhfbej
export default App;
