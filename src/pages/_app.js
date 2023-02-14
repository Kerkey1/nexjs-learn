import '@/styles/globals.css'
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function App({Component, pageProps}) {
    return <>
        <Menu/>
        <Component {...pageProps} />
        <Footer/>
    </>

}
