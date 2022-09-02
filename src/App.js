import React from "react";
import logo from './logo.svg';
import "./App.css";
import Home from './Login';
import About from './About';
import Scheduler from './Appointment';
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/Barber" element={<Barber/>} />
        <Route exact path="/Customer" element={<Customer/>} />
        <Route exact path="/Appointment" element={<Appointment/>} />
        <Route exact path="/Portfolio" element={<Portfolio/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;