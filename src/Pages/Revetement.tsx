import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";
import RevetementSol from "../assets/img/flat-lay-worker-tiling-floor.jpg";
import RevetementMureaux from "../assets/img/builder-glues-decorative-brick-wall-repair-renovation-apartments-offices-repair-work.jpg";

export default function Revetement() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-light">Revêtements</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Revêtements</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-10 lg:my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Notre équipe se charge de l'installation de revêtements de sols et de murs <span className="font-light">à Roubaix</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous envisagez de rénover votre parquet massif ? D'installer du <strong>parquet flottant</strong> dans votre chambre à coucher ou votre séjour ? Vous souhaitez remplacer la moquette de votre salon par un nouveau revêtement de sol ? Vous aimeriez obtenir des conseils de professionnels à ce sujet ?</p>
                        <p>La société Depann Tout Express est à votre disposition et vous offre une étude gratuite et personnalisée pour vos projets de rénovation !</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full lg:pb-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Installation de revêtements de sol: <span className="font-light">nous vous accompagnons dans votre sélection</span></h2>
                            <p className={"text-lg"}>Nous vous guidons parmi une vaste sélection de <strong>revêtements de sol</strong> décoratifs ou techniques. Optez pour des coloris, des matériaux et des finitions qui correspondent à vos préférences, à vos besoins et à votre budget.</p>
                            <p>Nous offrons une gamme variée de revêtements de sol, comprenant des sols en vinyle, des parquets flottants ou massifs, des moquettes de nouvelle génération et des carrelages résistants et faciles à entretenir.</p>
                            <Button href={"/isolateur-interieure"} className={"max-w-sm"} size={"xl"} pill outline>Isolation intérieure</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"object-cover rounded-lg w-full max-h-[400px]"} src={RevetementSol} alt={RevetementSol}/>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-gray-100 dark:bg-gray-800 py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <img className={"object-cover rounded-lg w-full max-h-[400px]"} src={RevetementMureaux} alt={RevetementMureaux}/>
                    </div>
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous vous assistons dans <span className="font-light">le choix de vos revêtements pour les murs</span></h2>
                            <p className={"text-lg"}>Que ce soit pour du papier peint uni ou à motifs, de la peinture, de la toile tendue ou tout autre <strong>revêtement textile</strong>, la pose de toile de verre, du trompe-l'œil ou de la faïence, nous vous accompagnons dans votre sélection.</p>
                            <p>Pour ajouter une touche artistique, originale, moderne, épurée, design, classique ou rustique à votre intérieur, faites appel à notre équipe. Nous personnalisons votre habitat de multiples façons pour une harmonie parfaite.</p>
                            <p>Osez métamorphoser vos espaces en un lieu de rêve, alliant confort et esthétique !</p>
                            <Button href={"/peinture"} className={"max-w-sm"} size={"xl"} pill outline>Travaux de peinture</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>N'hésitez pas à nous contacter pour obtenir un <span className="font-light">devis gratuit et personnalisé</span> selon vos besoins</h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Nous proposons également nos services pour les travaux de peinture, de vitrerie, de plâtrerie, de menuiserie, d'électricité, de plomberie, et bien d'autres. Si vous souhaitez estimer le coût de vos travaux, nous nous rendons sur place pour réaliser une étude gratuite et personnalisée.</p>
                        <p>N'hésitez pas à nous joindre en remplissant notre formulaire en ligne ou en nous appelant directement. Nous sommes disponibles 7 jours sur 7 et 24 heures sur 24 pour répondre à vos urgences.</p>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <Button href={"/contact"} className={"max-w-sm"} size={"xl"} pill outline>Demandez votre étude </Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}