import {Button, Footer as FooterLayout} from 'flowbite-react';
import {
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsHouse,
    BsPhone,
    BsTelephone,
    BsEnvelope
} from 'react-icons/bs';

export default function Footer() {
    return (
        <FooterLayout className="rounded-none" container>
            <div className="w-full container mx-auto rounded-none">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className="flex flex-col space-y-4">
                        <FooterLayout.Brand href="/" src="/logo.jpg" alt="Depann-Tout-Express Logo"/>
                        <span className="text-gray-500 dark:text-white mb-4">Disponibilité: 24h/24 - 7j/7</span>
                        <div className="flex flex-wrap gap-2">
                            <Button>Contactez-nous</Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-8 sm:mt-4 md:grid-cols-3 sm:gap-6">
                        <div>
                            <FooterLayout.Title title="Siège social"/>
                            <FooterLayout.LinkGroup col>
                                <FooterLayout.Link href="#"><div className="flex items-center space-x-1"><BsHouse/> <span>198 Rue de l'Alma 59100 Roubaix</span></div></FooterLayout.Link>
                                <FooterLayout.Link href="#"><div className="flex items-center space-x-1"><BsPhone/> <span>Téléphone Portable</span></div></FooterLayout.Link>
                                <FooterLayout.Link href="#"><div className="flex items-center space-x-1"><BsTelephone/> <span>Téléphone Fixe</span></div></FooterLayout.Link>
                                <FooterLayout.Link href="#"><div className="flex items-center space-x-1"><BsEnvelope/> <span>Envoyez-nous un e-mail</span></div></FooterLayout.Link>
                            </FooterLayout.LinkGroup>
                        </div>
                        <div>
                            <FooterLayout.Title title="Nos agences"/>
                            <FooterLayout.LinkGroup col>
                                <FooterLayout.Link href="#"><div className="flex items-center space-x-1"><BsHouse/><span>168 rue Philadelphie – 59800 Lille</span></div></FooterLayout.Link>
                                <FooterLayout.Link href="#"><div className="flex items-center space-x-1"><BsPhone/><span>Téléphone</span></div></FooterLayout.Link>
                                <FooterLayout.Link href="#"><div className="flex items-center space-x-1"><BsHouse/><span>25 avenue Saint-Amant - 59300 Valencienne</span></div></FooterLayout.Link>
                                <FooterLayout.Link href="#"><div className="flex items-center space-x-1"><BsPhone/><span>Téléphone</span></div></FooterLayout.Link>
                            </FooterLayout.LinkGroup>
                        </div>
                        <div>
                            <FooterLayout.Title title="Plan du site"/>
                            <FooterLayout.LinkGroup col>
                                <FooterLayout.Link href="#">Accueil</FooterLayout.Link>
                                <FooterLayout.Link href="#">À propos</FooterLayout.Link>
                                <FooterLayout.Link href="#">Serrurerie</FooterLayout.Link>
                                <FooterLayout.Link href="#">Travaux de rénovation</FooterLayout.Link>
                                <FooterLayout.Link href="#">Électricité</FooterLayout.Link>
                                <FooterLayout.Link href="#">Plomberie</FooterLayout.Link>
                                <FooterLayout.Link href="#">Isolation intérieure</FooterLayout.Link>
                                <FooterLayout.Link href="#">Contact</FooterLayout.Link>
                            </FooterLayout.LinkGroup>
                        </div>
                    </div>
                </div>
                <FooterLayout.Divider/>
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <FooterLayout.Copyright href="#" by="DEPANN TOUT EXPRESS™" year={new Date().getFullYear()}/>
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FooterLayout.Icon href="#" icon={BsFacebook} />
                        <FooterLayout.Icon href="#" icon={BsInstagram} />
                        <FooterLayout.Icon href="#" icon={BsTwitter} />
                    </div>
                </div>
            </div>
        </FooterLayout>
    );
}