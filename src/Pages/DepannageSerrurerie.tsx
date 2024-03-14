import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";
import Contact from "../assets/img/contact.jpg";

export default function DepannageSerrurerie() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Dépannage de serrurerie</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Dépannage de serrurerie</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Votre dépannage de serrurerie <span
                                className="font-light">à Roubaix dans les meilleurs délais</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>24h/24 et 7j/7, la société AAB Depann Tout Express intervient à Roubaix et dans les villes
                            environnantes pour le dépannage de serrurerie. Et ce, que vous soyez un particulier, un
                            professionnel ou le représentant d’une collectivité.</p>
                        <p>Que votre porte soit bloquée ou que vous ayez oublié vos clés à l’intérieur de votre maison,
                            nous nous rendons sur place dans les meilleurs délais!</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous intervenons et sécurisons vos
                                ouvertures <span className="font-light">en cas d’effraction</span></h2>
                            <p className={"text-lg"}>Vous avez subi un vol? Vous avez été victime d’une effraction ou
                                d’une tentative d’effraction?</p>
                            <p className={"text-lg"}>Si nous ne pouvons souvent remplacer votre serrure dans l’heure,
                                nous assurons en revanche en urgence la sécurisation de vos bureaux ou de votre logement
                                grâce à la pose de planches en bois, en acier ou en aluminium.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Pose de verrous et serrures</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Votre porte a claqué ou <span
                                className="font-light">vous avez oublié vos clés</span> à l'intérieur de votre domicile?
                            </h2>
                            <p>Vous rentrez à votre domicile et vous ne retrouvez pas les clés pour ouvrir votre porte
                                d’entrée? Vous pensez les avoir oubliées à l’intérieur de votre logement? Spécialistes
                                dans le domaine de la serrurerie, nos professionnels interviennent rapidement.</p>
                            <p>Renseignez-vous: il est possible que votre assurance couvre les frais de dépannage, le
                                remplacement de vos clés, la première heure d’intervention ou encore les frais de
                                déplacement de votre serrurier.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Intervention de serrurerie</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Découvrez tous nos services et prestations <span className="font-light">dans le domaine de la serrurerie</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Le choix d’une serrure fiable et solide est un facteur déterminant pour assurer la sécurité de votre maison, appartement ou local professionnel. Aussi, nos experts interviennent rapidement pour la pose de serrures et le remplacement de vos systèmes de sécurité trop anciens.</p>
                        <p>Contactez notre équipe pour toute question ou demande d’informations ou de devis gratuit. N’hésitez pas à nous consulter pour en savoir plus concernant nos prestations et tarifs!</p>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <Button size={"xl"} pill outline>Devis de dépannage</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}