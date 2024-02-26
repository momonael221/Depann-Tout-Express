import {Spinner} from "flowbite-react";

export default function Loading() {
    return <div className="min-h-screen flex flex-col items-center justify-center">
        <Spinner aria-label="Chargement du page..." size="xl"/>
    </div>
}