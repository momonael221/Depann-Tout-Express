import {HiHome} from "react-icons/hi";
import {Breadcrumb, Button} from "flowbite-react";

import Platr1 from '../assets/img/platerie1.jpg'
import Platr2 from '../assets/img/platerie2.jpg'

export default function Platerie() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-light">Plâtrerie</h2>
                    <Breadcrumb aria-label="Chemin de sous-page">
                        <Breadcrumb.Item href="/" icon={HiHome}>Page d'accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Plâtrerie</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-10 lg:my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Confiez-nous vos projets de
                                plâtrerie <span className="font-light">à Roubaix et dans les environs</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous êtes à la recherche de plaquistes qualifiés pour rénover votre maison ? Les travaux de
                            plâtrerie contribuent à une meilleure isolation de votre habitation.</p>
                        <p>En outre, une isolation efficace vous permet d'améliorer vos performances thermiques.
                            Diminuez également les nuisances sonores et réduisez significativement votre facture de
                            chauffage !</p>
                        <p>L'entreprise AAB Depann Tout Express intervient pour vos travaux de rénovation ou pour vos
                            nouveaux aménagements intérieurs.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-10 lg:my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous employons des matériaux de
                                qualité <span className="font-light">pour réaliser vos projets</span></h2>
                            <p className={"text-lg"}>Vous envisagez de réorganiser votre espace ou de créer une pièce
                                supplémentaire dans votre logement ?
                                Nos experts vous conseillent et trouvent des solutions adaptées à vos exigences et à
                                votre budget.</p>
                            <div>
                                <p>Nous proposons :</p>
                                <ul className="list-disc ml-10">
                                    <li>la mise en place de faux plafonds ;</li>
                                    <li>la <strong>pose de cloisons sèches</strong> (notamment pour l'aménagement de vos
                                        combles perdus) ;
                                    </li>
                                    <li>les enduits de plâtre traditionnels ;</li>
                                    <li>la création d'escaliers sur voûte sarrasine.</li>
                                </ul>
                            </div>
                            <Button href={"/electricite"} className={"max-w-sm"} size={"xl"} pill outline>Travaux d'électricité </Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"rounded-lg"} src={Platr1} alt={Platr1}/>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-gray-100 dark:bg-gray-800 py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <img className={"rounded-lg"} src={Platr2} alt={Platr2}/>
                    </div>
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Choisir notre entreprise <span
                                className="font-light">offre de nombreuses assurances</span></h2>
                            <p className={"text-lg"}>Présents à vos côtés depuis de nombreuses années, notre équipe
                                polyvalente
                                et rigoureuse intervient à Lille et ses environs dans les plus brefs délais. Que vous
                                soyez un particulier, un professionnel ou le représentant d’une collectivité.</p>
                            <p className={"text-lg"}>À noter : tous nos travaux sont couverts par la garantie
                                décennale et sont conformes à la réglementation thermique 2012.</p>
                            <Button href={"/reparation-plomberie"} className={"max-w-sm"} size={"xl"} pill outline>Services de peinture</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Contactez-nous pour <span
                                className="font-light">vos projets de rénovation</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous souhaitez obtenir des informations supplémentaires ? Vous aimeriez recevoir un devis
                            gratuit et détaillé pour estimer le coût de vos travaux ? Contactez Depann Tout Express
                            via notre formulaire ou par téléphone.</p>
                        <p>Vous voulez en savoir plus sur nos services ? Nous intervenons pour vos
                            travaux de plomberie, d'isolation, d'électricité, de vitrerie ou encore pour la pose de
                            revêtements.</p>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <Button href={"/contact"} size={"xl"} className={"max-w-xs"} pill outline>Joindre notre équipe</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}