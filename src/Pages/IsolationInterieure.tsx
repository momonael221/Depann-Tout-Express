import {Breadcrumb, Button} from "flowbite-react";
import {HiHome} from "react-icons/hi";
import Contact from "../assets/img/contact.jpg";

export default function IsolateurInterieure() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Isolation Intérieure</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Isolation Intérieure</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nos spécialistes sont disponibles pour
                                l’isolation
                                intérieure <span className="font-light">à Roubaix et ses environs</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous envisagez une rénovation énergétique complète de votre maison et vous souhaitez
                            améliorer
                            votre isolation intérieure? Vous voulez améliorer votre confort thermique et acoustique au
                            quotidien? Vous souhaitez contribuer à la protection de l'environnement?</p>
                        <p>Contactez AAB Depann Tout Express : nos spécialistes vous proposent des solutions de qualité
                            à un
                            prix compétitif!</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Avec l’isolation intérieure, <span
                                className="font-light">réduisez les pertes de chaleur</span></h2>
                            <p className={"text-lg"}>Saviez-vous que la majorité des pertes énergétiques – environ 30% –
                                se produisent par le toit?</p>
                            <p className={"text-lg"}>Pour maintenir une température confortable tout au long de l’année
                                dans
                                votre maison, notamment pendant la saison froide, il est crucial d’isoler vos murs
                                et vos combles perdus ou aménagés.</p>
                            <p className={"text-lg"}>En prenant en compte vos besoins et votre budget, nous vous
                                proposons des matériaux isolants parfaitement adaptés à votre situation.</p>
                            <Button className={"max-w-[350px]"} size={"xl"} pill outline>Notre menuisier est à votre
                                disposition</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Travaux d’isolation acoustique: <span
                                className="font-light">quels sont les bénéfices?</span></h2>
                            <p className={"text-lg"}>Nous minimisons autant que possible les ponts thermiques afin
                                d’améliorer les
                                performances énergétiques de votre logement.</p>
                            <p className={"text-lg"}>En effet, une bonne isolation intérieure vous permet de réaliser
                                d’importantes économies, notamment sur vos factures de chauffage! Pour cela, nous
                                utilisons uniquement des matériaux reconnus dans le domaine de l’isolation.</p>
                            <p className={"text-lg"}>De plus, le renforcement de <strong>l’isolation
                                acoustique</strong> contribue également à réduire les nuisances sonores extérieures.</p>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nos experts sont à votre
                                disposition <span
                                    className="font-light">pour répondre à toutes vos questions</span></h2>
                            <p>Vous êtes à la recherche d'une entreprise qualifiée pour l'aménagement des combles?</p>
                            <p>Sachez que l'équipe de AAB Depann Tout Express réalise également des travaux de
                                rénovation et de plâtrerie. Cela vous permet de créer de nouveaux espaces ou de modifier
                                la hauteur de vos pièces, par exemple en créant un faux plafond.</p>
                            <p>Contactez-nous pour obtenir des informations ou pour recevoir un devis gratuit et
                                détaillé sur rendez-vous! De plus, nous proposons des solutions pour faciliter le
                                paiement de vos travaux.</p>
                            <Button className={"max-w-[350px]"} size={"xl"} pill outline>Obtenez votre devis
                                gratuit</Button>
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