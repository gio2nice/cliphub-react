import React, { Component } from "react";
import '../Home.css';

class Home extends Component {
  render() {
    return (
      <><div>
        <h2>My Barber</h2>
        <button onClick={() => ("/barberProfile")}>Barber</button>
        <h2>My Cuts</h2>
        <button onClick={() => ("/barberProfile")}>Photo</button>
      </div><button onClick={() => ("/barberProfile")}>Book Appointment</button><button onClick={() => ("/barberProfile")}>Add Photo</button></>
    );
  }
}
 
export default Home;