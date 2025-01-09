import { HiHome } from "react-icons/hi";
import { Breadcrumb } from "flowbite-react";

const CGU = () => {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
        <div className="container mx-auto py-10">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-light">
              Conditions générales d'utilisation
            </h2>
            <Breadcrumb aria-label="Subpage breadcrumb">
              <Breadcrumb.Item href="/" icon={HiHome}>
                Accueil
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Conditions générales d'utilisation
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10 lg:my-20">
        <h1 className="text-3xl font-bold mb-8">
          Conditions Générales d'Utilisation
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Préambule</h2>
          <p>
            Les présentes conditions générales d'utilisation (CGU) ont pour
            objet de définir les modalités et conditions dans lesquelles Depann
            Tout Express met à la disposition de ses utilisateurs le site
            https://depanntoutexpress.fr/.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Accès au site</h2>
          <p>
            Le site est accessible gratuitement à tout utilisateur disposant
            d'un accès à Internet. Tous les coûts relatifs à l'accès au site,
            que ce soient les frais matériels, logiciels ou d'accès à Internet,
            sont exclusivement à la charge de l'utilisateur. Il est seul
            responsable du bon fonctionnement de son équipement informatique
            ainsi que de son accès à Internet.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Propriété intellectuelle
          </h2>
          <p>
            Le site https://depanntoutexpress.fr/ et chacun des éléments qui le
            composent, notamment mais non limitativement, les textes, images,
            vidéos, photographies, sons, dessins, graphismes, etc., sont la
            propriété exclusive de Depann Tout Express et sont protégés par le
            droit de la propriété intellectuelle. Toute reproduction,
            représentation, modification, publication, adaptation de tout ou
            partie des éléments du site, quel que soit le moyen ou le procédé
            utilisé, est interdite, sauf autorisation écrite préalable de Depann
            Tout Express.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Responsabilité</h2>
          <p>
            Depann Tout Express s'efforce de fournir sur le site
            https://depanntoutexpress.fr/ des informations aussi précises que
            possible. Toutefois, il ne pourra être tenu responsable des
            omissions, des inexactitudes et des carences dans la mise à jour,
            qu'elles soient de son fait ou du fait des tiers partenaires qui lui
            fournissent ces informations.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Données personnelles</h2>
          <p>
            Les informations personnelles que l'utilisateur peut être amené à
            fournir sont protégées conformément à la loi Informatique et
            Libertés du 6 janvier 1978. L'utilisateur dispose d'un droit
            d'accès, de rectification, de modification et de suppression des
            données le concernant. Pour exercer ce droit, l'utilisateur peut
            envoyer un courrier à l'adresse suivante : Depann Tout Express, 25
            Avenue Saint-Amant, 59300 Valenciennes, France.
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
            https://depanntoutexpress.fr/. Depann Tout Express ne peut être tenu
            responsable du contenu de ces sites tiers.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modification des CGU</h2>
          <p>
            Depann Tout Express se réserve le droit de modifier les présentes
            conditions générales d'utilisation à tout moment. Les modifications
            apportées prendront effet dès leur publication sur le site. Il est
            donc conseillé à l'utilisateur de consulter régulièrement la
            dernière version des CGU disponible sur le site.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            Pour toute question relative aux présentes conditions générales
            d'utilisation, vous pouvez nous contacter à l'adresse suivante :
            contact@depanttoutexpress.fr.
          </p>
        </section>
      </div>
    </>
  );
};

export default CGU;
