import React from "react";
import logo from './logo.svg';
import "./App.css";
import Home from './pages/Home';
import About from './About';
import Scheduler from './Scheduler';
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Scheduler" element={<Scheduler/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;