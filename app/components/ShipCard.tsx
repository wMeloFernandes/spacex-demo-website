import { CoreMission } from "@/util/types/graphql";
import { LinkIcon } from "../icons/Link";

export const ShipCard = ({ name, image, missions }: { name: string; image: string | null; missions: CoreMission[] }) => {
    const DEFAULT_IMAGE = 'https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg'

    return <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
        <div className="relative w-32 h-32 flex-shrink-0">
            <img className="absolute left-0 top-0 w-full h-full object-cover object-center" src={image ?? DEFAULT_IMAGE} />
        </div>
        <div className="flex flex-col gap-2 py-2">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-gray-500">
                {`${missions.length} mission${missions.length > 1 ? 's' : ''}`}
            </p>
            <span className="flex items-center justify-start text-gray-500 cursor-pointer hover:underline">
                <LinkIcon className="h-4 w-4 mr-1" />

                <span>See Details</span>
            </span>
        </div>
    </div>
}