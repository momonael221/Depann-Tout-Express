import {HiHome} from "react-icons/hi";
import {Breadcrumb, Button} from "flowbite-react";
import Contact from "../assets/img/contact.jpg";

export default function Menuiserie() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Travaux de Menuiserie</h2>
                    <Breadcrumb aria-label="Chemin de sous-page">
                        <Breadcrumb.Item href="/" icon={HiHome}>Page d'accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Travaux de Menuiserie</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous assurons la rénovation de vos
                                menuiseries <span className="font-light">à Roubaix</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous cherchez des professionnels qualifiés pour installer ou remplacer vos ouvertures -
                            portes d'entrée, fenêtres battantes, fenêtres coulissantes, baies vitrées, volets ? Vous
                            souhaitez remplacer vos vieux volets ?</p>
                        <p>Depuis de nombreuses années, les <strong>artisans menuisiers</strong> de la société AAB
                            Depann Tout Express interviennent rapidement à Lille, à Roubaix et dans les environs pour
                            réaliser vos travaux.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Notre spécialiste en menuiserie <span
                                className="font-light">modernise et rénove votre habitation</span></h2>
                            <p className={"text-lg"}>Pour profiter pleinement de votre intérieur et redonner une
                                nouvelle vie à vos menuiseries, faites appel à nos services ! Nous remettons en état,
                                entretenons et remplaçons vos ouvertures et systèmes de <strong>fermeture en
                                    aluminium</strong>, en bois, en PVC ou en matériaux mixtes.</p>
                            <p className={"text-lg"}>Nous effectuons la pose de ces derniers sur mesure à votre
                                domicile, dans vos bureaux ou dans vos locaux professionnels.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Installation de cloisons
                                sèches</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Une équipe polyvalente pour des <span
                                className="font-light">services de menuiserie variés</span></h2>
                            <div>
                                <p>Notre équipe assure notamment la dépose et la pose de vos menuiseries :</p>
                                <ul className="list-disc ml-10">
                                    <li>volets battants et volets roulants – motorisés ou non ;</li>
                                    <li>portes d’entrée pleines ou vitrées ;</li>
                                    <li>portes de garage ;</li>
                                    <li>fenêtres, portes-fenêtres et baies vitrées ;</li>
                                    <li>portails et portillons ;</li>
                                    <li>fenêtres de toit et châssis…</li>
                                </ul>
                            </div>
                            <p>Optez pour l’aluminium pour son élégance et sa résistance, le PVC pour son haut potentiel
                                isolant et sa robustesse, le bois pour son charme et son aspect authentique !</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Services d'électricité</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Sollicitez notre expert pour <span
                                className="font-light">la pose de vos menuiseries</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Nous assurons la pose de vos menuiseries avec le plus grand soin. Pour prendre rendez-vous ou
                            pour demander une étude gratuite et personnalisée, contactez AAB Depann Tout Express.
                            Partagez-nous votre projet : nous répondons à vos attentes.</p>
                        <p>Disponibles 7j/7 et 24h/24 par téléphone ou par e-mail, soyez rassuré : nous prenons en
                            compte toutes vos questions, vos demandes de dépannage de serrurerie ou de menuiserie.</p>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <Button size={"xl"} pill outline>Contactez AAB Depann Tout Express</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}