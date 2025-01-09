import { HiHome } from "react-icons/hi";
import { Breadcrumb } from "flowbite-react";

const MentionsLegales = () => {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
        <div className="container mx-auto py-10">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-light">Mentions Légales</h2>
            <Breadcrumb aria-label="Subpage breadcrumb">
              <Breadcrumb.Item href="/" icon={HiHome}>
                Accueil
              </Breadcrumb.Item>
              <Breadcrumb.Item>Mentions Légales</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10 lg:my-20">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
          <p>Raison sociale: GROUPE DEPANNETOUTEXPRESS</p>
          <p>Enseigne: DEPANN TOUT EXPRESS</p>
          <p>Forme juridique : SAS Société par actions simplifiée</p>
          <p>Capital: 1 000,00 euros</p>
          <p>Adresse: 198 Rue de l'Alma 59100 Roubaix</p>
          <p>Téléphone: +33 6 25 11 12 81</p>
          <p>Téléphone: +33 3 20 84 38 99</p>
          <p>Email: depanntoutexpress@hotmail.fr</p>
          <p>Responsable de la publication : Khadim NDIAYE</p>
          <p>Code NAF: 43.39Z</p>
          <p>SIREN: 929270676</p>
          <p>SIRET: 92927067600018 annuaire-entreprises.data.gouv.fr</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
          <p>Hébergeur : DigitalOcean</p>
          <p>
            Adresse : 101 Avenue of the Americas, 10th Floor, New York, NY
            10013, USA
          </p>
          <p>Téléphone : +1 (347) 903-7918</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Propriété intellectuelle
          </h2>
          <p>
            Le contenu du site https://depanntoutexpress.fr/ est la propriété
            exclusive de Depann Tout Express. Toute reproduction, distribution,
            modification, adaptation, retransmission ou publication, même
            partielle, de ces différents éléments est strictement interdite sans
            l'accord exprès par écrit de Depann Tout Express.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Données personnelles</h2>
          <p>
            Conformément à la loi Informatique et Libertés du 6 janvier 1978
            modifiée, vous disposez d'un droit d'accès, de rectification, de
            modification et de suppression des données vous concernant. Vous
            pouvez exercer ce droit en envoyant un courrier à l'adresse
            suivante: Depann Tout Express, 25 Avenue Saint-Amant, 59300
            Valenciennes, France.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p>
            Le site https://depanntoutexpress.fr/ peut-être amené à vous
            demander l'acceptation des cookies pour des besoins de statistiques
            et d'affichage. Un cookie est une information déposée sur votre
            disque dur par le serveur du site que vous visitez.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Liens hypertextes</h2>
          <p>
            Le site https://depanntoutexpress.fr/ peut contenir des liens
            hypertextes vers d'autres sites présents sur le réseau Internet. Les
            liens vers ces autres ressources vous font quitter le site
            https://depanntoutexpress.fr/.
          </p>
        </section>
      </div>
    </>
  );
};

export default MentionsLegales;
