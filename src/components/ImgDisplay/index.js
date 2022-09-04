import {useState, useEffect} from 'react';
import API from "../../utils/API";


const ImgDisplay = ({selUser, changeSelUser}) => {
    const [loaded, setLoaded] = useState(false);
    const [allImages, setAllImages] = useState([]);

    useEffect(()=> {
        if (selUser){
            API.getUserImages(selUser).then(resp => {
                setAllImages(resp);
            })
        } else {
            API.getUserImages().then(resp => {
                setAllImages(resp);
            })
        }
    }, [])


    return allImages.length == 0 ?
    (
        <div>
            No images found! 
        </div>
    ) :
    (
        <div>
            {allImages.map((img, idx) => {
                return( <div key={idx}>
                    <img src={img.url}
                        alt={img.name} />
                    <h4>{img.name}</h4>
                    <p><a onClick={() => changeSelUser(img.u_id)}>See more from this barber</a></p>
                </div>
                )
            })}
        </div>
    )
}

export default ImgDisplay;