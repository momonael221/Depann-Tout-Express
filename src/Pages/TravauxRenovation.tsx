import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";
import Contact from "../assets/img/contact.jpg";

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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>
                                Vous souhaitez réaliser des travaux de rénovation
                                <span className="font-light">près de Roubaix?</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <p>Vous aimeriez moderniser, réagencer votre habitat ou le rendre plus confortable?</p>
                        <p>La société AAB Depann Tout Express intervient autour de Lille, Marcq-en-Barœul,
                            Villeneuve-d'Ascq et Tourcoing, et dans le département du Nord, pour vos <strong>travaux de
                                rénovation</strong>:</p>
                        <ul className="list-disc ml-10">
                            <li>isolation intérieure</li>
                            <li>pose de revêtements</li>
                            <li>plomberie</li>
                            <li>électricité</li>
                            <li>menuiserie</li>
                            <li>peinture</li>
                            <li>vitrerie</li>
                            <li>plâtrerie</li>
                            <li>remise en état après sinistre</li>
                            <li>maintenance immobilière à l’attention des syndicats de copropriété…</li>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Grâce à l’aide nos experts, <span
                                className="font-light">concrétisez votre projet de rénovation</span></h2>
                            <p className={"text-lg"}>Vous n’arrivez pas à donner forme à votre projet? Vous aimeriez
                                être conseillé avant d’engager vos travaux de rénovation?</p>
                            <p>Notre équipe se déplace à votre domicile dans les meilleurs délais afin de réaliser pour
                                vous une étude gratuite et personnalisée.</p>
                            <p>Notre but: comprendre vos besoins afin de vous proposer des solutions sur mesure, dans le
                                respect de votre budget. Nous planifions ensuite avec vous notre intervention.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Nous posons vos revêtements</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Faites appel à nos services pour <span
                                className="font-light">embellir et rénover l’intérieur de votre logement</span></h2>
                            <p className={"text-lg"}>Vous aimeriez remettre votre habitat, vos bureaux ou votre commerce
                                au goût du jour? Vous souhaitez en optimiser les performances thermiques? Nous
                                intervenons pour les rénovations intérieures partielles ou les rénovations intérieures
                                complètes de bâtiment.</p>
                            <p>Grâce aux travaux de plâtrerie, et notamment à la pose de cloisons, nous réaménageons vos
                                espaces et sommes en mesure de créer des ouvertures pour y installer de nouvelles
                                menuiseries.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Travaux de peinture
                                intérieure</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous entreprenons vos travaux de rénovation <span
                                className="font-light">dans les règles de l’art</span></h2>
                            <p className={"text-lg"}>Sérieux, réactifs et polyvalents, nous nous tenons à l’écoute de vos projets. Contactez AAB Depann Tout Express! Nous proposons par ailleurs des solutions pour faciliter le paiement et répondons à toutes vos questions</p>
                            <p>Enfin, sachez que, dans le but de vous fournir des prestations d’excellence, nous travaillons avec les plus grandes marques du marché de la rénovation.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Devis de rénovation</Button>
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