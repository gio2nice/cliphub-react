import {useState} from 'react';
import API from "../../utils/API";

const LogIn = ({changePage, changeUser}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        switch (e.target.id){
            case "signUp-user":
                setUsername(e.target.value);
                break;
            case "signUp-pass":
                setPassword(e.target.value);
                break;
        }
    }

    const handleSubmit = async () => {
        if (username && password){
            let userToLogIn = {
                name: username,
                password: password
            }

            let loggedIn = await API.logIn(userToLogIn);

            if (loggedIn?.username){
                changeUser(loggedIn.username, loggedIn.userId);
                changePage("imageAdd");
            }
        }
    }

    return (
        <div>
            <div>{message}</div>
            <input type="text" id="signUp-user" onChange={handleInputChange} />
            <input type="password" id="signUp-pass" onChange={handleInputChange} />
            <button onClick={handleSubmit}>Log In</button>
            <div><a onClick={()=>changePage("signUp")}>Sign up instead!</a></div>
        </div>
    )
}

