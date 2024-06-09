import {HiHome} from "react-icons/hi";
import {Breadcrumb, Button} from "flowbite-react";

import Serrurerie from "../assets/img/serrurerie.jpg"
import Cadenas from "../assets/img/Valenciennes_body.jpg"

export default function DepannageSerrurerie() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-light">Serrurerie Valenciennes</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Dépannage de serrurerie</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-10 lg:my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"} > Adresse à Valenciennes: <span className="font-light"> 25 Avenue Saint-Amant 59300, à Valenciennes</span></h2>
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Pour tout dépannage en serrurerie sur valenciennes et aux environs, <span className="font-light">vous pouvez nous contacter dans toute la région haut de France. Nous intervenons sur Valenciennes et son aglomération, Nous intervenons en urgence ou sur rendez-vous 24H/24, 7J/7 en montage de serrure sur Valenciennes, Réparation et dépannages de serrures à Denain, Installations de Portes Blindés à Crespin, Serrurier agrée assurance sur Saultain ou Sebourg, Poser une serrure ou un sécuriser vos portes sur Anzin, Abscon, Brillon, Aulnoy-lez-Valenciennes, Rouvignies, La sentinelle,  etc...</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>La société Depann Tout Express assure des interventions 24h/24 et 7j/7 à Roubaix, Lille, Valenciennes et dans toute la région haute France et environs pour tout dépannage de serrurerie, que vous soyez un particulier, un professionnel ou un représentant d'une collectivité.</p>
                        <p>Que votre porte soit bloquée ou que vous ayez accidentellement laissé vos clés à l'intérieur de votre maison, nous intervenons rapidement sur place!</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-10 lg:my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous intervenons rapidement pour l'ouverture de porte ou un changement de serrure <span className="font-light"></span></h2>
                            <p className={"text-lg"}>Avez-vous été victime d'un cambriolage ou d'une tentative d'effraction?</p>
                            <p className={"text-lg"}>Suite à une perte de vos clés, une serrure défectueuse, fermeture provisoire ou sécurisation de vos biens à domicile ou commerce et pour toute infraction disponible jour et nuit 24h/24.</p>
                            <p className={"text-lg"}>Si nous ne pouvons pas toujours remplacer votre serrure immédiatement, nous pouvons cependant intervenir en urgence pour sécuriser vos bureaux ou votre domicile en installant des planches en bois, en acier ou en aluminium.</p>
                            <Button href={"/pose-serrure"} className={"max-w-sm"} size={"xl"} pill outline>Pose de verrous et serrures</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"object-cover rounded-lg w-full max-h-[400px]"} src={Serrurerie} alt={Serrurerie}/>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-gray-100 dark:bg-gray-800 py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <img className={"object-cover rounded-lg w-full max-h-[400px]"} src={Cadenas} alt={Cadenas}/>
                    </div>
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>
                                Votre porte s'est refermée brusquement ou vous avez <span className="font-light">accidentellement laissé vos clés</span> à
                                l'intérieur de votre domicile?
                            </h2>
                            <p>Vous rentrez chez vous et vous vous rendez compte que vous avez perdu vos clés pour ouvrir votre porte d'entrée ? Vous pensez les avoir laissées à l'intérieur de votre logement ? Nos experts en serrurerie interviennent rapidement pour résoudre ce problème.</p>
                            <p>Informez-vous : Il se peut que votre assurance prenne en charge les frais de dépannage, le remplacement de vos clés, la première heure d'intervention, voire les frais de déplacement de votre serrurier.</p>
                            <Button href={"/depannage-serrurerie"} className={"max-w-sm"} size={"xl"} pill outline>Intervention de serrurerie</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Explorez l'ensemble de nos services et prestations <span className="font-light">dans le domaine de la serrurerie</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Opter pour une serrure fiable et robuste est essentiel pour garantir la sécurité de votre domicile ou de votre local professionnel. C'est pourquoi nos experts interviennent rapidement pour installer des serrures de qualité et remplacer vos anciens systèmes de sécurité.</p>
                        <p>N'hésitez pas à contacter notre équipe pour toute question ou demande d'informations, ainsi que pour obtenir un devis gratuit. Nous sommes à votre disposition pour vous fournir des détails supplémentaires sur nos services et nos tarifs!</p>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <Button href={"/contact"} size={"xl"} className={"max-w-xs"} pill outline>Devis de dépannage</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}