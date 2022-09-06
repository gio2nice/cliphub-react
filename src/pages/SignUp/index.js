import {useState} from 'react';
import API from "../../utils/API";

const SignUp = ({changePage, changeUser}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [message, setMessage] = useState("");

    const isSamePassword = () => {
        let passMatch = password === checkPassword;
        setMessage(passMatch ? "" : "Passwords must match");
        return passMatch;
    }

    const handleInputChange = (e) => {
        switch (e.target.id){
            case "signUp-user":
                setUsername(e.target.value);
                break;
            case "signUp-pass":
                setPassword(e.target.value);
                break;
            case "signUp-check":
                setCheckPassword(e.target.value);
                break;
        }
    }

    const handleSubmit = async () => {
        if (username && password && isSamePassword()){
            if (await API.checkName(username)){

                let userToAdd = {
                    name: username,
                    password: password
                }

                let added = await API.addUser(userToAdd);

                if (added?.username){
                    changeUser(added.username, added.userId);
                    changePage("imageAdd");
                }
            };
        }
    }

    return (
        <div>
            <div>{message}</div>
            <input type="text" id="signUp-user" onChange={handleInputChange} />
            <input type="password" id="signUp-pass" onChange={handleInputChange} />
            <input type="password" id="signUp-check" onChange={handleInputChange} />
            <button onClick={handleSubmit}>Sign Up</button>
            <div><a onClick={()=>changePage("logIn")}>Log In instead!</a></div>
        </div>
    )
}

export default SignUp;