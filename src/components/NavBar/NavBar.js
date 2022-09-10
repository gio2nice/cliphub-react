import React from "react"
import {Link} from "react-router-dom"

function NavBar(){
    return(
        <header>
            <div className="container">
                <Link to ="/">
                    <h1>ClipHub</h1>
                </Link>
                <nav>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;