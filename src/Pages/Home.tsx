import {Blockquote, Button, Card, Carousel} from "flowbite-react";

// Images & Videos
import Isolation from '../assets/img/isolation.jpg'
import Serrurerie from '../assets/img/serrurerie.jpg'
import Plomberie from '../assets/videos/plomberie.mp4'
import Amenagement from '../assets/videos/amenagement.mp4'

import Plombing from '../assets/img/plumbing.jpg';
import Vitrerie from '../assets/img/vitrerie.jpg';
import Renovation from '../assets/img/renovation.jpg';

export default function Home() {
    return <>
        <section>
            {/*<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">*/}
            <div className="h-[700px]">
                <Carousel pauseOnHover>
                    <div
                        className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img className="object-contain w-full" src={Serrurerie} alt="serrurerie.jpg"/>
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center space-y-6">
                            <h1 className="text-7xl text-center">Serrurerie</h1>
                            <Button color={"gray"} pill size={"xl"}>En Savoir Plus</Button>
                        </div>
                    </div>
                    <div
                        className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <video className="w-full" autoPlay muted loop>
                            <source src={Plomberie} type="video/mp4"/>
                        </video>
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center space-y-6">
                            <h1 className="text-7xl text-center">Plomberie</h1>
                            <Button color={"gray"} pill size={"xl"}>En Savoir Plus</Button>
                        </div>
                    </div>
                    <div
                        className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <video className="w-full" autoPlay muted loop>
                            <source src={Amenagement} type="video/mp4"/>
                        </video>
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center space-y-6">
                            <h1 className="text-7xl text-center">Rénovation et aménagement intérieur</h1>
                            <Button color={"gray"} pill size={"xl"}>En Savoir Plus</Button>
                        </div>
                    </div>
                    <div
                        className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img className="object-contain w-full" src={Isolation} alt="serrurerie.jpg"/>
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center space-y-6">
                            <h1 className="text-7xl text-center">Isolation intérieure</h1>
                            <Button color={"gray"} pill size={"xl"}>En Savoir Plus</Button>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className="bg-cyan-700 text-white font-medium w-full flex items-center justify-center py-4 border-b dark:border-gray-800">
                <h2>Nous sommes disponibles 24h24 / 7j7</h2>
            </div>
        </section>

        <section className="my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-10">
                    <div className="col-span-1 space-y-4">
                        <Blockquote>
                            <svg
                                className="mb-4 h-8 w-8 text-gray-400 dark:text-gray-600"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 14"
                            >
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            Notre entreprise se dévoue à fournir des services de dépannage et de rénovation de haute qualité. Que ce soit pour résoudre des problèmes imprévus ou pour donner une nouvelle vie à votre espace, nous sommes là pour vous. Notre équipe qualifiée et expérimentée s'engage à offrir des solutions fiables et durables. La satisfaction de nos clients est notre priorité, et nous travaillons avec détermination pour atteindre l'excellence dans chaque projet.
                        </Blockquote>
                        <Button color={"gray"} pill size={"xl"}>Qui sommes-nous?</Button>
                    </div>
                    <div className="col-span-1">
                        <iframe width="717" height="365" src="https://www.youtube.com/embed/gJN20En401A"
                                title="Depann Tout Express, dépannage rapide à Roubaix." frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section className="my-20">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl font-medium mt-20">Nos domaines d’intervention</h2>
                <div className="mt-16">
                    <div className="grid grid-cols-5 gap-10">
                        <div className="col-span-1">
                            <Card className="max-w-sm"
                                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                                  imgSrc={Serrurerie}>
                                <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white text-center">Serrurerie</h5>
                            </Card>
                        </div>
                        <div className="col-span-1">
                            <Card className="max-w-sm"
                                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                                  imgSrc={Plombing}>
                                <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white text-center">Plomberie sanitaire</h5>
                            </Card>
                        </div>
                        <div className="col-span-1">
                            <Card className="max-w-sm"
                                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                                  imgSrc={Renovation}>
                                <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white text-center">Aménagement</h5>
                            </Card>
                        </div>
                        <div className="col-span-1">
                            <Card className="max-w-sm"
                                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                                  imgSrc={Isolation}>
                                <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white text-center">Isolation intérieure</h5>
                            </Card>
                        </div>
                        <div className="col-span-1">
                            <Card className="max-w-sm"
                                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                                  imgSrc={Vitrerie}>
                                <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white text-center">Vitrerie</h5>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-first w-full my-20 py-10">

        </section>
    </>
}