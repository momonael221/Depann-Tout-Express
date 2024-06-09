import {lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Pages
const Home = lazy(() => import("./Pages/Home.tsx"));
const About = lazy(() => import("./Pages/About.tsx"));
const Contact = lazy(() => import("./Pages/Contact.tsx"));
const Platerie = lazy(() => import("./Pages/Platerie.tsx"));
const NotFound = lazy(() => import("./Pages/NotFound.tsx"));
const Peinture = lazy(() => import("./Pages/Peinture.tsx"));
const Vitrerie = lazy(() => import("./Pages/Vitrerie.tsx"));
const Menuiserie = lazy(() => import("./Pages/Menuiserie.tsx"));
const Revetement = lazy(() => import("./Pages/Revetement.tsx"));
const Electricite = lazy(() => import("./Pages/Electricite.tsx"));
const Serrurerie = lazy(() => import("./Pages/SerrurerieLille.tsx"));
const PoseSerrure = lazy(() => import("./Pages/SerrurerieArras.tsx"));
const SerrurerieDouai = lazy(() => import("./Pages/SerrurerieDouai.tsx"));
const TravauxRenovation = lazy(() => import("./Pages/TravauxRenovation.tsx"));
const IsolateurInterieure = lazy(() => import("./Pages/IsolationInterieure.tsx"));
const ReparationPlomberie = lazy(() => import("./Pages/ReparationPlomberie.tsx"));
const SerrurerieDunkerque = lazy(() => import("./Pages/SerrurerieDunkerque.tsx"));
const DepannageSerrurerie = lazy(() => import("./Pages/SerrurerieValenciennes.tsx"));
const SerrurerieArmentieres = lazy(() => import("./Pages/SerrurerieArmentieres.tsx"));
const SerrurerieTourcoing = lazy(() => import("./Pages/SerrurerieTourcoing.tsx"));
const SerrurerieVilleneuve = lazy(() => import("./Pages/SerrurerieVilleneuve.tsx"));
const SerrurerieWatrelos = lazy(() => import("./Pages/SerrurerieWatrelos.tsx"));
const SerrurerieLanbersart = lazy(() => import("./Pages/SerrurerieLanbersart.tsx"));
const SerrurerieMadeleine = lazy(() => import("./Pages/SerrurerieMadeleine.tsx"));

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
                <Route path="/serrurier" element={<Serrurerie/>}/>
                <Route path="/electricite" element={<Electricite/>}/>
                <Route path="/pose-serrure" element={<PoseSerrure/>}/>
                <Route path="/revetement-sol" element={<Revetement/>}/>
                <Route path="/serrurier-douai" element={<SerrurerieDouai/>}/>
                <Route path="/travaux-de-renovation" element={<TravauxRenovation/>}/>
                <Route path="/isolateur-interieure" element={<IsolateurInterieure/>}/>
                <Route path="/reparation-plomberie" element={<ReparationPlomberie/>}/>
                <Route path="/depannage-serrurier" element={<DepannageSerrurerie/>}/>
                <Route path="/serrurier-dunkerque" element={<SerrurerieDunkerque/>}/>

                <Route path="/serrurier-armentieres" element={<SerrurerieArmentieres/>}/>
                <Route path="/serrurier-tourcoing" element={<SerrurerieTourcoing/>}/>
                <Route path="/serrurier-villeneuve-ascq" element={<SerrurerieVilleneuve/>}/>
                <Route path="/serrurier-Watrelos" element={<SerrurerieWatrelos/>}/>
                <Route path="/serrurier-lanbersart" element={<SerrurerieLanbersart/>}/>
                <Route path="/serrurier-madeleine" element={<SerrurerieMadeleine/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}