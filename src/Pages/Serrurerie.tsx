import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";
import Contact from "../assets/img/contact.jpg";

export default function Serrurerie() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Serrurerie</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Serrurerie</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Contactez-nous pour votre dépannage de
                                serrurerie <span className="font-light">à Roubaix et alentour</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous recherchez une entreprise qui sache installer et réparer tous types de serrures? Votre
                            porte est bloquée ou a été forcée au cours d’un cambriolage? Afin de vous assurer une
                            sécurité et une protection maximales, la société AAB Depann Tout Express prend en
                            main <strong>vos travaux de serrurerie.</strong> En cas d'effraction ou de tentative
                            d'effraction, il est essentiel de réparer votre serrure le plus rapidement possible pour
                            garantir la sécurité de votre logement. Les serruriers de AAB Depann Tout Express à Roubaix
                            sont également spécialisés dans la réparation de serrures suite à une effraction. Ils
                            peuvent vous conseiller sur les meilleures options pour renforcer la sécurité de votre
                            domicile et vous aider à installer des serrures plus robustes et plus résistantes aux
                            tentatives de cambriolage. Nous nous déplaçons chez vous en urgence ou pour des
                            interventions ponctuelles à Marcq-en-Barœul, Villeneuve-d'Ascq, Lille et Tourcoing.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Besoin d'un serrurier pour poser une
                                serrure ou un verrou ?</h2>
                            <p className={"text-lg"}>Si vous êtes à la recherche d'un dépannage de serrure ou d'une
                                ouverture de porte claquée à Roubaix, vous avez de la chance! L'entreprise AAB Depann
                                Tout Express a les compétents et qui pourront vous aider dans ces situations délicates.
                                Votre cylindre de serrure est grippé? Vous aimeriez changer le barillet de votre porte?
                                Nos experts vous accompagnent et assurent entre autres la pose de serrures A2P (serrures
                                trois points et serrures cinq points).</p>
                            <p className={"text-lg"}>Nous installons également des verrous haute sécurité et
                                des <strong>portes blindées</strong>, garanties pour leur véritable résistance face aux
                                tentatives d’effraction.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Pose de serrure</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Dépannage de serrurerie en urgence: <span
                                className="font-light">nous sommes à votre écoute</span></h2>
                            <p>Vous avez perdu vos clés ou êtes victime d’un cambriolage? La porte de votre maison a
                                claqué et vous vous retrouvez dehors? N’attendez pas pour nous appeler!</p>
                            <p>Notre serrurier dispose des outils et des compétences nécessaires pour accéder à votre
                                domicile rapidement et en toute sécurité, sans causer de dommages inutiles à votre porte
                                ou à votre serrure.</p>
                            <p>Disponible 7j/7 et 24h/24, un serrurier peut intervenir dans l’heure pour votre dépannage
                                dans un rayon d’environ 60 km autour de la ville de Roubaix, Lille et tout le
                                département du Nord .</p>
                            <p>Dans le cas où la destruction de votre serrure est nécessaire, nous installons un système
                                de fermeture solide et provisoire en attendant de procéder au remplacement définitif de
                                votre serrure.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Dépannage de serrurerie</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Notre serrurier intervient rapidement <span className="font-light">pour le dépannage de votre serrure</span></h2>
                            <p className={"text-lg"}>Vous avez besoin de conseils pour sécuriser votre habitat? Vous aimeriez programmer un rendez-vous rapidement? Contactez-nous par téléphone ou par e-mail grâce à notre formulaire de contact.</p>
                            <p className={"text-lg"}>Nous intervenons dans le respect des délais prévus. Renseignez-vous concernant nos facilités de paiement (paiement en plusieurs fois sans frais, par exemple).</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Contactez-nous</Button>
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