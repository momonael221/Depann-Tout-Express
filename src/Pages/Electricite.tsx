import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";
import Contact from "../assets/img/contact.jpg";

export default function Electricite() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Électricité</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Électricité</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Électricité: travaux et remise aux normes
                                de vos réseaux <span className="font-light">à Roubaix</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Depuis de nombreuses années, la société AAB Depann Tout Express se tient à vos côtés pour de
                            multiples prestations liées à la <strong>rénovation immobilière</strong>, et notamment pour
                            la remise aux normes et les travaux dans le domaine de l’électricité.</p>
                        <p>Nous intervenons à Roubaix, où nous sommes implantés, et dans un rayon d’environ 60km autour
                            de Lille, dans le département du Nord (59).</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Sécurité et votre confort: <span
                                className="font-light">faites le choix d’un réseau électrique fiable</span></h2>
                            <p className={"text-lg"}>Vous venez d’emménager dans une maison ancienne? Les installations
                                électriques doivent être rénovées, ou en tout cas vérifiées? Votre tableau électrique
                                n’est pas aux normes? Notre équipe se tient à votre disposition.</p>
                            <p className={"text-lg"}>En effet, le bon entretien de vos installations électriques est
                                essentiel, car il favorise leur longévité et un fonctionnement optimal. Il permet
                                également d’assurer votre sécurité et de vous épargner tout incident.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Rénovez votre habitation !</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"rounded-lg"} src={Contact} alt={Contact}/>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-gray-100 dark:bg-gray-800 py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <img className={"rounded-lg"} src={Contact} alt={Contact}/>
                    </div>
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous réalisons un diagnostic
                                approfondi <span className="font-light">de votre situation</span></h2>
                            <p>Dans un premier temps, nous effectuons un diagnostic permettant d'évaluer les travaux
                                électriques à réaliser.</p>
                            <div>
                                <p>Dans un second temps, nous intervenons chez vous ou dans vos locaux
                                    professionnels:</p>
                                <ul className="list-disc ml-10">
                                    <li>pose d’éclairage extérieur;</li>
                                    <li>mise en place de tableaux électriques;</li>
                                    <li>mise en conformité de vos installations;</li>
                                    <li>pose en neuf;</li>
                                    <li>électricité générale…</li>
                                </ul>
                            </div>
                            <p>Nos équipes s’adaptent à toutes vos demandes!</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Vos travaux de plomberie</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Contactez notre entreprise <span className="font-light">spécialiste des travaux d’électricité</span></h2>
                            <p className={"text-lg"}>Vous avez subi un sinistre à cause d’un appareil obsolète ou d’une installation défectueuse? Vous recherchez un professionnel du dépannage pour une urgence électrique?</p>
                            <p className={"text-lg"}>Nous sommes disponibles 7j/7 et 24h/24. Contactez-nous par téléphone ou en utilisant notre formulaire.</p>
                            <p>Après la réalisation d’une étude approfondie de vos besoins et avant toute intervention, nous rédigeons à votre intention un devis gratuit et détaillé. Il nous permet d'estimer le coût de vos travaux à réaliser.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Devis de travaux électriques</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"rounded-lg"} src={Contact} alt={Contact}/>
                    </div>
                </div>
            </div>
        </section>
    </>
}