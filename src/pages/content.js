import {useEffect, useState} from "react";

const Content = () => {

    const [animals, setAnimals] = useState([]);



    function handle(animals) {
        if (animals.length === 0) {
            alert('Ошибка, ни одного животного!');
        }
        setAnimals(animals);
    }

    useEffect(() => {
        fetch('api/getAnimals').then(data => data.json()).then(data => handle(data))
    }, []);


    function Animal(props) {
        return (
            <option>{props.name}</option>
        );
    }

    return (

        <div>
            <h2>Upload file</h2>
            <p>Выберите тип изображения </p>
            <select>
                {animals.map((animal, i) => <Animal name={animal}/>)}
            </select>

        </div>

    );
    // return (<>
    //     <main className={styles.main}>
    //         <Vortex
    //             visible={true}
    //             height="80"
    //             width="80"
    //             ariaLabel="vortex-loading"
    //             wrapperStyle={{}}
    //             wrapperClass="vortex-wrapper"
    //             colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    //         />
    //     </main>
    // </>)
}
export default Content;