import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import Login from "./components/Login";
import Feedback from './components/Feedback';
import History from './components/History';
import Signup from './components/Signup';
import About from './components/About';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } exact /> 
      <Route path="/login" element={ <Login /> } exact />
      <Route path="/signup" element={ <Signup /> } exact />
      <Route path="/history" element={ <History /> } exact />
      <Route path="/feedback" element={ <Feedback /> } exact />
      <Route path="/upload" element={ <Upload /> } exact />
      <Route path="/about" element={ <About/> } exact />
    </Routes>
    </>
  );
}

export default App;
