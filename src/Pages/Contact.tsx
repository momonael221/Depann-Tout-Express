import {HiHome} from "react-icons/hi";
import ContactImg from "../assets/img/contact.jpg";
import {Breadcrumb, Button} from "flowbite-react";

export default function Contact() {
    return <>
        <div className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Contactez-nous</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Contactez-nous</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </div>

        <div className="container mx-auto my-20">
            <div className="grid grid-cols-1 gap-10">
                <div className="col-span-1">
                    <div className="flex flex-col space-y-8">
                        <h2 className={"text-cyan-700 text-3xl font-bold"}>Pour toute information, contactez AAB Depann
                            Tout Express <span className="font-light">à Roubaix</span></h2>
                    </div>
                </div>
                <div className="col-span-1">
                    <p>
                        Notre entreprise, Depann Tout Express, se spécialise dans l'installation et la réparation de
                        serrures, ainsi que dans divers travaux de rénovation. Nous sommes ravis de proposer une large
                        gamme de services pour répondre à vos besoins en matière de sécurité et d'amélioration de votre
                        habitat.</p>
                    <ul className="list-disc ml-10 mt-3">
                        <li>pose de revêtements;</li>
                        <li>travaux de plâtrerie;</li>
                        <li>travaux de menuiserie;</li>
                        <li>travaux d'électricité;</li>
                        <li>travaux d'isolation;</li>
                        <li>travaux de plomberie;</li>
                    </ul>
                    <p className="mt-4">Contactez notre équipe pour prendre rendez-vous!</p>
                    <p className="mt-4">Nos professionnels remplacent vos serrures et verrous anciens, sécurisent vos
                        fenêtres et vos portes vandalisées, assurent la pose de vitrerie, volets roulants et volets
                        battants, etc.</p>
                </div>
            </div>
        </div>

        <div className="container mx-auto my-20">
            <div className="flex flex-col space-y-8">
                <h2 className={"text-cyan-700 text-3xl font-bold border-l-2 border-cyan-700 pl-4"}>Notre zone
                    d'intervention: <span className="font-light">zone d'intervention</span></h2>
                <p>Vous avez besoin d'un spécialiste en serrurerie le plus rapidement possible? Contactez la société AAB
                    Depann
                    Tout Express!</p>
                <iframe src="https://maps.google.com/maps?q=50.697680385576,3.1667043499023&z=16&output=embed"
                        height="400" width="100%"></iframe>
            </div>
        </div>

        <section className="w-full bg-gray-100 py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Obtenez <span className="font-light">votre devis</span>
                            </h2>
                            <p className={"text-lg"}>Que vous soyez un particulier, un professionnel ou un
                                représentant d’une collectivité ou d’un syndicat de copropriété, nous répondons à votre
                                demande et fournissons des devis gratuits et personnalisés dans les meilleurs
                                délais.</p>
                            <p className={"text-lg"}>De plus, nous proposons des solutions pour faciliter le
                                paiement de vos travaux.</p>
                            <form className={"space-y-6"}>
                                <div className="flex flex-col">
                                    <label htmlFor="nom">Nom*:</label>
                                    <input id={"nom"} type="text"
                                           className={"form-input bg-gray-50 border-cyan-700 focus:border-cyan-900 focus:ring-cyan-900 rounded-md"}
                                           required/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email">Email*:</label>
                                    <input id={"email"} type="email"
                                           className={"form-input bg-gray-50 border-cyan-700 focus:border-cyan-900 focus:ring-cyan-900 rounded-md"}
                                           required/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="tel">Téléphone*:</label>
                                    <input id={"tel"} type="text"
                                           className={"form-input bg-gray-50 border-cyan-700 focus:border-cyan-900 focus:ring-cyan-900 rounded-md"}
                                           required/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="message">Votre demande*:</label>
                                    <textarea id={"message"} rows={3}
                                              className={"form-textarea bg-gray-50 border-cyan-700 focus:border-cyan-900 focus:ring-cyan-900 rounded-md"}
                                              required></textarea>
                                </div>
                                <Button className={"max-w-[275px] mx-auto"} size={"sm"} pill outline>Obtenez votre
                                    devis</Button>
                            </form>
                        </div>
                    </div>
                    <div className={"col-span-1"}>
                        <img className={"rounded-lg"} src={ContactImg} alt={ContactImg}/>
                    </div>
                </div>
            </div>
        </section>
    </>
}