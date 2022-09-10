import React from 'react';
import {useNavigate} from "react-router-dom"
  
const Home = () => {
  const navigate = useNavigate();
    
  return (
      <>
        <h1>Schedule Below!</h1>
        <button onClick={()=>navigate("/Scheduler")}>Book An Appointment!</button>
      </>
  )
};
  
export default Home;
