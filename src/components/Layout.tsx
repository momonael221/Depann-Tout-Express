import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";

export default function Layout({children}: any) {
    return <>
        <Navbar/>
        {children}
        <Footer/>
    </>
}