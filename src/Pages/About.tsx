import { HiHome } from 'react-icons/hi';
import Contact from "../assets/img/contact.jpg";
import {Breadcrumb, Button} from "flowbite-react";

export default function About() {
    return <>
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 text-2xl font-light">À propos</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>À propos</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </div>

        <div className="container mx-auto my-20">
            <div className="grid grid-cols-1 gap-10">
                <div className="col-span-1">
                    <div className="flex flex-col space-y-8">
                        <h2 className={"text-cyan-700 text-3xl font-bold"}>Prenez rendez-vous avec notre serrurier <span
                            className="font-light">à Roubaix et alentour</span></h2>
                    </div>
                </div>
                <div className="col-span-1">
                    <p>Nos artisans expérimentés dans leur métier interviennent à Marcq-en-Barœul, Villeneuve-d'Ascq,
                        Lille et Tourcoing, 7j/7, 24h/24 pour vos travaux, et notamment pour:</p>
                    <ul className="list-disc ml-10">
                        <li>les travaux de serrurerie, de plâtrerie et de vitrerie;</li>
                        <li>le dépannage de serrurerie;</li>
                        <li>la rénovation et la pose de revêtements;</li>
                        <li>la mise en peinture de vos locaux ou de votre logement;</li>
                        <li>les travaux d’électricité, d’isolation et de plomberie;</li>
                        <li>la pose et le remplacement de menuiseries…</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container mx-auto my-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="col-span-1">
                    <div className="flex flex-col space-y-8">
                        <h2 className={"text-cyan-700 text-3xl font-bold border-l-2 border-cyan-700 pl-4"}>Travaux et
                            dépannage de serrurerie: <span className="font-light">contactez notre équipe</span></h2>
                        <p>Vous avez besoin d’un expert en serrurerie dans les meilleurs délais? Contactez la société
                            AAB Depann Tout Express!</p>
                        <p>Que vous souhaitiez remplacer votre serrure, faire poser un verrou ou demander un dépannage
                            en urgence, nos professionnels sont à votre disposition et interviennent rapidement.</p>
                        <Button className={"max-w-sm"} pill outline>Travaux de serrurerie</Button>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="flex flex-col space-y-8">
                        <h2 className={"text-cyan-700 text-3xl font-bold border-l-2 border-cyan-700 pl-4"}>Nous
                            intervenons pour vos <span className="font-light">travaux de plomberie sanitaire</span></h2>
                        <p>Votre salle de bains est trop humide et vous pensez que vos canalisations sont défectueuses?
                            Vous aimeriez la rénover entièrement?</p>
                        <p>Notre équipe de plombiers expérimentés assure la remise aux normes de vos <strong>équipements
                            sanitaires</strong> et des systèmes d’évacuation des eaux usées reliées au tout-à-l’égout.
                        </p>
                        <p>Contactez AAB Depann Tout Express pour les raccordements d’eau et de gaz ou encore pour
                            l’installation de plomberie de cuisine sur mesure!</p>
                        <Button className={"max-w-sm"} pill outline>Plomberie sanitaire</Button>
                    </div>
                </div>
            </div>
        </div>

        <section className="w-full bg-gray-100 py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Notre équipe se tient à votre disposition <span className="font-light">et répond à vos questions</span></h2>
                            <p className={"text-lg"}>Vous rénovez votre habitation? Vous aimeriez sécuriser vos ouvertures à la suite d’une intrusion dans votre logement? Nous intervenons pour de nombreux travaux!</p>
                            <p className={"text-lg"}>Contactez-nous pour toute question ou demande de renseignements. Nous proposons également des devis gratuits et détaillés sur demande.</p>
                            <p className={"text-lg"}>Bon à savoir: votre engagement n’est pas définitif tant que les travaux ne sont pas effectués. Vous avez la possibilité d’annuler sans frais, jusqu’à deux heures avant l’arrivée du professionnel chez vous.</p>
                            <Button className={"max-w-[275px]"} size={"xl"} pill outline>Contactez votre serrurier</Button>
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