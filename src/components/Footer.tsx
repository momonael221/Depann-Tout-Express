import { Button, Footer as FooterLayout, useThemeMode } from "flowbite-react";
import {
  BsFacebook,
  BsHouse,
  BsPhone,
  BsTelephone,
  BsEnvelope,
} from "react-icons/bs";

export default function Footer() {
  const { mode } = useThemeMode();

  return (
    <FooterLayout
      className="rounded-none border-t border-gray-100 dark:border-gray-700"
      container
    >
      <div className="w-full container mx-auto rounded-none">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 ju sm:mt-4 md:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            <div className="flex flex-col space-y-4">
              {mode === "light" ? (
                <FooterLayout.Brand
                  href="/"
                  src="/logo-light.png"
                  alt="Depann-Tout-Express Logo"
                />
              ) : (
                <FooterLayout.Brand
                  href="/"
                  src="/logo-dark.png"
                  alt="Depann-Tout-Express Logo"
                />
              )}
              <span className="text-gray-500 dark:text-white mb-4">
                Disponibilité: 24h/24 - 7j/7
              </span>
              <div className="flex flex-wrap gap-2">
                <Button href={"/contact"} size={"xl"} pill outline>
                  Contactez-nous
                </Button>
              </div>
            </div>
            <div>
              <FooterLayout.Title title="Siège social" />
              <FooterLayout.LinkGroup col>
                <FooterLayout.Link href="/contact">
                  <div className="flex items-center space-x-2">
                    <div className={"W-4 h-4"}>
                      <BsHouse />
                    </div>
                    <span>198 Rue de l'Alma 59100 Roubaix</span>
                  </div>
                </FooterLayout.Link>
                <FooterLayout.Link href="tel:+33 6 25 11 12 81">
                  <div className="flex items-center space-x-2">
                    <div className={"W-4 h-4"}>
                      <BsPhone />
                    </div>
                    <span>+33 6 25 11 12 81</span>
                  </div>
                </FooterLayout.Link>
                <FooterLayout.Link href="tel:+33 3 20 84 38 99">
                  <div className="flex items-center space-x-2">
                    <div className={"W-4 h-4"}>
                      <BsTelephone />
                    </div>
                    <span>+33 3 20 84 38 99</span>
                  </div>
                </FooterLayout.Link>
                <FooterLayout.Link href="mailto:depanntoutexpress@hotmail.fr">
                  <div className="flex items-center space-x-2">
                    <div className={"W-4 h-4"}>
                      <BsEnvelope />
                    </div>
                    <span>Envoyez-nous un e-mail</span>
                  </div>
                </FooterLayout.Link>
              </FooterLayout.LinkGroup>
            </div>
            <div>
              <FooterLayout.Title title="Nos agences" />
              <FooterLayout.LinkGroup col>
                <FooterLayout.Link href="/contact">
                  <div className="flex items-center space-x-2">
                    <div className={"W-4 h-4"}>
                      <BsHouse />
                    </div>
                    <span>168 rue Philadelphie – 59800 Lille</span>
                  </div>
                </FooterLayout.Link>
                <FooterLayout.Link href="tel:+33 06 25 11 99 95">
                  <div className="flex items-center space-x-2">
                    <div className={"W-4 h-4"}>
                      <BsTelephone />
                    </div>
                    <span>+33 06 25 11 99 95</span>
                  </div>
                </FooterLayout.Link>
                <FooterLayout.Link href="/contact">
                  <div className="flex items-center space-x-2">
                    <div className={"W-4 h-4"}>
                      <BsHouse />
                    </div>
                    <span>25 avenue Saint-Amant - 59300 Valencienne</span>
                  </div>
                </FooterLayout.Link>
                <FooterLayout.Link href="tel:+33 07 53 44 54 40">
                  <div className="flex items-center space-x-2">
                    <div className={"W-4 h-4"}>
                      <BsTelephone />
                    </div>
                    <span>+33 07 53 44 54 40</span>
                  </div>
                </FooterLayout.Link>
              </FooterLayout.LinkGroup>
            </div>
            <div>
              <FooterLayout.Title title="Mentions" />
              <FooterLayout.LinkGroup col>
                <FooterLayout.Link href="/les-prix">Nos Tarifs</FooterLayout.Link>
                <FooterLayout.Link href="/mentions-legales">
                  Mentions Légales
                </FooterLayout.Link>
                <FooterLayout.Link href="/politique-de-confidentialite">
                  Politique de Confidentialité
                </FooterLayout.Link>
                <FooterLayout.Link href="/conditions-generales-utilisation">
                  Conditions générales d'utilisation
                </FooterLayout.Link>
              </FooterLayout.LinkGroup>
            </div>
          </div>
        </div>
        <FooterLayout.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterLayout.Copyright
            href="/"
            by="DEPANN TOUT EXPRESS™"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterLayout.Icon
              target={"_blank"}
              href="https://www.facebook.com/profile.php?id=100067188132092"
              icon={BsFacebook}
            />
            {/*<FooterLayout.Icon href="#" icon={BsInstagram}/>
                        <FooterLayout.Icon href="#" icon={BsTwitter}/>*/}
          </div>
        </div>
      </div>
    </FooterLayout>
  );
}
