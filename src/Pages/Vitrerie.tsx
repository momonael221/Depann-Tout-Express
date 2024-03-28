import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";

import Vitrerie1 from "../assets/img/vitrerie1.jpg";
import Vitrerie2 from "../assets/img/vitrerie2.jpg";

export default function Vitrerie() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-light">Vitrerie</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Vitrerie</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-10 lg:my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nos experts en vitrerie <span
                                className="font-light">sont à votre service 24h/24 et 7j/7 à Roubaix, Lille, Valenciennes et dans toute la région haute France et aux alentours</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous résidez à Marcq-en-Barœul, Villeneuve-d'Ascq, Lille ou Tourcoing, et vous êtes à la
                            recherche d'une
                            entreprise qualifiée pour réaliser vos travaux de vitrerie ?</p>
                        <p>La société Depann Tout Express est spécialisée dans les travaux de rénovation, y compris
                            le remplacement et l’installation de vitres, de verres de douche, de miroirs…</p>
                        <p>N'hésitez pas à nous contacter pour toute question ou demande d’information, que vous soyez
                            un particulier,
                            un professionnel ou le représentant d’une collectivité !</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-10 lg:my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous réalisons <span
                                className="font-light">la pose de vitrerie traditionnelle personnalisée</span></h2>
                            <p className={"text-lg"}>La vitrerie donne un caractère unique à votre maison.
                                Ainsi, nous assurons aussi la pose et l’installation de vitres conformément aux normes
                                pour les constructions neuves ou en rénovation.</p>
                            <p className={"text-lg"}>En <strong>double vitrage</strong> ou triple vitrage,
                                l'installation de
                                vitres permet d'apporter un maximum de lumière et de chaleur dans votre
                                maison.</p>
                            <Button href={"/menuiserie"} className={"max-w-sm"} size={"xl"} pill outline>Installation de menuiseries</Button>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"object-cover rounded-lg w-full max-h-[400px]"} src={Vitrerie1} alt={Vitrerie1}/>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-gray-100 dark:bg-gray-800 py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-32">
                    <div className={"col-span-1"}>
                        <img className={"object-cover rounded-lg w-full max-h-[400px]"} src={Vitrerie2} alt={Vitrerie2}/>
                    </div>
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Contactez nos spécialistes pour <span
                                className="font-light">le dépannage de vitrerie et le remplacement de vitres brisées</span>
                            </h2>
                            <p>Votre vitre est cassée? Vous avez été victime d'une effraction et votre maison a été
                                cambriolée? Nous assurons le dépannage et le <strong>remplacement des vitrages</strong>.
                            </p>
                            <p>En premier lieu, notre équipe assure la sécurisation de vos vitres avant la réparation,
                                en installant un plaquage provisoire. Nous effectuons ensuite une analyse détaillée des
                                travaux à réaliser, puis procédons au remplacement complet de votre vitrage.</p>
                            <Button href={"/reparation-plomberie"} className={"max-w-sm"} size={"xl"} pill outline>Services de plomberie</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous sommes à la disposition des <span
                                className="font-light">particuliers, des entreprises et des collectivités</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Faites appel à une entreprise réactive pour des interventions rapides! Rigoureux et à
                            l'écoute, nous élaborons sur demande un devis gratuit et détaillé.</p>
                        <p>Disponibles 7j/7 et 24h/24 par téléphone ou par e-mail, soyez assuré: nous prenons en compte
                            toutes vos questions, vos demandes de dépannage de serrurerie ou de menuiserie.</p>
                        <div>
                            <p>De plus, vous pouvez également nous contacter pour:</p>
                            <ul className="list-disc ml-10">
                                <li>le dépannage de vos installations;</li>
                                <li>les travaux de plâtrerie;</li>
                                <li>la mise aux normes de vos réseaux d'électricité et de plomberie;</li>
                                <li>la peinture des pièces de votre logement;</li>
                                <li>l'isolation intérieure, etc.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <Button href={"/contact"} className={"max-w-xs"} size={"xl"} pill outline>Étude personnalisée gratuite</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}