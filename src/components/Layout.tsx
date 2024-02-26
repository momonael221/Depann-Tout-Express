import React from "react";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";

interface Props {
    children: React.ReactNode
}

export default function Layout({children}: Props) {
    return <div className="relative bg-white text-gray-600 antialiased dark:bg-gray-900 dark:text-gray-400">
        <Navbar/>
        <main>
            {children}
        </main>
        <Footer/>
    </div>
}