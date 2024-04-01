import { HiHome } from 'react-icons/hi';
import {Breadcrumb} from "flowbite-react";
import IMG404 from '../assets/img/404.png';

export default function NotFound() {
    return <>
        <div className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-light">Erreur 404</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Erreur 404</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </div>

        <div className="container mx-auto text-center my-10 lg:my-20">
            <img className={"max-w-2xl max-h-2xl mx-auto w-full h-full"} src={IMG404} alt={IMG404}/>
            <span className={"text-lg lg:text-3xl"}>La page que vous recherchez n'existe pas.</span>
        </div>
    </>
}