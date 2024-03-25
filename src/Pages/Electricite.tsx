import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";

import Electricite1 from "../assets/img/Electricite1.jpg";
import Electricite2 from "../assets/img/Electricite2.jpg";
import Electricite3 from "../assets/img/Electricite3.jpg";

export default function Electricite() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-light">Électricité</h2>
                    <Breadcrumb aria-label="Chemin de sous-page">
                        <Breadcrumb.Item href="/" icon={HiHome}>Page d'accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Électricité</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-10 lg:my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Électricité : travaux et mise aux normes
                                de vos installations <span className="font-light">à Roubaix</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Depuis de nombreuses années, la société AAB Depann Tout Express est à vos côtés pour diverses
                            prestations liées à la <strong>rénovation immobilière</strong>, notamment pour la mise aux
                            normes et les travaux en électricité.</p>
                        <p>Nous intervenons à Roubaix, où nous sommes basés, et dans un rayon d'environ 60 km autour de
                            Lille, dans le département du Nord (59).</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-10 lg:my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Sécurité et confort : <span
                                className="font-light">optez pour un réseau électrique fiable</span></h2>
                            <p className={"text-lg"}>Vous venez d'emménager dans une maison ancienne ? Les installations
                                électriques doivent être rénovées, ou du moins vérifiées ? Votre tableau électrique
                                n'est pas aux normes ? Notre équipe est à votre service.</p>
                            <p className={"text-lg"}>En effet, un bon entretien de vos installations électriques est
                                essentiel, car il favorise leur longévité et un fonctionnement optimal. Il permet
                                également d'assurer votre sécurité et de vous éviter tout incident.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Rénovez votre maison !</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"rounded-lg"} src={Electricite1} alt={Electricite1}/>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-gray-100 dark:bg-gray-800 py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <img className={"rounded-lg"} src={Electricite2} alt={Electricite2}/>
                    </div>
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous effectuons un diagnostic
                                détaillé <span className="font-light">de votre situation</span></h2>
                            <p>Dans un premier temps, nous réalisons un diagnostic pour évaluer les travaux électriques
                                à effectuer.</p>
                            <div>
                                <p>Dans un second temps, nous intervenons chez vous ou dans vos locaux professionnels
                                    :</p>
                                <ul className="list-disc ml-10">
                                    <li>installation d'éclairage extérieur ;</li>
                                    <li>installation de tableaux électriques ;</li>
                                    <li>mise en conformité de vos installations ;</li>
                                    <li>installation neuve ;</li>
                                    <li>électricité générale…</li>
                                </ul>
                            </div>
                            <p>Nos équipes s'adaptent à toutes vos demandes !</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Vos travaux de plomberie</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Contactez notre entreprise <span
                                className="font-light">spécialisée en travaux d'électricité</span></h2>
                            <p className={"text-lg"}>Vous avez subi un sinistre à cause d'un appareil obsolète ou d'une
                                installation défectueuse ? Vous recherchez un professionnel du dépannage pour une
                                urgence électrique ?</p>
                            <p className={"text-lg"}>Nous sommes disponibles 7j/7 et 24h/24. Contactez-nous par
                                téléphone ou en utilisant notre formulaire.</p>
                            <p>Après avoir réalisé une étude approfondie de vos besoins et avant toute intervention,
                                nous rédigeons pour vous un devis gratuit et détaillé. Cela nous permet d'estimer le
                                coût des travaux à réaliser.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Devis pour travaux
                                électriques</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"rounded-lg"} src={Electricite3} alt={Electricite3}/>
                    </div>
                </div>
            </div>
        </section>
    </>
}