import React from 'react';
import { Routes , Route } from "react-router-dom";
import Home from './pages/Home';
import Broker from './pages/Broker';
import Dispatcher from './pages/Dispatcher';
import Driver from './pages/Driver';
import Login from './pages/Login';
import './index.css';
import './App.css';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/broker" element={<Broker/>} />
        <Route path="/dispatcher" element={<Dispatcher/>} />
        <Route path="/driver" element={<Driver/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  );
}

export default App;
