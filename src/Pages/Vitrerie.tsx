import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";
import Contact from "../assets/img/contact.jpg";

export default function Vitrerie() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Vitrerie</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Vitrerie</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Notre spécialiste de la vitrerie <span
                                className="font-light">à Roubaix est à votre disposition</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous habitez à Marcq-en-Barœul, Villeneuve-d'Ascq, Lille ou Tourcoing, et vous recherchez une
                            entreprise compétente pour réaliser vos travaux dans le domaine du vitrage ?</p>
                        <p>La société AAB Depann Tout Express est spécialisée dans les travaux de rénovation, et
                            notamment dans le remplacement et l’installation de vitres, de verres de douche, de
                            miroirs…</p>
                        <p>Contactez-nous pour toute question ou demande d’information, que vous soyez un particulier,
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous assurons <span
                                className="font-light">la pose de vitrerie traditionnelle sur mesure</span></h2>
                            <p className={"text-lg"}>La vitrerie confère un style bien particulier à votre maison.
                                Aussi, nous assurons également la pose et l’installation de vitres dans les règles de
                                l’art pour les constructions neuves ou en cours de rénovation.</p>
                            <p className={"text-lg"}>En <strong>double vitrage</strong> ou triple vitrage, la pose de
                                vitres permet également d’amener un maximum de lumière et de chaleur dans votre
                                habitation.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Pose de menuiseries</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Contactez nos experts pour <span
                                className="font-light">le dépannage de vitrerie et bris de glace</span></h2>
                            <p>Votre vitre s’est cassée? Des intrus sont entrés chez vous par effraction et vous avez
                                été cambriolé? Nous assurons le dépannage et le <strong>remplacement des
                                    vitrages</strong>.</p>
                            <p>Dans un premier temps, notre équipe assure la mise en sécurité de vos vitres avant
                                réparation, en installant un plaquage provisoire. Nous réalisons ensuite une analyse
                                approfondie des travaux à effectuer, puis procédons au remplacement total de votre
                                vitrage.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Dépannage de plomberie</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous sommes au service des <span className="font-light">particuliers, des professionnels et des collectivités</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Faites appel aux services d’une entreprise réactive pour des interventions rapides! Rigoureux
                            et à l’écoute, nous élaborons à votre demande un devis gratuit et détaillé.</p>
                        <p>Disponibles 7j/7 et 24h/24 par téléphone ou par e-mail, soyez rassuré: nous prenons en
                            considération toutes vos questions, vos demandes de dépannage de serrurerie ou de
                            menuiserie.</p>
                        <div>
                            <p>Enfin, vous pouvez également nous contacter pour:</p>
                            <ul className="list-disc ml-10">
                                <li>le dépannage de vos installations;</li>
                                <li>les travaux de plâtrerie;</li>
                                <li>la mise aux normes de vos réseaux d’électricité et de plomberie;</li>
                                <li>la mise en peinture des pièces de votre logement;</li>
                                <li>l’isolation intérieure, etc.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <Button size={"xl"} pill outline>Étude gratuite et personnalisée</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}