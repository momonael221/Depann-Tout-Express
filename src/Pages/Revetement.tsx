import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";
import Contact from "../assets/img/contact.jpg";

export default function Revetement() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Revêtements</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Revêtements</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Notre équipe assure la pose de
                                revêtements de sols et murs <span className="font-light">à Roubaix</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous aimeriez rénover votre parquet massif? Faire <strong>poser du parquet
                            flottant</strong> dans votre chambre à coucher ou votre séjour? Vous souhaitez retirer la
                            moquette de votre salon au profit d’un nouveau revêtement de sol? Vous souhaiteriez être
                            conseillé par des professionnels à ce sujet?</p>
                        <p>La société AAB Depann Tout Express est à votre service et vous fournit une étude gratuite et
                            personnalisée pour vos travaux de rénovation !</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Pose de revêtements de sol: <span className="font-light">nous vous aidons à faire votre choix</span></h2>
                            <p className={"text-lg"}>Nous vous conseillons parmi une large gamme de <strong>revêtements
                                de sol</strong> décoratifs ou techniques. Faites le choix d’un coloris, des matériaux et
                                des finitions adaptés à vos goûts, à vos envies et à vos contraintes budgétaires.</p>
                            <p>Nous proposons des sols en vinyle, des parquets flottants ou massifs, des moquettes
                                nouvelle génération et des carrelages résistants et faciles d’entretien.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Isolation intérieure</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous vous guidons pour <span
                                className="font-light">le choix de vos revêtements muraux</span></h2>
                            <p className={"text-lg"}>Papier peint uni ou à motifs, peinture, toile tendue ou
                                autre <strong>revêtement textile</strong>, pose de toile de verre, trompe-l’œil,
                                faïence…</p>
                            <p>Pour conférer une touche artistique, originale, moderne, épurée, design, classique,
                                rustique ou pour harmoniser votre intérieur, faites appel à nos services. Nous
                                personnalisons votre habitat de mille façons.</p>
                            <p>Osez transformer vos espaces en un lieu de rêve, confortable et esthétique!</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Travaux de peinture</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Contactez-nous et demandez votre <span className="font-light">devis gratuit et personnalisé</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Nous intervenons également pour les travaux de peinture, de vitrerie, de plâtrerie, de menuiserie, d'électricité, de plomberie… Vous aimeriez évaluer le coût de vos travaux? Nous nous déplaçons directement sur site et vous fournissons une étude gratuite et personnalisée.</p>
                        <p>N’hésitez pas à nous contacter en utilisant notre formulaire ou par téléphone. Pour vos urgences, nous sommes à votre disposition 7j/7 et 24h24.</p>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <Button size={"xl"} pill outline>Demandez votre étude </Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}