import React from "react";
import logo from './logo.svg';
import "./App.css";
import Home from './Home';
import Contact from './Contact';
import Scheduler from './Scheduler';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Scheduler />
    </div>
  );
}

export default App;