import {lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Pages
const Home = lazy(() => import("./Pages/Home.tsx"));

export function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}