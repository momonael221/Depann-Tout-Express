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
                        <h2 className={"text-cyan-700 text-3xl font-bold"}>Planifiez un rendez-vous avec notre serrurier <span className="font-light">à Roubaix et ses environs</span></h2>
                    </div>
                </div>
                <div className="col-span-1">
                    <p>Nos professionnels chevronnés interviennent à Marcq-en-Barœul, Villeneuve-d'Ascq, Lille et Tourcoing, tous les jours de la semaine, à toute heure, pour vos travaux, notamment pour:</p>
                    <ul className="list-disc ml-10">
                        <li>les interventions en serrurerie, en plâtrerie et en vitrerie;</li>
                        <li>l'assistance en serrurerie en cas de dépannage;</li>
                        <li>la restauration et l'installation de revêtements;</li>
                        <li>la peinture de vos espaces professionnels ou résidentiels;</li>
                        <li>les interventions en électricité, isolation et plomberie;</li>
                        <li>l'installation et le changement de menuiseries...</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container mx-auto my-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="col-span-1">
                    <div className="flex flex-col space-y-8">
                        <h2 className={"text-cyan-700 text-3xl font-bold border-l-2 border-cyan-700 pl-4"}>Pour vos besoins en travaux et dépannage de serrurerie, <span className="font-light">n'hésitez pas à contacter notre équipe</span></h2>
                        <p>Si vous avez besoin d'un spécialiste en serrurerie rapidement, n'hésitez pas à contacter Depann Tout Express!</p>
                        <p>Que ce soit pour le remplacement de serrures, l'installation de verrous ou une intervention en urgence, nos experts sont disponibles et interviennent rapidement.</p>
                        <Button href={"/serrurerie"} className={"max-w-xs"} size={"xl"} pill outline>Travaux de serrurerie</Button>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="flex flex-col space-y-8">
                        <h2 className={"text-cyan-700 text-3xl font-bold border-l-2 border-cyan-700 pl-4"}>Nous sommes à votre service pour réaliser vos <span className="font-light">projets de plomberie sanitaire</span></h2>
                        <p>Vous constatez une humidité excessive dans votre salle de bains et vous soupçonnez un problème au niveau de vos canalisations ? Vous envisagez une rénovation complète de cette pièce ?</p>
                        <p>Nos plombiers expérimentés se chargent de mettre vos équipements sanitaires et vos systèmes d'évacuation des eaux usées conformes aux normes, y compris ceux reliés au tout-à-l'égout.</p>
                        <p>Pour vos besoins de raccordement en eau et en gaz, ou même pour une installation sur mesure de plomberie de cuisine, n'hésitez pas à contacter AAB Depann Tout Express !</p>
                        <Button href={"/reparation-plomberie"} className={"max-w-xs"} size={"xl"} pill outline>Plomberie sanitaire</Button>
                    </div>
                </div>
            </div>
        </div>

        <section className="w-full bg-gray-100 py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Notre équipe est disponible pour répondre à toutes vos questions et <span className="font-light">vous aider dans vos démarches</span></h2>
                            <p className={"text-lg"}>Que vous entrepreniez des travaux de rénovation ou que vous cherchiez à sécuriser vos ouvertures après une intrusion, notre équipe est là pour vous accompagner dans divers types de travaux !</p>
                            <p className={"text-lg"}>N'hésitez pas à nous contacter pour toute question ou demande d'informations. Nous offrons également des devis gratuits et détaillés sur demande.</p>
                            <p className={"text-lg"}>À noter : votre engagement n'est pas définitif avant la réalisation des travaux. Vous avez la possibilité d'annuler sans frais jusqu'à deux heures avant l'arrivée du professionnel chez vous.</p>
                            <Button href={"/contact"} className={"max-w-xs"} size={"xl"} pill outline>Contactez votre serrurier</Button>
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