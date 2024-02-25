import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home.tsx";

export function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}