import Image from "next/image";

const PetsCard = ({pet}) => {

    return <div style={{display: "flex", flexDirection: "row", marginTop: "7px"}}>
        <Image src={"/" + pet.image} width="100" height="100"/>
        <div style={{marginLeft: "3px"}}>
            <p><b>nickname: </b>{pet.petNickname}</p>
            <p><b>location: </b>{pet.location}</p>
            <p><b>owner: </b>{pet.user}</p>
        </div>
    </div>
}
export default PetsCard;