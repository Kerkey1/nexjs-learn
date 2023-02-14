import {useEffect, useState} from "react";
import PetsList from "@/components/pets/PetsList";
import {doGetFetch, doPostFetch} from "@/components/FetchFunctions";

const LostPets = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        doGetFetch("/api/getAllPets").then(v => setData(JSON.parse(JSON.parse(v))))
    }, [])

    return <>
        <PetsList list={data}/>
    </>
}
export default LostPets;