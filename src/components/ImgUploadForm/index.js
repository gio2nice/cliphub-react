import React, {useState} from 'react';
import lettersAndSpacesPattern from '../../utils/lettersAndSpaces';


const ImgUploadForm = ({userId, changePage}) => {
    const [previewImage, setPreviewImage] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [fileName, setFileName] = useState('');
    const [fileInputState, setFileInputState] = useState('');
    const [message, setMessage] = useState('');

    const shallowValidateName = (name) => {
        if (!lettersAndSpacesPattern(name)){
            setMessage('Name can only consist of letters and spaces');
            return false;
        } else {
            setMessage('');
            return true;
        }
    }

    const handleFilePreview = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        }
    }

    const handleFileUpdate = (e) => {
        const file = e.target.files[0];
        handleFilePreview(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    }

    const handleNameUpdate = (e) => {
        let name = e.target.value;
        
        if (shallowValidateName(name)){
            setFileName(name);
        }
    }

    const handleSubmit = (e) => {
        if (selectedFile && fileName){
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = () => {
                uploadImage(reader.result);
            };
            reader.onerror = () => {
                setMessage("Error with Upload. Please check path and try again!");
            };
        };
    };

    const uploadImage = async (encodedImage) => {
        try {
            await fetch(`http://localhost:3001/api/images/`, {
                method: "POST",
                body: JSON.stringify({data: encodedImage, name: fileName, u_id: userId }),
                headers: { "Content-Type": "application/json"}
            });
            setFileName('');
            setFileInputState('');
            setPreviewImage('');
            setMessage('Image uploaded successfully');
            changePage("imageShow");
        } catch (err) {
            console.error(err);
            setMessage('Something went wrong with the upload!');
        }
    }

    return (
        <div>
            {message ? <div>{message}</div> : <div></div>}
            <input type="text" id="imageName" onChange={handleNameUpdate} value={fileName} placeholder="Name here" />
            <input type="file" id="imageSelect" accept="image/*" value={fileInputState} onChange={handleFileUpdate} />
            <button onClick={handleSubmit}>Submit</button>
            {previewImage && (
                <img src={previewImage}
                    alt="Selected image Preview"
                    style={{ height: 300 }}
                    />
            )}
        </div>
        

    )
}

export default ImgUploadForm;