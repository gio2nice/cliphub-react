import React from "react";
import logo from './logo.svg';
import "./App.css";
import Login from './Login';
import Barber from './Barber';
import Customer from './Customer';
import Appointment from './Appointment';
import Portfolio from './Portfolio';
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