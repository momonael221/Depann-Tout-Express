import {lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Pages
const Home = lazy(() => import("./Pages/Home.tsx"));
const About = lazy(() => import("./Pages/About.tsx"));

export function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}