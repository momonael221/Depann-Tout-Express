import {lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Pages
const Home = lazy(() => import("./Pages/Home.tsx"));
const About = lazy(() => import("./Pages/About.tsx"));
const Contact = lazy(() => import("./Pages/Contact.tsx"));
const IsolateurInterieure = lazy(() => import("./Pages/IsolationInterieure.tsx"));
const ReparationPlomberie = lazy(() => import("./Pages/ReparationPlomberie.tsx"));

export function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/isolateur-interieure" element={<IsolateurInterieure/>}/>
                <Route path="/reparation-plomberie" element={<ReparationPlomberie/>}/>
            </Routes>
        </BrowserRouter>
    )
}