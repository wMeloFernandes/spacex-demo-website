export const ShipCard = ({ name, image, missions }: { name: string; image: string | null; missions: any[] }) => {
    return <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
        <div className="relative w-32 h-32 flex-shrink-0">
            <img className="absolute left-0 top-0 w-full h-full object-cover object-center" src={image ?? ''} />
        </div>
        <div className="flex flex-col gap-2 py-2">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-gray-500">
                Description
            </p>
            <span className="text-gray-500 cursor-pointer hover:underline">
                See Details
            </span>
        </div>
    </div>
}