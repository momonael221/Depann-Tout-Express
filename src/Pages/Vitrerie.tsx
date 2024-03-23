import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";
import Contact from "../assets/img/contact.jpg";

export default function Vitrerie() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Services de Vitrerie</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Services de Vitrerie</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Notre expert en vitrerie <span
                                className="font-light">à Roubaix est à votre service</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous résidez à Marcq-en-Barœul, Villeneuve-d'Ascq, Lille ou Tourcoing, et vous êtes à la
                            recherche d'une
                            entreprise qualifiée pour réaliser vos travaux de vitrerie ?</p>
                        <p>La société AAB Depann Tout Express est spécialisée dans les travaux de rénovation, y compris
                            le remplacement et l’installation de vitres, de verres de douche, de miroirs…</p>
                        <p>N'hésitez pas à nous contacter pour toute question ou demande d’information, que vous soyez
                            un particulier,
                            un professionnel ou le représentant d’une collectivité !</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
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
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Installation de menuiseries</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Contactez nos spécialistes pour <span
                                className="font-light">le dépannage de vitrerie et le remplacement de vitres brisées</span>
                            </h2>
                            <p>Votre vitre est cassée? Vous avez été victime d'une effraction et votre maison a été
                                cambriolée? Nous assurons le dépannage et le <strong>remplacement des vitrages</strong>.
                            </p>
                            <p>En premier lieu, notre équipe assure la sécurisation de vos vitres avant la réparation,
                                en installant un plaquage provisoire. Nous effectuons ensuite une analyse détaillée des
                                travaux à réaliser, puis procédons au remplacement complet de votre vitrage.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Services de plomberie</Button>
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
                        <Button size={"xl"} pill outline>Étude personnalisée gratuite</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}