import {HiHome} from "react-icons/hi";
import {Breadcrumb, Button} from "flowbite-react";

import Plomberie1 from "../assets/img/plomberie1.jpg";
import Plomberie2 from "../assets/img/plomberie2.jpg";
import Plomberie3 from "../assets/img/plomberie3.jpg";

export default function ReparationPlomberie() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Plomberie Professionnels</h2>
                    <Breadcrumb aria-label="Chemin de sous-page">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Plomberie Professionnels</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-10 lg:my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Installation et Maintenance de
                                Plomberie <span className="font-light">dans toute la région de Haut de France</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>La conception d'une salle de bains implique des travaux de plomberie, comme le raccordement
                            aux conduites d'eau et l'installation de systèmes d'évacuation.</p>
                        <p>Notre entreprise, Depann Tout Express, se charge de l'installation, de la maintenance, du
                            dépannage et de la mise en conformité de vos <strong>installations sanitaires</strong>.</p>
                        <p>Nous intervenons dans un rayon d'environ 60 km autour de Roubaix, Marcq-en-Barœul,
                            Villeneuve-d'Ascq, Lille et Tourcoing, pour les particuliers, les entreprises et les
                            collectivités.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full pb-10 lg:pb-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous sommes à votre service pour votre
                                projet
                                de <span className="font-light">rénovation complète de salle de bains</span></h2>
                            <p className={"text-lg"}>Vous construisez votre maison individuelle ? Vous voulez moderniser
                                votre salle de bains ou la rendre plus fonctionnelle ? Vous envisagez de remplacer votre
                                vieille baignoire par une douche à l'italienne ou une douche adaptée aux PMR (personnes
                                à mobilité réduite) ?</p>
                            <p>Faites appel à Depann Tout Express pour la réalisation de vos <strong>travaux de
                                plomberie</strong>, en neuf comme en rénovation.</p>
                            <Button href={"/isolateur-interieure"} className={"max-w-sm"} size={"xl"} pill outline>Rénovation Énergétique</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"object-cover rounded-lg w-full max-h-[400px]"} src={Plomberie1} alt={Plomberie1}/>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-gray-100 dark:bg-gray-800 py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <img className={"object-cover rounded-lg w-full max-h-[400px]"} src={Plomberie2} alt={Plomberie2}/>
                    </div>
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Quels sont les <span
                                className="font-light">équipements que nos experts installent ?</span></h2>
                            <p className={"text-lg"}>Notre équipe est spécialisée dans l'installation et le raccordement
                                de vos
                                vasques, lavabos, éviers, douches, baignoires, bidets, W.-C. au sol ou W.-C. suspendus…
                                et tout ce qui concerne la <strong>robinetterie</strong>.</p>
                            <p>Nous travaillons dans le respect des normes en vigueur. De plus, tous nos travaux
                                sont couverts par la garantie décennale.</p>
                            <Button href={"/electricite"} className={"max-w-sm"} size={"xl"} pill outline>Travaux d'électricité</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Notre équipe est spécialisée dans
                                l'installation et
                                le <span className="font-light">remplacement de chauffe-eau</span></h2>
                            <p className={"text-lg"}>Vous envisagez de changer votre chauffe-eau ? Votre appareil est
                                en panne ? Depann Tout Express est à votre disposition pour l'installation,
                                l'entretien et le dépannage de votre chauffe-eau. En tenant compte du nombre de
                                personnes
                                dans votre foyer et de vos besoins en eau chaude, nos experts vous conseilleront sur
                                la capacité du chauffe-eau à choisir.</p>
                            <p>Pour votre projet de rénovation, n'hésitez pas à nous contacter également
                                pour vos travaux de plâtrerie, de peinture ou encore de remplacement de vitres.</p>
                            <Button href={"/contact"} className={"max-w-sm"} size={"xl"} pill outline>Vous avez besoin d'un conseil ?</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"object-cover rounded-lg w-full max-h-[400px]"} src={Plomberie3} alt={Plomberie3}/>
                    </div>
                </div>
            </div>
        </section>
    </>
}