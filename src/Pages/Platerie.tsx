import {HiHome} from "react-icons/hi";
import Contact from "../assets/img/contact.jpg";
import {Breadcrumb, Button} from "flowbite-react";

export default function Platerie() {
    return <>
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
            <div className="container mx-auto py-10">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-gray-900 dark:text-white text-2xl font-light">Plâtrerie</h2>
                    <Breadcrumb aria-label="Subpage breadcrumb">
                        <Breadcrumb.Item href="/" icon={HiHome}>Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item>Plâtrerie</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>

        <section className="w-full">
            <div className="container mx-auto my-20">
                <div className="grid grid-cols-1 gap-10">
                    <div className="col-span-1">
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Confiez-nous vos travaux de plâtrerie <span className="font-light">à Roubaix et ses environs</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous recherchez des artisans plaquistes expérimentés pour réaménager votre maison? Les travaux de plâtrerie permettent de mieux isoler votre maison.</p>
                        <p>Par ailleurs, une isolation efficace vous aide à optimiser vos performances thermiques. Réduisez aussi les nuisances sonores et le montant de votre facture de chauffage de façon significative!</p>
                        <p>La société AAB Depann Tout Express intervient dans le cadre de vos travaux de rénovation ou pour vos aménagements intérieurs neufs.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32">
                    <div className={"col-span-1"}>
                        <div className="flex flex-col space-y-8">
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Nous utilisons des matériaux
                                performants <span className="font-light">pour réaliser vos travaux</span></h2>
                            <p className={"text-lg"}>Vous souhaitez réagencer votre espace ou créer une pièce
                                supplémentaire dans votre logement?
                                Nos experts vous conseillent et trouvent des solutions adaptées à vos besoins et à votre
                                budget.</p>
                            <div>
                                <p>Nous assurons:</p>
                                <ul className="list-disc ml-10">
                                    <li>la pose de faux plafonds;</li>
                                    <li>la <strong>pose de cloisons sèches</strong> (notamment dans le cadre de l’aménagement de vos combles perdus);</li>
                                    <li>les enduits de plâtre traditionnel;</li>
                                    <li>la création d’escalier sur voûte sarrasine.</li>
                                </ul>
                            </div>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Travaux d’électricité </Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Faire appel à notre entreprise <span className="font-light">présente de nombreuses garanties</span></h2>
                            <p className={"text-lg"}>À vos côtés depuis plusieurs années déjà, notre équipe polyvalente et méthodique intervient à Lille et ses environs dans les meilleurs délais. Et ce, que vous soyez un particulier, un professionnel ou le représentant d’une collectivité.</p>
                            <p className={"text-lg"}>Bon à savoir: tous nos travaux sont couverts par la garantie décennale et sont conformes à la réglementation thermique 2012.</p>
                            <Button className={"max-w-sm"} size={"xl"} pill outline>Travaux de peinture</Button>
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
                            <h2 className={"text-cyan-700 text-3xl font-bold"}>Contactez-nous dans le cadre de <span className="font-light">vos travaux de rénovation</span></h2>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <p>Vous avez besoin de renseignements complémentaires? Vous aimeriez bénéficier d’un devis gratuit et détaillé pour évaluer le coût de vos travaux? Contactez ABB Depann Tout Express grâce à notre formulaire ou par téléphone.</p>
                        <p>Vous souhaiteriez en savoir plus au sujet de nos prestations? Nous intervenons pour vos travaux de plomberie, d'isolation, d'électricité, de vitrerie ou encore pour la pose de revêtements.</p>
                    </div>
                    <div className="col-span-1 space-y-4">
                        <Button size={"xl"} pill outline>Contacter notre équipe</Button>
                    </div>
                </div>
            </div>
        </section>
    </>
}