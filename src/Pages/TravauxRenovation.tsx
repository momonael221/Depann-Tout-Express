import {HiHome} from "react-icons/hi";
import {Breadcrumb, Button} from "flowbite-react";

import Assistant from "../assets/img/assistant.jpg"
import Cuisine1 from "../assets/img/interior-poster-modern-kitchen.jpg"
import Cuisine2 from "../assets/img/3d-rendering-white-minimal-kitchen-with-wood-decoration.jpg"

export default function TravauxRenovation() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Travaux de rénovation</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Travaux de rénovation</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Envisagez-vous des travaux de rénovation <span className="font-light">à proximité de Roubaix?</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <p>Souhaitez-vous moderniser, réaménager ou rendre votre logement plus confortable?</p>
                        <p>Depann Tout Express intervient dans les environs de Lille, Marcq-en-Barœul, Villeneuve-d'Ascq et Tourcoing, ainsi que dans le département du Nord, pour vos <strong>projets de rénovation</strong>:</p>
                        <ul className="list-disc ml-10">
                            <li>Isolation intérieure de votre logement</li>
                            <li>Installation de revêtements</li>
                            <li>Travaux de plomberie</li>
                            <li>Travaux électriques</li>
                            <li>Travaux de menuiserie</li>
                            <li>Travaux de peinture</li>
                            <li>Travaux de vitrerie</li>
                            <li>Travaux de plâtrerie</li>
                            <li>Réhabilitation après un sinistre</li>
                            <li>Services de maintenance immobilière destinés aux syndicats de copropriété...</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Avec l'assistance de nos experts,<span className="font-light">réalisez votre projet de rénovation</span></h2>
                            <p className={"text-lg"}>Vous avez du mal à concrétiser votre projet ? Vous souhaitez obtenir des conseils avant de commencer vos travaux de rénovation?</p>
                            <p>Notre équipe se rend rapidement chez vous pour effectuer une étude gratuite et personnalisée.</p>
                            <p>Notre objectif est de comprendre vos besoins pour vous offrir des solutions personnalisées, en respectant votre budget. Ensuite, nous planifions notre intervention en collaboration avec vous.</p>
                            <Button href={"/pose-serrure"} className={"max-w-sm"} size={"xl"} pill outline>Nous posons vos revêtements</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"w-full h-full min-h-[400px] max-h-[400px] object-cover rounded-lg"} src={Cuisine1} alt={Cuisine1}/>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-gray-100 py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <img className={"w-full h-full min-h-[400px] max-h-[400px] object-cover rounded-lg"} src={Cuisine2} alt={Cuisine2}/>
                    </div>
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Contactez-nous pour bénéficier de nos services et <span className="font-light">embellir l'intérieur de votre logement grâce à nos travaux de rénovation</span></h2>
                            <p className={"text-lg"}>Souhaitez-vous moderniser votre domicile, vos bureaux ou votre commerce ? Vous visez à améliorer leurs performances thermiques ? Nous proposons des services de rénovation intérieure partielle ou complète pour répondre à vos besoins.</p>
                            <p>Par le biais de travaux de plâtrerie, notamment la pose de cloisons, nous réorganisons vos espaces et avons la capacité de créer des ouvertures pour l'installation de nouvelles menuiseries.</p>
                            <Button href={"/isolateur-interieure"} className={"max-w-sm"} size={"xl"} pill outline>Travaux de peinture intérieure</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous réalisons vos travaux de rénovation selon <span className="font-light">les normes les plus strictes</span></h2>
                            <p className={"text-lg"}>Notre équipe, sérieuse, réactive et polyvalente, est à votre écoute pour tous vos projets. Contactez-nous chez Depann Tout Express ! Nous offrons également des solutions de paiement facilitées et sommes là pour répondre à toutes vos questions.</p>
                            <p>En outre, pour vous garantir des prestations de haute qualité, nous collaborons avec les principales marques réputées du secteur de la rénovation.</p>
                            <Button href={"/contact"} className={"max-w-sm"} size={"xl"} pill outline>Devis de rénovation</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"w-full h-full min-h-[400px] max-h-[400px] object-cover rounded-lg"} src={Assistant} alt={Assistant}/>
                    </div>
                </div>
            </div>
        </section>
    </>
}