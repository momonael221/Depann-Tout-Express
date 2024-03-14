import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";
import Contact from "../assets/img/contact.jpg";

export default function PoseSerrure() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Pose de serrurerie</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Pose de serrurerie</Breadcrumb.Item>
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
                                serrures <span
                                    className="font-light">à Roubaix et ses environs</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Afin de protéger au mieux vos biens et votre famille, déjouez toute infraction grâce à la
                            pose de serrures solides et hautement sécurisées.</p>
                        <div>
                            <p>Nous vous conseillons en tenant compte de vos besoins et contraintes budgétaires:</p>
                            <ul className="list-disc ml-10">
                                <li>serrures à clé 3, 5 ou 7 points;</li>
                                <li>serrures à code;</li>
                                <li>serrures à carte;</li>
                                <li>serrures électriques;</li>
                                <li>serrures magnétiques;</li>
                                <li>serrures antipanique;</li>
                                <li>serrures connectées…</li>
                            </ul>
                        </div>
                        <p>Il existe de nombreux modèles pour vous satisfaire. Nous nous adaptons à vos attentes en
                            matière de sécurité pour votre logement ou vos locaux professionnels.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Des équipements modernes, <span
                                className="font-light">résistants et durables</span></h2>
                            <p className={"text-lg"}>Nos équipements sont certifiés par des marques reconnues dans le
                                domaine de la serrurerie. Au besoin, nous remplaçons le pêne jusqu’au verrou et nous
                                nous assurons que votre système soit résistant contre le perçage par un cambrioleur ou
                                l’utilisation d’un crochet.</p>
                            <p className={"text-lg"}>Contactez-nous dès maintenant pour prévoir vos travaux ou pour un
                                dépannage express – que vous soyez un particulier ou un professionnel.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Nous dépannons votre
                                serrure</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous assurons l’installation de <span
                                className="font-light">cylindres de haute sûreté</span>
                            </h2>
                            <p>Afin de lutter efficacement contre le crochetage et l’arrachage de portes, nous
                                installons des clés et des <strong>cylindres brevetés</strong>, répondant aux normes
                                françaises et européennes de qualité. Bénéficiez de la meilleure qualité de sécurité du
                                marché!</p>
                            <p>Les cylindres que nous installons permettent de renforcer votre porte d’entrée grâce à
                                différents niveaux de protection. Le plus élevé de ces niveaux est le barillet de haute
                                sécurité.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Serrurerie</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Contactez AAB Depann Tout Express <span className="font-light">pour une intervention de qualité</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous aimeriez prendre rendez-vous? Vous avez besoin de conseils ou d’informations complémentaires concernant les systèmes de sécurité à privilégier?</p>
                        <p>La société AAB Depann Tout Express se tient à votre disposition! N’hésitez pas à contacter nos experts qualifiés et expérimentés: ils se feront un plaisir de répondre à toutes vos questions.</p>
                        <p>Enfin, sachez que nous réalisons une étude gratuite et personnalisée sur demande.</p>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <Button size={"xl"} pill outline>Une pose de serrure ?</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}