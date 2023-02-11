import styles from "@/styles/Home.module.css";
import {Vortex} from "react-loader-spinner";

const Content = () => {

    return (<>
        <main className={styles.main}>
            <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </main>
    </>)
}
export default Content;