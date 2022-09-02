import React from "react"
import {Link} from "react-router-dom"

function NavBar(){
    return(
        <ul>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/Barber">Barber</Link>
            </li>
            <li>
                <Link to="/Customer">Customer</Link>
            </li>
            <li>
                <Link to="/Appointment">Appointment</Link>
            </li>
            <li>
                <Link to="/Portfolio">Portfolio</Link>
            </li>
        </ul>
    )
}

export default NavBar;