interface Props {
    img: string,
    alt: string,
    title: string
}

export default function Card({img, alt, title}: Props) {
    return <div className="bg-white w-full shadow-md rounded-lg flex flex-col items-center justify-center">
        <img className="h-[128px] w-full object-cover rounded-t-lg" src={img} alt={alt}/>
        <div className="flex-1 min-h-[72px] flex flex-col items-center justify-center">
            <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white text-center">{title}</h5>
        </div>
    </div>
}