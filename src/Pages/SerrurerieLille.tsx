import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";

import Verrou from "../assets/img/verrou.jpg";
import Serrurier from "../assets/img/serrurier.jpg";
import Contact from "../assets/img/ville-lille_1_2000.webp";

export default function Serrurerie() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-light">Serrurerie Lille</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Serrurerie</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-10 lg:my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Pour tout dépannage en serrurerie sur Lille et aux environs, <span className="font-light">vous pouvez nous contacter dans toute la région haut de France. Nous intervenons sur lille et son aglomération, Nous intervenons en urgence ou sur rendez-vous 24H/24, 7J/7 en dépannage de serrure sur Lille , Réparation de serrures à roubaix, Installations de Portes Blindés à Marcq-en-Barœul   et ou Mons-en-Baroeul  Serrurier agrée assurance sur Villeneuve d'Ascq  Poser une serrure ou un verrou sur tourcoing, et dans toutes les communes aux alentours comme Neuville-en-ferain, Loos, Watrellos, Wattignies, Verlinghem, Annoeulilin, Armentières, Beaucamps-Ligny, Leers, Lambersart, Houplines, lesquin, Lezennes etc...</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>
                            À la recherche d'une entreprise capable d'installer et de réparer tous types de serrures ? Que votre porte soit bloquée ou qu'elle ait été forcée lors d'un cambriolage, la société Depann Tout Express prend en charge vos travaux de serrurerie pour garantir votre sécurité et votre protection. En cas d'effraction ou de tentative, il est crucial de réparer votre serrure rapidement afin de sécuriser votre domicile. Les serruriers de Depann Tout Express  sont spécialisés dans la réparation de serrures après une effraction et peuvent vous conseiller sur les meilleures options pour renforcer la sécurité de votre domicile en installant des serrures plus robustes et résistantes aux tentatives de cambriolage. Nous intervenons en urgence ou sur rendez-vous en dépannage de serrure sur Lille et aux alentours.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-10 lg:my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>À la recherche d'un serrurier pour l'installation d'une serrure ou d'un verrou ?</h2>
                            <p className={"text-lg"}>Si vous avez besoin d'un dépannage de serrure à Lille, d'une ouverture de porte claquée à Roubaix, vous êtes au bon endroit ! L'entreprise Depann Tout Express dispose de professionnels compétents prêts à vous aider dans ces situations délicates. Que votre cylindre de serrure soit grippé ou que vous souhaitiez remplacer le barillet de votre porte, nos experts sont là pour vous accompagner. Ils assurent notamment la pose de serrures A2P, qu'il s'agisse de serrures trois points ou cinq points.</p>
                            <p className={"text-lg"}>Nous proposons également l'installation de verrous haute sécurité ainsi que de <strong>portes blindées</strong>, assurant une véritable résistance contre les tentatives d'effraction.</p>
                            <Button href={"/pose-serrure"} className={"max-w-sm"} size={"xl"} pill outline>Pose de serrure</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"w-full max-h-[400px] object-cover rounded-lg"} src={Verrou} alt={Verrou}/>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-gray-100 dark:bg-gray-800 py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <img className={"w-full max-h-[400px] object-cover rounded-lg"} src={Contact} alt={Contact}/>
                    </div>
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Urgence serrurerie: <span
                                className="font-light">nous sommes là pour vous aider.</span></h2>
                            <p>Si vous avez égaré vos clés ou êtes victime d'un cambriolage, ou si la porte de votre maison s'est refermée et vous vous retrouvez à l'extérieur, ne tardez pas à nous contacter !</p>
                            <p>Notre serrurier est équipé des outils et possède les compétences requises pour accéder à votre domicile rapidement et en toute sécurité, sans endommager inutilement votre porte ou votre serrure.</p>
                            <p>Disponible 24h/24 et 7j/7, notre serrurier peut intervenir dans l'heure pour vos urgences de dépannage dans un rayon d'environ 60 km autour des villes de Roubaix, Lille, et dans tout le département du Nord.</p>
                            <p>Si la destruction de votre serrure est inévitable, nous mettons en place un dispositif de fermeture robuste et temporaire en attendant de procéder au remplacement permanent de votre serrure.</p>
                            <Button href={"/isolateur-interieure"} className={"max-w-sm"} size={"xl"} pill outline>Dépannage de serrurerie</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-10 lg:my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Notre serrurier se rend rapidement disponible pour assurer <span className="font-light">le dépannage de votre serrure</span></h2>
                            <p className={"text-lg"}>Besoin de conseils pour renforcer la sécurité de votre domicile ? Envie de fixer un rendez-vous sans délai ? Contactez-nous par téléphone ou par e-mail via notre formulaire de contact.</p>
                            <p className={"text-lg"}>Nous respectons les délais convenus pour nos interventions. Découvrez nos options de paiement flexibles, comme le paiement en plusieurs fois sans frais.</p>
                            <Button href={"/contact"} className={"max-w-sm"} size={"xl"} pill outline>Contactez-nous</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"object-cover rounded-lg w-full max-h-[400px]"} src={Serrurier} alt={Serrurier}/>
                    </div>
                </div>
            </div>
        </section>
    </>
}