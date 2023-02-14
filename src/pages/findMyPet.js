import {useState} from "react";
import Image from 'next/image'
import {doPostFetch} from "@/components/FetchFunctions";

const FindMyPet = () => {
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [loadedImage, setLoadedImage] = useState()

    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", image);
        const img = await doPostFetch("/api/handleUpload", body)
        setLoadedImage(img)
    };

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newLostPet = {
            user: sessionStorage.getItem('user'),
            image: loadedImage,
            petNickname: event.target[0].value,
            location: event.target[1].value
        }
        if (loadedImage)
            await doPostFetch("/api/createNew", JSON.stringify(newLostPet), {
                'Content-Type': 'application/json',
            })
        else
            alert("Добавьте изображение питомца")
    }

    return <>
        <input type="file" name="myImage" onChange={uploadToClient}/>
        <br/>
        <button onClick={uploadToServer}>Send</button>
        <br/>
        <form onSubmit={handleSubmit}>
            <label>
                pet's nickname:
                <input
                    type="text"
                    name="username"
                />
            </label>
            <br/>
            <label>
                location:
                <input
                    type="text"
                    name="username"
                />
            </label>
            <button type="submit">Submit</button>
        </form>
        {createObjectURL && <Image src={createObjectURL} width="100" height="100"/>}
    </>
}
export default FindMyPet;