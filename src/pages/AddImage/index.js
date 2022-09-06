import ImgUploadForm from "../../components/ImgUploadForm";

const AddImage = ({changePage, user, userId}) => {
    return (
        <div>
            <ImgUploadForm
                userId={userId}
                changePage={changePage}
            />
        </div>
    )
}

export default AddImage;