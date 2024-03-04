import { HiHome } from 'react-icons/hi';
import {Breadcrumb} from "flowbite-react";

export default function About() {
    return <>
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 text-2xl font-light">À propos</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>À propos</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </div>

        <div className="container mx-auto my-10">
            <div className="grid grid-cols-2 gap-10">
                <div className="col-span-1">
                    <div className="flex flex-col space-y-8">
                        <h2 className={"text-cyan-700 text-3xl font-bold"}>Prenez rendez-vous avec notre serrurier <span
                            className="font-light">à Roubaix et alentour</span></h2>
                    </div>
                </div>
                <div className="col-span-1">
                    <p>Nos artisans expérimentés dans leur métier interviennent à Marcq-en-Barœul, Villeneuve-d'Ascq, Lille et Tourcoing, 7j/7, 24h/24 pour vos travaux, et notamment pour:</p>
                    <ul className="list-disc ml-10">
                        <li>les travaux de serrurerie, de plâtrerie et de vitrerie;</li>
                        <li>le dépannage de serrurerie;</li>
                        <li>la rénovation et la pose de revêtements;</li>
                        <li>la mise en peinture de vos locaux ou de votre logement;</li>
                        <li>les travaux d’électricité, d’isolation et de plomberie;</li>
                        <li>la pose et le remplacement de menuiseries…</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}