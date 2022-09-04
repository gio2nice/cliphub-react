import API from "../../utils/API";

const UserDisplay = ({user, changePage, changeUser}) => {
    const handleSignOut = async (e) => {
        try {
            API.logOut();
        } catch (err) {
            console.log(err);
        }
        
        changeUser("", "");
        changePage("splash");
    }

    return user ? (
        <div>
            <b>LOGGED IN AS:</b> {user} | <a onClick={()=>changePage("imageShow")}>See Images</a> | <a onClick={()=>changePage("imageAdd")}>Add Image</a> |<button onClick={handleSignOut}>Sign Out</button>
        </div>
    ) : (
        <div>
            <button onClick={() => changePage("signUp")}>Sign Up</button> | <button onClick={() => changePage("logIn")}>Log In</button>
        </div>
    )
}

export default UserDisplay;