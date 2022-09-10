import React from "react"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
function NavBar(){
    const navigate = useNavigate();
    
    return(
        <header>
            <div className="container">
                <Link to ="/">
                    <h1>ClipHub</h1>
                </Link>
                <nav>
                    <div>
                        <button onClick={()=>navigate("/Login")}>Login</button>
                        <button onClick={()=>navigate("/Signup")}>Signup</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default NavBar;