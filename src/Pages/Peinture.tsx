import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";

import Peinture1 from "../assets/img/peinture1.jpg";
import Peinture2 from "../assets/img/peinture2.jpg";

export default function Peinture() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Peinture</h2>
                    <Breadcrumb aria-label="Chemin de sous-page">
                        <Breadcrumb.Item href="/" icon={HiHome}>Page d'accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Peinture</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-10 lg:my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous prenons en charge vos projets de
                                peinture <span className="font-light">à Roubaix et ses environs</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous envisagez de repeindre votre plafond, mais celui-ci est très haut ou difficile d'accès ?
                            L'entreprise Depann Tout Express offre ses services aux professionnels, aux
                            collectivités et aux particuliers pour les travaux de peinture intérieure et de
                            décoration.</p>
                        <p>Nos experts vous conseillent et assurent une mise en peinture soignée de votre habitation, de
                            vos bureaux ou de vos locaux professionnels : des murs au plafond !</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-10 lg:my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Une équipe minutieuse et prompte <span
                                className="font-light">et des matériaux de haute qualité</span></h2>
                            <p className={"text-lg"}>Vous désirez redonner de la fraîcheur à votre séjour ? Vous venez
                                de rénover votre salle de bains et d'améliorer l'isolation de votre maison : vous
                                aimeriez maintenant repeindre les murs endommagés des pièces qui ont subi les effets de
                                l'humidité pendant des années ?</p>
                            <p className={"text-lg"}>Notre équipe intervient rapidement et réalise vos travaux en
                                utilisant uniquement des matériaux durables et de haute qualité.</p>
                            <Button href={"/travaux-de-renovation"} className={"max-w-sm"} size={"xl"} pill outline>Votre projet de rénovation</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"object-cover rounded-lg w-full max-h-[400px]"} src={Peinture1} alt={Peinture1}/>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-gray-100 dark:bg-gray-800 py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <img className={"object-cover rounded-lg w-full max-h-[400px]"} src={Peinture2} alt={Peinture2}/>
                    </div>
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous vous guidons dans le <span
                                className="font-light">choix des couleurs et des textures</span></h2>
                            <p className={"text-lg"}>Vous voulez redécorer votre appartement, mais vous n'arrivez pas à
                                déterminer le style qui vous plairait et qui conviendrait à votre bâtiment ?</p>
                            <p className={"text-lg"}>Comme il existe une infinité de couleurs, de textures, de finitions
                                et de gammes de peintures, nos experts sont à votre disposition et vous conseillent à
                                chaque étape de votre projet.</p>
                            <p>Nous vous livrons un chantier propre dans le respect des délais convenus.</p>
                            <Button href={"/menuiserie"} className={"max-w-sm"} size={"xl"} pill outline>Installation de vos
                                menuiseries</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Un conseiller dédié à votre service <span
                                className="font-light">durant toute la durée de votre projet</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Pour faciliter la communication tout au long de votre projet, un conseiller dédié est à votre
                            disposition et vous tient régulièrement informé de l'avancement de votre chantier. Il est
                            également disponible pour répondre à toutes vos questions techniques et vos interrogations
                            concernant nos délais d'intervention, nos tarifs ou nos services.</p>
                        <p>Vous avez rénové les murs et le plafond de vos pièces ? Sachez que nous assurons également la
                            pose de revêtements de sol.</p>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <Button href={"/contact"} size={"xl"} className={"max-w-xs"} pill outline>Contactez nos spécialistes !</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}