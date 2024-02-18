export default function Navbar() {
    return (
        <nav className="bg-white border-b-2 border-gray-200">
            <div className="container mx-auto flex items-center justify-between">
                <a href="#">
                    <img className="w-20 h-20 object-contain" src="/logo.jpg" alt="logo"/>
                </a>
                <ul className="flex items-center space-x-10">
                    <li><a href="#" className="text-lg font-light text-gray-600 hover:text-blue-600 transition-colors duration-500 ease-in-out">Accueil</a></li>
                    <li><a href="#" className="text-lg font-light text-gray-600 hover:text-blue-600 transition-colors duration-500 ease-in-out">Serrurerie</a></li>
                    <li><a href="#" className="text-lg font-light text-gray-600 hover:text-blue-600 transition-colors duration-500 ease-in-out">Travaux de rénovation</a></li>
                    <li><a href="#" className="text-lg font-light text-gray-600 hover:text-blue-600 transition-colors duration-500 ease-in-out">Plomberie</a></li>
                    <li><a href="#" className="text-lg font-light text-gray-600 hover:text-blue-600 transition-colors duration-500 ease-in-out">Vitrerie</a></li>
                    <li><a href="#" className="text-lg font-light text-gray-600 hover:text-blue-600 transition-colors duration-500 ease-in-out">Isolation intérieure</a></li>
                    <li><a href="#" className="text-lg font-light text-gray-600 hover:text-blue-600 transition-colors duration-500 ease-in-out">À propos</a></li>
                    <li><a href="#" className="text-lg font-light text-gray-600 hover:text-blue-600 transition-colors duration-500 ease-in-out">Contactez  nous </a></li>
                </ul>
            </div>
        </nav>
    );
}