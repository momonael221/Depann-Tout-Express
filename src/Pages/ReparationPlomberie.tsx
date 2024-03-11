import {HiHome} from "react-icons/hi";
import Contact from "../assets/img/contact.jpg";
import {Breadcrumb, Button} from "flowbite-react";

export default function ReparationPlomberie() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Réparation plomberie</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Réparation plomberie</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Installation et réparations de
                                plomberie <span className="font-light">à Roubaix et ses environs</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>L’aménagement d’une salle de bains passe aussi par des travaux de plomberie, le raccordement
                            aux arrivées d’eau et la mise en place de systèmes d’évacuation.</p>
                        <p>La société AAB Depann Tout Express assure ainsi l’installation, l’entretien, le dépannage et
                            la remise aux normes de vos <strong>installations sanitaires</strong>.</p>
                        <p>Nous intervenons dans un rayon d’environ 60 km de Roubaix, Marcq-en-Barœul,
                            Villeneuve-d'Ascq, Lille et Tourcoing, pour les particuliers, les professionnels et les
                            collectivités.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous intervenons pour votre projet
                                de <span className="font-light">rénovation de salle de bains clé en main</span></h2>
                            <p className={"text-lg"}>Vous faites construire votre logement individuel? Vous aimeriez
                                rendre votre salle de bains plus moderne ou plus fonctionnelle? Vous souhaitez remplacer
                                votre ancienne baignoire par une douche à l’italienne ou une douche adaptée PMR (pour
                                les personnes à mobilité réduite)?</p>
                            <p>Contactez la société AAB Depann Tout Express pour la réalisation de vos <strong>travaux
                                de plomberie</strong>, en neuf et en rénovation.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Rénovation énergétique</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"rounded-lg"} src={Contact} alt={Contact}/>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-gray-100 py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <img className={"rounded-lg"} src={Contact} alt={Contact}/>
                    </div>
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Quels sont les <span className="font-light">équipements installés par nos professionnels?</span></h2>
                            <p className={"text-lg"}>Notre équipe assure l’installation et le raccordement de vos vasques, lavabos, éviers, douches, baignoires, bidets, W.-C. au sol ou W.-C. suspendus… et tout ce qui a trait à la <strong>robinetterie</strong>.</p>
                            <p>Nous intervenons dans le respect des réglementations en vigueur. Enfin, tous nos travaux sont couverts par la garantie décennale.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Rénovation électrique</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-gray-100 py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Notre équipe assure l'installation et le <span className="font-light">remplacement de cumulus</span></h2>
                            <p className={"text-lg"}>Vous envisagez de remplacer votre chauffe-eau? Votre appareil est tombé en panne? AAB Depann Tout Express est à votre service et assure la pose, l’entretien et le dépannage de votre cumulus. En tenant compte du nombre de personnes vivant sous votre toit et de vos besoins en eau chaude, nos experts vous conseillent quant à la taille de chauffe-eau à privilégier.</p>
                            <p>Dans le cadre de votre projet de rénovation, n’hésitez pas à nous contacter également pour vos travaux de plâtrerie, de peinture ou encore de remplacement de vitres.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Besoin d'un conseil?</Button>
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