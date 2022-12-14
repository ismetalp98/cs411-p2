// wholae app is deployed here
import './App.css';
import Chat from './chat/Chat';
import React, { useEffect } from 'react';
import Sidebar from './sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createUser } from '../services/userService';

function App() {
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (!user && user === null) {
      const name = prompt("Please enter your name");
      sessionStorage.setItem("user", name);
      createUser(name);
    }
  }, []);

  return (
    <div className="chat">
      <div className="chat__body">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
