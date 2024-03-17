import Card from "../components/Card.tsx"
import {Blockquote, Button, Carousel} from "flowbite-react";

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
                            <Button href={"/serrurerie"} color={"gray"} pill size={"xl"}>En Savoir Plus</Button>
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
                            <Button href={"/reparation-plomberie"} color={"gray"} pill size={"xl"}>En Savoir Plus</Button>
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
                            <Button href={"/travaux-de-renovation"} color={"gray"} pill size={"xl"}>En Savoir Plus</Button>
                        </div>
                    </div>
                    <div
                        className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img className="object-contain w-full" src={Isolation} alt="serrurerie.jpg"/>
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center space-y-6">
                            <h1 className="text-7xl text-center">Isolation intérieure</h1>
                            <Button href={"/isolateur-interieure"} color={"gray"} pill size={"xl"}>En Savoir Plus</Button>
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
                            <svg className="mb-4 h-8 w-8 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                            </svg>
                            Notre entreprise se dévoue à fournir des services de dépannage et de rénovation de haute
                            qualité. Que ce soit pour résoudre des problèmes imprévus ou pour donner une nouvelle vie à
                            votre espace, nous sommes là pour vous. Notre équipe qualifiée et expérimentée s'engage à
                            offrir des solutions fiables et durables. La satisfaction de nos clients est notre priorité,
                            et nous travaillons avec détermination pour atteindre l'excellence dans chaque projet.
                        </Blockquote>
                        <div className="pt-3">
                            <Button href={"/about"} pill outline size={"xl"} className="max-w-xs">Qui sommes-nous?</Button>
                        </div>
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
                            <a href={"/serrurerie"}>
                                <Card img={Serrurerie} alt={Serrurerie} title="Serrurerie"/>
                            </a>
                        </div>
                        <div className="col-span-1">
                            <a href={"/reparation-plomberie"}>
                                <Card img={Plombing} alt={Plombing} title="Plomberie Sanitaire"/>
                            </a>
                        </div>
                        <div className="col-span-1">
                            <a href={"/travaux-de-renovation"}>
                                <Card img={Renovation} alt={Renovation} title="Aménagement"/>
                            </a>
                        </div>
                        <div className="col-span-1">
                            <a href={"/isolateur-interieure"}>
                                <Card img={Isolation} alt={Isolation} title="Isolation Intérieure"/>
                            </a>
                        </div>
                        <div className="col-span-1">
                            <a href={"/vitrerie"}>
                                <Card img={Vitrerie} alt={Vitrerie} title="Vitrerie"/>
                            </a>
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
                            <span className="text-white text-center uppercase">À votre disposition 24H/24, 7J/7</span>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <img className="w-20 h-20" src={People} alt={People}/>
                            <span className="text-white text-center uppercase">Réactivité dans les interventions</span>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <img className="w-20 h-20" src={Wallet} alt={Wallet}/>
                            <span className="text-white text-center uppercase">Options de paiement simples</span>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous sommes en mesure d'effectuer des interventions pour <span className="font-light">une variété de travaux liés à la serrurerie</span></h2>
                            <p className={"text-lg"}>Nous assurons un service de <strong>dépannage en serrurerie</strong> disponible 24h/24 et 7j/7, ainsi que l'installation de serrures et de verrous.</p>
                            <p className={"text-lg"}>Si votre domicile a récemment été victime d'une intrusion et que vous cherchez à renforcer sa sécurité, nous proposons une solution de fermeture temporaire en fixant solidement des planches en bois, en aluminium ou en acier sur les ouvertures.</p>
                            <Button href={"/serrurie"} className={"max-w-xs"} size={"xl"} pill outline>Serrurerie</Button>
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
                            <h2 className={"text-white text-3xl font-bold"}><span className="font-light">Notre équipe se dédie à la réalisation de </span> vos projets de rénovation et d'aménagement intérieur</h2>
                            <p className={"text-lg"}>Spécialistes des <a href={"/travaux-de-renovation"} className="underline">rénovations intérieures et extérieures</a>, nos artisans transforment et améliorent votre maison, appartement ou espace professionnel en les embellissant, les agrandissant et les aménageant selon vos besoins.</p>
                            <p className={"text-lg"}>En cas de sinistre nécessitant une remise en état, l'installation de revêtements ou de cloisons, ou encore la peinture de vos murs, notre équipe intervient rapidement pour effectuer vos travaux de maintenance immobilière.</p>
                            <Button color={"light"} href={"/travaux-de-renovation"} className={"max-w-[275px]"} size={"xl"} pill>Aménagement & rénovation</Button>
                        </div>
                    </div>
                    <div className={"col-span-1 bg-cyan-600 bg-opacity-80 h-full px-14 py-10 space-y-10"}>
                        <div className={"flex flex-col"}>
                            <img className="max-w-20" src={CuttingBoard} alt={CuttingBoard}/>
                            <h2 className={"text-white text-xl font-normal mb-4"}>Installation de revêtements, travaux de plâtrerie et services électriques.</h2>
                            <div className="flex flex-col space-y-5 font-light">
                                <p className={"text-sm"}>Depann Tout Express propose l'installation de parquet flottant, de parquet massif, de moquette et de revêtements de sol en vinyle.</p>
                                <p className={"text-sm"}>Vous envisagez de réorganiser votre espace? Nous nous chargeons de l'installation ou, au contraire, de la démolition de cloisons pour créer de nouveaux espaces.</p>
                                <p className={"text-sm"}>De plus, notre équipe se mobilise pour vos besoins en électricité, notamment pour la mise en conformité de votre installation.</p>
                            </div>
                        </div>
                        <div className={"flex flex-col"}>
                            <img className="max-w-20 mb-5" src={Brush} alt={Brush}/>
                            <h2 className={"text-white text-xl font-normal mb-4"}>Peinture intérieure et extérieure, ainsi que remplacement des menuiseries.</h2>
                            <div className="flex flex-col space-y-5 font-light">
                                <p className={"text-sm"}>Vous désirez donner un coup de neuf à votre intérieur? Vous envisagez de moderniser votre salon? Nous prenons en charge les travaux de peinture. N'hésitez pas à solliciter nos professionnels pour des conseils sur les choix de couleurs et de finitions.</p>
                                <p className={"text-sm"}>Pour améliorer l'isolation de votre domicile ou de vos locaux commerciaux, envisagez le remplacement de vos anciennes menuiseries !</p>
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
                            <h2 className={"text-cyan-700 text-3xl font-normal mb-4"}>N'hésitez pas à <span className="font-bold">nous contacter</span> pour vos projets d'isolation intérieure.</h2>
                            <div className="space-y-5 font-normal">
                                <p className={"text-lg"}>Vous désirez améliorer l'efficacité énergétique de votre maison? Contactez nos spécialistes pour réaliser vos travaux d'isolation intérieure.</p>
                                <p className={"text-lg"}>Fort de notre expertise et de notre maîtrise technique, nous vous orientons vers les matériaux isolants les mieux adaptés à vos besoins et à votre budget.</p>
                                <p className={"text-lg"}>Faites des économies significatives sur vos dépenses de chauffage !</p>
                                <Button href={"/isolateur-interieure"} className="max-w-xs" size={"xl"} pill outline>Isolation</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Détection de fuites, remplacement de robinets <span className="font-light">et de chauffe-eau...</span></h2>
                            <p className={"text-lg"}>Vous êtes confronté à un dégât des eaux ? Vous cherchez à localiser une fuite ? Vous envisagez de remplacer votre ancien chauffe-eau ? Notre entreprise intervient rapidement pour vous dépanner !</p>
                            <p className={"text-lg"}>Nous identifions l'origine de votre fuite, que ce soit au niveau des canalisations, de la robinetterie ou du compteur d'eau, et effectuons les réparations dans les meilleurs délais.</p>
                            <p className={"text-lg"}>À la recherche de professionnels pour obtenir des réponses à toutes vos questions ? Notre équipe d'artisans est là pour vous aider. N'hésitez pas à <a href="/contact" className="text-cyan-700 underline">nous contacter!</a></p>
                            <Button href={"/reparation-plomberie"} className={"max-w-xs"} size={"xl"} pill outline>Travaux de plomberie</Button>
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