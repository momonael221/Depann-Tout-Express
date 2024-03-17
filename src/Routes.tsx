import {lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Pages
const Home = lazy(() => import("./Pages/Home.tsx"));
const About = lazy(() => import("./Pages/About.tsx"));
const Contact = lazy(() => import("./Pages/Contact.tsx"));
const Platerie = lazy(() => import("./Pages/Platerie.tsx"));
const Peinture = lazy(() => import("./Pages/Peinture.tsx"));
const Vitrerie = lazy(() => import("./Pages/Vitrerie.tsx"));
const Menuiserie = lazy(() => import("./Pages/Menuiserie.tsx"));
const Revetement = lazy(() => import("./Pages/Revetement.tsx"));
const Serrurerie = lazy(() => import("./Pages/Serrurerie.tsx"));
const Electricite = lazy(() => import("./Pages/Electricite.tsx"));
const PoseSerrure = lazy(() => import("./Pages/PoseSerrure.tsx"));
const TravauxRenovation = lazy(() => import("./Pages/TravauxRenovation.tsx"));
const IsolateurInterieure = lazy(() => import("./Pages/IsolationInterieure.tsx"));
const ReparationPlomberie = lazy(() => import("./Pages/ReparationPlomberie.tsx"));
const DepannageSerrurerie = lazy(() => import("./Pages/DepannageSerrurerie.tsx"));

export function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/vitrerie" element={<Vitrerie/>}/>
                <Route path="/platerie" element={<Platerie/>}/>
                <Route path="/peinture" element={<Peinture/>}/>
                <Route path="/menuiserie" element={<Menuiserie/>}/>
                <Route path="/serrurerie" element={<Serrurerie/>}/>
                <Route path="/electricite" element={<Electricite/>}/>
                <Route path="/pose-serrure" element={<PoseSerrure/>}/>
                <Route path="/revetement-sol" element={<Revetement/>}/>
                <Route path="/travaux-de-renovation" element={<TravauxRenovation/>}/>
                <Route path="/isolateur-interieure" element={<IsolateurInterieure/>}/>
                <Route path="/reparation-plomberie" element={<ReparationPlomberie/>}/>
                <Route path="/depannage-serrurerie" element={<DepannageSerrurerie/>}/>
            </Routes>
        </BrowserRouter>
    )
}