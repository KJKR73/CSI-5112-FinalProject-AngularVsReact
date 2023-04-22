import './App.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import History from './Components/History';
import Interaction from './Components/Interaction';

// code for fetching data

function App() {

  let id = "6442bf2292b895822b0f3045";
  const baseURL = 'http://localhost:9999/user/getData';
  const [friendData, setUsers] = useState([])

  useEffect(() => {
    axios
      .post(baseURL, {
        'userId': id
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [baseURL, id])


  return (
    <div className="bg-gray-100 w-full h-screen">
      <Header />
      <Interaction />
      <History
        Show={true}
        userData={friendData}
      />
    </div>
  );
}

export default App;
