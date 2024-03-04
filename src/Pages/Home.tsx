import {Blockquote, Button, Carousel} from "flowbite-react";
import Card from "../components/Card.tsx"

// Images & Videos
import Isolation from '../assets/img/isolation.jpg'
import Serrurerie from '../assets/img/serrurerie.jpg'
import Plomberie from '../assets/videos/plomberie.mp4'
import Amenagement from '../assets/videos/amenagement.mp4'

import Plombing from '../assets/img/plumbing.jpg';
import Vitrerie from '../assets/img/vitrerie.jpg';
import Renovation from '../assets/img/renovation.jpg';

import Isolation2 from "../assets/img/isolation2.jpg"
import ManSerrurerie from '../assets/img/man-serrurerie.jpg';
import Toilet from '../assets/img/white-toilet-bowl-restroom.jpg';

// Icons
import Brush from "../assets/icons/brush.svg"
import People from "../assets/icons/people.svg"
import Wallet from "../assets/icons/Wallet.svg"
import Hours from "../assets/icons/24-hours.svg"
import CuttingBoard from "../assets/icons/cutting-board.svg"

export default function Home() {
    return <>
        <section>
            {/*<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">*/}
            <div className="h-[700px]">
                <Carousel pauseOnHover>
                    <div
                        className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img className="object-contain w-full" src={Serrurerie} alt="serrurerie.jpg"/>
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center space-y-6">
                            <h1 className="text-7xl text-center">Serrurerie</h1>
                            <Button color={"gray"} pill size={"xl"}>En Savoir Plus</Button>
                        </div>
                    </div>
                    <div
                        className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <video className="w-full" autoPlay muted loop>
                            <source src={Plomberie} type="video/mp4"/>
                        </video>
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center space-y-6">
                            <h1 className="text-7xl text-center">Plomberie</h1>
                            <Button color={"gray"} pill size={"xl"}>En Savoir Plus</Button>
                        </div>
                    </div>
                    <div
                        className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <video className="w-full" autoPlay muted loop>
                            <source src={Amenagement} type="video/mp4"/>
                        </video>
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center space-y-6">
                            <h1 className="text-7xl text-center">Rénovation et aménagement intérieur</h1>
                            <Button color={"gray"} pill size={"xl"}>En Savoir Plus</Button>
                        </div>
                    </div>
                    <div
                        className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img className="object-contain w-full" src={Isolation} alt="serrurerie.jpg"/>
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center space-y-6">
                            <h1 className="text-7xl text-center">Isolation intérieure</h1>
                            <Button color={"gray"} pill size={"xl"}>En Savoir Plus</Button>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div
                className="bg-cyan-700 text-white font-medium w-full flex items-center justify-center py-4 border-b dark:border-gray-800">
                <h2>Nous sommes disponibles 24h24 / 7j7</h2>
            </div>
        </section>

        <section className="my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-10">
                    <div className="col-span-1 space-y-4">
                        <Blockquote>
                            <svg
                                className="mb-4 h-8 w-8 text-gray-400 dark:text-gray-600"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 14"
                            >
                                <path
                                    d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                            </svg>
                            Notre entreprise se dévoue à fournir des services de dépannage et de rénovation de haute
                            qualité. Que ce soit pour résoudre des problèmes imprévus ou pour donner une nouvelle vie à
                            votre espace, nous sommes là pour vous. Notre équipe qualifiée et expérimentée s'engage à
                            offrir des solutions fiables et durables. La satisfaction de nos clients est notre priorité,
                            et nous travaillons avec détermination pour atteindre l'excellence dans chaque projet.
                        </Blockquote>
                        <Button color={"gray"} pill size={"xl"}>Qui sommes-nous?</Button>
                    </div>
                    <div className="col-span-1">
                        <iframe width="100%" height="365" src="https://www.youtube.com/embed/gJN20En401A"
                                title="Depann Tout Express, dépannage rapide à Roubaix." frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section className="my-20">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl font-medium mt-20">Nos domaines d’intervention</h2>
                <div className="mt-16">
                    <div className="grid grid-cols-5 gap-10">
                        <div className="col-span-1">
                            <Card img={Serrurerie} alt={Serrurerie} title="Serrurerie"/>
                        </div>
                        <div className="col-span-1">
                            <Card img={Plombing} alt={Plombing} title="Plomberie sanitaire"/>
                        </div>
                        <div className="col-span-1">
                            <Card img={Renovation} alt={Renovation} title="Aménagement"/>
                        </div>
                        <div className="col-span-1">
                            <Card img={Isolation} alt={Isolation} title="Isolation intérieure"/>
                        </div>
                        <div className="col-span-1">
                            <Card img={Vitrerie} alt={Vitrerie} title="Vitrerie"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-cyan-700 w-full my-20 py-10">
            <div className="container mx-auto space-y-10">
                <h2 className={"text-center text-white text-2xl font-bold uppercase"}>Nos points forts</h2>
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-1">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <img className="w-20 h-20" src={Hours} alt={Hours}/>
                            <span className="text-white">DISPONIBLE 24H/24 ET 7J/7</span>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <img className="w-20 h-20" src={People} alt={People}/>
                            <span className="text-white">RAPIDITE D’INTERVENTION</span>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <img className="w-20 h-20" src={Wallet} alt={Wallet}/>
                            <span className="text-white">FACILITÉS DE PAIEMENT</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="my-20 w-full">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous intervenons pour tous types de
                                travaux <span className="font-light">de serrurerie</span></h2>
                            <p className={"text-lg"}>Nous intervenons pour le <span className={"font-bold"}>dépannage de serrurerie</span> 24h/24
                                et 7j/7 et pour la pose de serrures
                                et de verrous.</p>
                            <p className={"text-lg"}>Votre maison ou appartement vient de subir une effraction et vous
                                souhaitez sécuriser les
                                lieux? À l’aide de planches en bois, en aluminium ou en acier solidement arrimées à
                                l’ouverture, nous en assurons sa fermeture provisoire.</p>
                            <Button className={"max-w-[150px]"} size={"xl"} pill outline>Serrurerie</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"rounded-lg"} src={ManSerrurerie} alt={ManSerrurerie}/>
                    </div>
                </div>
            </div>
        </section>

        <section className="my-20 w-full bg-cyan-700 text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 items-center gap-32">
                    <div className={"col-span-1 py-20"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-white text-3xl font-bold"}><span className="font-light">Notre équipe assure</span> vos
                                travaux de rénovation et d’aménagement intérieur</h2>
                            <p className={"text-lg"}>Experts en <a href="#" className="underline">travaux de
                                rénovation</a> intérieurs et extérieurs, nos artisans embellissent, agrandissent et
                                aménagent votre maison, votre appartement ou vos locaux professionnels.</p>
                            <p className={"text-lg"}>Pour une remise en état après un sinistre, la pose de revêtements
                                ou de cloisons ou encore la mise en peinture de vos murs, nous intervenons rapidement et
                                réalisons vos travaux de maintenance immobilière.</p>
                            <Button color={"light"} className={"max-w-[275px]"} size={"xl"} pill>Aménagement &
                                rénovation</Button>
                        </div>
                    </div>
                    <div className={"col-span-1 bg-cyan-600 bg-opacity-80 h-full px-14 py-10 space-y-10"}>
                        <div className={"flex flex-col"}>
                            <img className="max-w-20" src={CuttingBoard} alt={CuttingBoard}/>
                            <h2 className={"text-white text-xl font-normal mb-4"}>Pose de revêtements, plâtrerie et
                                électricité</h2>
                            <div className="flex flex-col space-y-5 font-light">
                                <p className={"text-sm"}>La société AAB Depann Tout Express assure la pose de parquet
                                    flottant, de parquet massif, de moquette et de sol en vinyle.</p>
                                <p className={"text-sm"}>Vous souhaitez réaménager votre espace? Nous assurons la pose
                                    ou,
                                    au contraire, la destruction de cloisons pour créer de nouvelles pièces.</p>
                                <p className={"text-sm"}>Enfin, notre équipe intervient pour vos travaux d’électricité,
                                    et
                                    notamment pour la mise aux normes de votre réseau.</p>
                            </div>
                        </div>
                        <div className={"flex flex-col"}>
                            <img className="max-w-20 mb-5" src={Brush} alt={Brush}/>
                            <h2 className={"text-white text-xl font-normal mb-4"}>Travaux de peinture et remplacement
                                des menuiseries</h2>
                            <div className="flex flex-col space-y-5 font-light">
                                <p className={"text-sm"}>Vous souhaitez rafraîchir votre intérieur? Vous aimeriez
                                    moderniser votre séjour? Nous intervenons pour les travaux de peinture: n’hésitez
                                    pas à demander conseil à nos professionnels quant aux coloris et finitions.</p>
                                <p className={"text-sm"}>Et pour optimiser l’isolation de votre habitation ou de vos
                                    locaux professionnels, pensez à changer vos anciennes menuiseries!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="my-20 w-full">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 items-center gap-20">
                    <div className="col-span-1">
                        <img className={"rounded-lg"} src={Isolation2} alt={Isolation2}/>
                    </div>
                    <div className="col-span-1">
                        <div className={"flex flex-col"}>
                            <h2 className={"text-cyan-700 text-3xl font-normal mb-4"}><span
                                className="font-bold">Contactez-nous</span> pour vos travaux d’isolation intérieure</h2>
                            <div className="space-y-5 font-normal">
                                <p className={"text-base"}>Vous souhaitez optimiser les performances thermiques de votre
                                    habitation? Contactez nos experts pour vos travaux d’isolation intérieure.</p>
                                <p className={"text-base"}>Grâce à notre savoir-faire et à nos connaissances techniques,
                                    nous vous conseillons quant au choix des matériaux isolants les plus adaptés à votre
                                    situation comme à votre budget.</p>
                                <p className={"text-base"}>Réalisez d’importantes économies sur vos factures de
                                    chauffage!</p>
                                <Button color={"light"} size={"xl"} pill>Isolation</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-gray-100 py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Recherche de fuite, remplacement de robinetterie <span className="font-light">et de cumulus…</span></h2>
                            <p className={"text-lg"}>Vous faites face à un dégât des eaux? Vous recherchez la provenance d’une fuite? Vous souhaitez remplacer votre ancien cumulus? Notre société intervient rapidement pour vous dépanner!</p>
                            <p className={"text-lg"}>Nous trouvons l’origine de votre fuite – canalisations, robinetterie, compteur d’eau… – et assurons les réparations au plus vite.</p>
                            <p className={"text-lg"}>Vous recherchez des professionnels pour répondre à toutes vos questions? Notre équipe d’artisans se tient à votre disposition: <a
                                href="#" className="text-cyan-700 underline">contactez-nous!</a></p>
                            <Button className={"max-w-[275px]"} size={"xl"} pill outline>Travaux de plomberie</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"rounded-lg"} src={Toilet} alt={Toilet}/>
                    </div>
                </div>
            </div>
        </section>
    </>
}