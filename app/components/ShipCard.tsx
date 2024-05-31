export const ShipCard = ({ name, image, missions }: { name: string; image: string | null; missions: any[] }) => {
    return <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
        <div className="relative w-32 h-32 flex-shrink-0">
            <img className="absolute left-0 top-0 w-full h-full object-cover object-center" src={image ?? ''} />
        </div>
    </div>
}