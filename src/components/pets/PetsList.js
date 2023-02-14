import Image from "next/image";
import PetsCard from "@/components/pets/PetsCard";

const PetsList = ({list}) => {

    return <>
        {list.map((v, index) => v.image && <PetsCard key={index} pet={v}/>)}
    </>
}
export default PetsList;