import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import History from './Components/History';
import Interaction from './Components/Interaction';
import { fetchConnection, makeConnection } from './Utils/api';
import { useApi } from './Utils/hooks/useApi';

// code for fetching data

function App() {

  let id = 1;
  const [friendData, setFriendData] = useApi(() => fetchConnection(id));

  return (
    <div className="bg-gray-100 w-full h-screen">
      <Header />
      <Interaction />
      <History
        Show={true}
        data={friendData}
      />
    </div>
  );
}

export default App;
