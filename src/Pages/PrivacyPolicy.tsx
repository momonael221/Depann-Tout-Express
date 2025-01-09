import { HiHome } from "react-icons/hi";
import { Breadcrumb } from "flowbite-react";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
        <div className="container mx-auto py-10">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-light">Politique de Confidentialité</h2>
            <Breadcrumb aria-label="Subpage breadcrumb">
              <Breadcrumb.Item href="/" icon={HiHome}>
                Accueil
              </Breadcrumb.Item>
              <Breadcrumb.Item>Politique de Confidentialité</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10 lg:my-20">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Chez Depann Tout Express, nous prenons la confidentialité de vos
            données personnelles très au sérieux. Cette politique de
            confidentialité explique quelles informations nous collectons,
            comment nous les utilisons et les mesures que nous prenons pour les
            protéger.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Informations collectées
          </h2>
          <p>
            Nous collectons différentes informations lorsque vous utilisez notre
            site :
          </p>
          <ul className="list-disc list-inside">
            <li>
              Informations que vous nous fournissez directement : nom, adresse
              email, numéro de téléphone, etc.
            </li>
            <li>
              Informations collectées automatiquement : adresse IP, type de
              navigateur, pages visitées, etc.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Utilisation des informations
          </h2>
          <p>Les informations collectées sont utilisées pour :</p>
          <ul className="list-disc list-inside">
            <li>Fournir et améliorer nos services</li>
            <li>Communiquer avec vous</li>
            <li>Personnaliser votre expérience sur notre site</li>
            <li>Analyser l'utilisation de notre site</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Partage des informations
          </h2>
          <p>
            Nous ne partageons pas vos informations personnelles avec des tiers,
            sauf dans les cas suivants :
          </p>
          <ul className="list-disc list-inside">
            <li>Avec votre consentement</li>
            <li>Pour se conformer à la loi</li>
            <li>Pour protéger nos droits et notre propriété</li>
            <li>
              Avec des prestataires de services tiers qui nous aident à
              exploiter notre site
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Sécurité des informations
          </h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité pour protéger vos
            informations personnelles contre tout accès, utilisation ou
            divulgation non autorisés.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
          <p>
            Conformément à la loi Informatique et Libertés du 6 janvier 1978
            modifiée, vous disposez d'un droit d'accès, de rectification, de
            modification et de suppression des données vous concernant. Vous
            pouvez exercer ce droit en nous contactant à l'adresse suivante:
            depanntoutexpress@hotmail.fr
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Modifications de la politique de confidentialité
          </h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. Toute modification sera publiée sur
            cette page et prendra effet immédiatement.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            Si vous avez des questions concernant cette politique de
            confidentialité, vous pouvez nous contacter à l'adresse suivante:
            depanntoutexpress@hotmail.fr
          </p>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
