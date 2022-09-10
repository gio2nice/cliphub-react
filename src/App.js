import React from "react";
import "./App.css";
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/LogIn/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
             <Route
              path="/login"
              element={<Login />}
            />
             <Route
              path="/signup"
              element={<Signup />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;