import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";
import Contact from "../assets/img/contact.jpg";

export default function Peinture() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Peinture</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Peinture</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous réalisons vos travaux de
                                peinture <span className="font-light">à Roubaix et alentour</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous souhaitez repeindre votre plafond, mais ce dernier est très haut ou difficile d’accès?
                            L’entreprise AAB Depann Tout Express propose ses services aux professionnels, aux
                            collectivités et aux particuliers pour les travaux de peinture intérieure et de
                            décoration.</p>
                        <p>Nos experts vous conseillent et assurent la mise en peinture soignée de votre logement, de
                            vos bureaux ou de vos locaux professionnels: des murs au plafond!</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Une équipe rigoureuse et réactive <span className="font-light">et des matériaux d’excellente qualité</span></h2>
                            <p className={"text-lg"}>Vous avez envie de redonner de l’éclat à votre séjour? Vous venez de rénover votre salle de bains et d’optimiser l’isolation de votre maison: vous aimeriez maintenant repeindre les murs abîmés des pièces qui ont subi les conséquences de l’humidité durant des années?</p>
                            <p className={"text-lg"}>Notre équipe intervient rapidement et réalise vos travaux en utilisant exclusivement des matériaux durables et d’excellente qualité.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Votre projet de rénovation</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous vous conseillons quant au <span
                                className="font-light">choix des coloris et textures</span></h2>
                            <p className={"text-lg"}>Vous souhaitez redécorer votre appartement, mais n’arrivez pas à définir le style qui vous plairait et conviendrait à votre bâti ?</p>
                            <p className={"text-lg"}>Parce qu’il existe une infinité de coloris, de textures, de finitions et de gammes de peintures, nos experts se tiennent à votre disposition et vous conseillent à chaque étape de votre projet.</p>
                            <p>Nous vous rendons un chantier propre dans le respect des délais prévus.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Installation de vos menuiseries</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Un interlocuteur unique à votre écoute <span
                                className="font-light">tout au long de votre projet</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Afin de faciliter la communication tout au long de votre projet, un interlocuteur unique se tient à votre disposition et vous informe régulièrement de l’avancée de votre chantier. Il est par ailleurs disponible pour répondre à toutes vos questions techniques et vos questions concernant nos délais d’intervention, nos tarifs ou nos prestations.</p>
                        <p>Vous avez rénové les murs et le plafond de vos pièces? Sachez que nous assurons également la pose de revêtements de sol.</p>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <Button size={"xl"} pill outline>Contactez nos experts!</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}