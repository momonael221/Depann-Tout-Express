import {Button, DarkThemeToggle, Dropdown, Navbar as NavbarLayout, useThemeMode} from 'flowbite-react';

export default function Navbar() {
    const {mode} = useThemeMode();

    return (
        <header className="flex flex-col">
            <NavbarLayout className={"gap-8"} fluid={false} border={true}>
                <NavbarLayout.Brand href="/">
                    {mode === 'light' ? <img src="/logo-light.png" className="mr-3" alt="Depann Tout Express Logo"/>
                        : <img src="/logo-dark.png" className="mr-3" alt="Depann Tout Express Logo"/>}
                </NavbarLayout.Brand>
                <div className="flex md:order-2">
                    <DarkThemeToggle/>
                    <NavbarLayout.Toggle />
                </div>
                <NavbarLayout.Collapse>
                    <NavbarLayout.Link href={"/"}>Accueil</NavbarLayout.Link>
                    <NavbarLayout.Link>
                        <Dropdown label="Serrurerie" arrowIcon={true} inline>
                            <Dropdown.Item><NavbarLayout.Link href="/serrurerie">Travaux de serrurerie</NavbarLayout.Link></Dropdown.Item>
                            <Dropdown.Item><NavbarLayout.Link href="/depannage-serrurerie">Ouverture de portes</NavbarLayout.Link></Dropdown.Item>
                            <Dropdown.Item><NavbarLayout.Link href="/pose-serrure">Changement de serrures</NavbarLayout.Link></Dropdown.Item>
                        </Dropdown>
                    </NavbarLayout.Link>
                    <NavbarLayout.Link>
                        <Dropdown label="Rénovation" arrowIcon={true} inline>
                            <Dropdown.Item><NavbarLayout.Link href="/travaux-de-renovation">Travaux de rénovation</NavbarLayout.Link></Dropdown.Item>
                            <Dropdown.Item><NavbarLayout.Link href="/revetement-sol">Revêtements</NavbarLayout.Link></Dropdown.Item>
                            <Dropdown.Item><NavbarLayout.Link href="/platerie">Plâtrerie</NavbarLayout.Link></Dropdown.Item>
                            <Dropdown.Item><NavbarLayout.Link href="/peinture">Peinture</NavbarLayout.Link></Dropdown.Item>
                            <Dropdown.Item><NavbarLayout.Link href="/menuiserie">Menuiserie</NavbarLayout.Link></Dropdown.Item>
                            <Dropdown.Item><NavbarLayout.Link href="/electricite">Électricité</NavbarLayout.Link></Dropdown.Item>
                            <Dropdown.Item><NavbarLayout.Link href="/isolateur-interieure">Isolation intérieure</NavbarLayout.Link></Dropdown.Item>
                        </Dropdown>
                    </NavbarLayout.Link>
                    <NavbarLayout.Link href="/reparation-plomberie">Réparation plomberie</NavbarLayout.Link>
                    <NavbarLayout.Link href="/vitrerie">Vitrerie</NavbarLayout.Link>
                    <NavbarLayout.Link>
                        <Dropdown label="Contact" arrowIcon={true} inline>
                            <Dropdown.Item><NavbarLayout.Link href="/about">À propos</NavbarLayout.Link></Dropdown.Item>
                            <Dropdown.Item><NavbarLayout.Link href="/contact">Contactez-nous</NavbarLayout.Link></Dropdown.Item>
                        </Dropdown>
                    </NavbarLayout.Link>
                </NavbarLayout.Collapse>
            </NavbarLayout>

            <div className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between py-4 space-x-1">
                        <Button href={"tel:+33 06 25 11 12 81"} color="gray" pill>
                            <svg className="w-6 h-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"/>
                            </svg>
                            <span className="text-sm xl:text-base font-normal">Appelez-nous (urgences 24h/24)</span>
                        </Button>
                        <Button href={"tel:+33 03 20 84 38 99"} color="gray" pill className="w-10 h-10 sm:w-auto sm:h-auto flex flex-col sm:flex-row justify-center items-center">
                            <svg className="w-4 h-4 sm:w-6 sm:h-6 fill-current sm:mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                            </svg>
                            <span className="hidden sm:inline-block text-sm xl:text-base font-normal">Appelez-nous</span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}