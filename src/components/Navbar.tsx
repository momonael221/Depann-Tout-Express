import Hamburger from 'hamburger-react'
import { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <header className="flex flex-col">
            <nav className="bg-white border-b-2 border-gray-200">
                <div className="container mx-auto flex items-center justify-between">
                    <a href="#">
                        <img className="w-20 h-20 object-contain" src="/logo.jpg" alt="logo"/>
                    </a>
                    <ul className="hidden lg:flex items-center space-x-5">
                        <li><a href="#" className="text-sm xl:text-base font-normal text-gray-600 hover:text-first transition-colors duration-300 ease-in-out">Accueil</a></li>
                        <li><a href="#" className="text-sm xl:text-base font-normal text-gray-600 hover:text-first transition-colors duration-300 ease-in-out">Serrurerie</a></li>
                        <li><a href="#" className="text-sm xl:text-base font-normal text-gray-600 hover:text-first transition-colors duration-300 ease-in-out">Travaux de rénovation</a></li>
                        <li><a href="#" className="text-sm xl:text-base font-normal text-gray-600 hover:text-first transition-colors duration-300 ease-in-out">Plomberie</a></li>
                        <li><a href="#" className="text-sm xl:text-base font-normal text-gray-600 hover:text-first transition-colors duration-300 ease-in-out">Vitrerie</a></li>
                        <li><a href="#" className="text-sm xl:text-base font-normal text-gray-600 hover:text-first transition-colors duration-300 ease-in-out">Isolation intérieure</a></li>
                        <li><a href="#" className="text-sm xl:text-base font-normal text-gray-600 hover:text-first transition-colors duration-300 ease-in-out">À propos</a></li>
                        <li><a href="#" className="text-sm xl:text-base font-normal text-gray-600 hover:text-first transition-colors duration-300 ease-in-out">Contactez-nous</a></li>
                    </ul>

                    <div className="lg:hidden">
                        <Hamburger toggled={open} toggle={setOpen} color={'#797FF2'}/>
                    </div>
                </div>
                <div className={`container mx-auto overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[430px]' : 'max-h-0'}`}>
                    <ul className="flex flex-col space-y-2 mt-1 mb-4">
                        <li><a href="#" className="p-3 rounded-md inline-block focus:bg-first focus:text-white w-full text-sm xl:text-base font-medium text-gray-600 transition-colors duration-300 ease-in-out">Accueil</a></li>
                        <li><a href="#" className="p-3 rounded-md inline-block focus:bg-first focus:text-white w-full text-sm xl:text-base font-medium text-gray-600 transition-colors duration-300 ease-in-out">Serrurerie</a></li>
                        <li><a href="#" className="p-3 rounded-md inline-block focus:bg-first focus:text-white w-full text-sm xl:text-base font-medium text-gray-600 transition-colors duration-300 ease-in-out">Travaux de rénovation</a></li>
                        <li><a href="#" className="p-3 rounded-md inline-block focus:bg-first focus:text-white w-full text-sm xl:text-base font-medium text-gray-600 transition-colors duration-300 ease-in-out">Plomberie</a></li>
                        <li><a href="#" className="p-3 rounded-md inline-block focus:bg-first focus:text-white w-full text-sm xl:text-base font-medium text-gray-600 transition-colors duration-300 ease-in-out">Vitrerie</a></li>
                        <li><a href="#" className="p-3 rounded-md inline-block focus:bg-first focus:text-white w-full text-sm xl:text-base font-medium text-gray-600 transition-colors duration-300 ease-in-out">Isolation intérieure</a></li>
                        <li><a href="#" className="p-3 rounded-md inline-block focus:bg-first focus:text-white w-full text-sm xl:text-base font-medium text-gray-600 transition-colors duration-300 ease-in-out">À propos</a></li>
                        <li><a href="#" className="p-3 rounded-md inline-block focus:bg-first focus:text-white w-full text-sm xl:text-base font-medium text-gray-600 transition-colors duration-300 ease-in-out">Contactez-nous</a></li>
                    </ul>
                </div>
            </nav>
            <div className="bg-white w-full border-b border-gray-200 shadow-sm">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between py-4 space-x-1">
                        <button className="border rounded-full px-4 py-2 flex items-center space-x-4 group text-first">
                            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"/></svg>
                            <span className="group-hover:text-first text-sm xl:text-base font-normal text-gray-600 transition-colors duration-300 ease-in-out">Appelez-nous (urgences 24h/24)</span>
                        </button>
                        <button className="border flex flex-col sm:flex-row justify-center items-center space-x-4 group rounded-full w-10 h-10 sm:w-auto sm:h-auto p-1 sm:px-4 sm:py-2 bg-first sm:bg-transparent text-white sm:text-first">
                            <svg className="w-4 h-4 sm:w-6 sm:h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                            <span className="hidden sm:inline-block group-hover:text-first text-sm xl:text-base font-normal text-gray-600 transition-colors duration-300 ease-in-out">Appelez-nous</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}