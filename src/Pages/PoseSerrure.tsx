import {HiHome} from "react-icons/hi";
import {Breadcrumb, Button} from "flowbite-react";

import Serrure1 from "../assets/img/door-closed.jpg"
import Serrure2 from "../assets/img/key-door-lock-still-life.jpg"

export default function PoseSerrure() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-light">Pose de serrurerie</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Pose de serrurerie</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-10 lg:my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Notre équipe se charge de l'installation de serrures <span className="font-light">à Roubaix et dans ses environs</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Pour assurer la protection optimale de vos biens et de votre famille, prévenez toute tentative d'intrusion en optant pour l'installation de serrures robustes et hautement sécurisées.</p>
                        <div>
                            <p>Nous vous offrons des conseils personnalisés qui prennent en compte vos besoins et vos contraintes budgétaires:</p>
                            <ul className="list-disc ml-10">
                                <li>Serrures avec système de verrouillage à clé à 3, 5 ou 7 points.</li>
                                <li>Serrures à combinaison numérique.</li>
                                <li>Serrures utilisant des cartes d'accès.</li>
                                <li>Serrures fonctionnant à l'électricité.</li>
                                <li>Serrures utilisant un mécanisme magnétique.</li>
                                <li>Serrures de sortie de secours.</li>
                                <li>Serrures intelligentes connectées...</li>
                            </ul>
                        </div>
                        <p>Il existe une variété de modèles pour répondre à vos besoins. Nous nous ajustons à vos exigences en termes de sécurité pour votre domicile ou vos locaux professionnels.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-10 lg:my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Des équipements contemporains, <span
                                className="font-light">solides et fiables</span></h2>
                            <p className={"text-lg"}>Nos équipements sont agréés par des marques réputées dans le secteur de la serrurerie. Si nécessaire, nous effectuons le remplacement du pêne jusqu'au verrou, garantissant ainsi la résistance de votre système contre le perçage et l'effraction.</p>
                            <p className={"text-lg"}>N'hésitez pas à nous contacter dès maintenant pour organiser vos travaux ou pour un dépannage rapide, que vous soyez un particulier ou un professionnel.</p>
                            <Button href={"/depannage-serrurerie"} className={"max-w-sm"} size={"xl"} pill outline>Nous dépannons votre serrure</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"rounded-lg"} src={Serrure1} alt={Serrure1}/>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-gray-100 dark:bg-gray-800 py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <img className={"rounded-lg"} src={Serrure2} alt={Serrure2}/>
                    </div>
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous garantissons la mise en place de <span className="font-light">cylindres offrant</span> un niveau de sécurité élevé.</h2>
                            <p>Pour contrer efficacement le crochetage et l'arrachage de portes, nous mettons en place des clés et des <strong>cylindres brevetés</strong> conformes aux normes françaises et européennes en matière de qualité. Optez pour la meilleure qualité de sécurité disponible sur le marché !</p>
                            <p>Les cylindres que nous posons renforcent votre porte d'entrée en offrant différents niveaux de protection, le plus élevé étant le barillet de haute sécurité.</p>
                            <Button href={"/serrurerie"} className={"max-w-sm"} size={"xl"} pill outline>Serrurerie</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-10 lg:my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Pour une intervention de qualité, <span className="font-light">contactez Depann Tout Express</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous souhaitez planifier un rendez-vous ? Vous avez besoin de conseils ou d'informations supplémentaires sur les systèmes de sécurité à privilégier?</p>
                        <p>La société AAB Depann Tout Express est là pour vous! N'hésitez pas à contacter nos experts qualifiés et expérimentés : ils seront ravis de répondre à toutes vos questions.</p>
                        <p>Enfin, nous proposons une étude personnalisée et gratuite sur demande.</p>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <Button href={"/contact"} className={"max-w-xs"} size={"xl"} pill outline>Une pose de serrure?</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}