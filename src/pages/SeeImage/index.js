import {useState} from 'react';
import ImgDisplay from "../../components/ImgDisplay";

const SeeImage = ({userId}) => {
    const [selUser, setSelUser] = useState(userId);

    const resetSelUser = () => {
        setSelUser(userId);
    }

    const changeSelUser = (newUser) => {
        if (newUser) {
            setSelUser(newUser);
        } else {
            resetSelUser();
        }
    }

    return (
        <div>
            <ImgDisplay
                selUser={selUser}
                changeSelUser={changeSelUser}
                />
        </div>
    )
}

export default SeeImage;