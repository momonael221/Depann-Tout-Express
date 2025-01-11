import { HiHome } from "react-icons/hi";
import { Breadcrumb, Table } from "flowbite-react";

const Pricing = () => {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-700">
        <div className="container mx-auto py-10">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-light">Nos Tarifs</h2>
            <Breadcrumb aria-label="Subpage breadcrumb">
              <Breadcrumb.Item href="/" icon={HiHome}>
                Accueil
              </Breadcrumb.Item>
              <Breadcrumb.Item>Nos Tarifs</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10 lg:my-20">
        <p className="text-center mb-8 max-w-2xl mx-auto">
        Voici quelques tarifs de base TTC avec un taux de TVA de 10%, pour des prestations de jour et en semaine, incluant le forfait déplacement dans la zone concernée. 
        </p>
        <section className="mb-8">
          <div className="overflow-x-auto">
            <Table hoverable className="min-w-full">
              <Table.Head>
                <Table.HeadCell>Service</Table.HeadCell>
                <Table.HeadCell>Prix</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>Ouverture de porte claquée simple</Table.Cell>
                  <Table.Cell>79€</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>Fermeture provisoire suite à un cambriolage</Table.Cell>
                  <Table.Cell>160€</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>Pose de verrou ou changement de barillet simple</Table.Cell>
                  <Table.Cell>140€</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>Pose de serrure de sécurité 3 points</Table.Cell>
                  <Table.Cell>À partir de 260€</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Informations Complémentaires</h2>
          <p>
            Les tarifs indiqués sont toutes taxes comprises (TTC). Pour toute intervention en dehors des heures ouvrables (nuit, week-end, jours fériés), un supplément de 50% sera appliqué.
          </p>
          <p>
            Pour plus d'informations ou pour obtenir un devis personnalisé, n'hésitez pas à nous contacter à l'adresse suivante : depanntoutexpress@hotmail.fr.
          </p>
        </section>
      </div>
    </>
  );
};

export default Pricing;
