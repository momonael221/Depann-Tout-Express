import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";
import Contact from "../assets/img/contact.jpg";

export default function IsolateurInterieure() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Isolateur Intérieure</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Isolateur Intérieure</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nos experts interviennent pour
                                l’isolation
                                intérieure <span className="font-light">à Roubaix et alentour</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Dans le cadre de la rénovation énergétique complète de votre habitation, vous souhaitez
                            optimiser
                            votre isolation intérieure? Vous rêvez d’améliorer votre confort thermique et acoustique au
                            quotidien? Vous aimeriez réaliser un geste écologique pour la planète?</p>
                        <p>Contactez la société AAB Depann Tout Express : nos experts vous proposent des solutions au
                            meilleur rapport qualité/prix!</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Grâce à l’isolation intérieure, <span
                                className="font-light">limitez les déperditions de chaleur</span></h2>
                            <p className={"text-lg"}>Savez-vous que la plupart des déperditions énergétiques – de
                                l'ordre de 30% – s’effectuent par le toit?</p>
                            <p className={"text-lg"}>Pour garder une température agréable tout au long de l’année dans
                                votre maison, et notamment durant la saison froide, il est essentiel d’isoler vos murs
                                et vos combles perdus ou aménagés.</p>
                            <p className={"text-lg"}>En tenant compte de vos besoins et de votre budget, nous vous
                                proposons des matériaux isolants pleinement adaptés à votre situation.</p>
                            <Button className={"max-w-[350px]"} size={"xl"} pill outline>Notre menuisier est à votre
                                service</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Travaux d’isolation phonique: <span
                                className="font-light">quels sont les avantages?</span></h2>
                            <p className={"text-lg"}>Nous réduisons au maximum les ponts thermiques afin d’augmenter les
                                performances énergétiques de votre logement.</p>
                            <p className={"text-lg"}>En effet, une bonne isolation intérieure vous permet de réaliser
                                d’importantes économies, notamment sur vos factures de chauffage! Pour cela, nous
                                utilisons exclusivement des matériaux reconnus dans le domaine de l’isolation.</p>
                            <p className={"text-lg"}>Par ailleurs, le renforcement de <strong>l’isolation
                                phonique</strong> aide aussi à réduire les nuisances sonores venues de l’extérieur.</p>
                            <Button className={"max-w-[350px]"} size={"xl"} pill outline>Contactez votre
                                plombier</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nos professionnels se tiennent à votre écoute <span className="font-light">pour toutes questions</span></h2>
                            <p>Vous recherchez une entreprise compétente pour l’aménagement des combles?</p>
                            <p>Sachez que l’équipe de l’entreprise AAB Depann Tout Express assure également les travaux de rénovation et les travaux de plâtrerie. Cela vous permet de créer de nouvelles pièces ou de revoir la hauteur de vos espaces, par exemple avec la création de faux plafond.</p>
                            <p>Contactez-nous pour demander un renseignement ou bénéficier d’un devis gratuit et détaillé sur rendez-vous! Enfin, nous proposons des solutions pour faciliter le paiement de vos travaux.</p>
                            <Button className={"max-w-[350px]"} size={"xl"} pill outline>Votre devis gratuit</Button>
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