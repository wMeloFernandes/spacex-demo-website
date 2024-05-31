"use client";
import { CoreMission } from "@/util/types/graphql";

export const ShipDetails = ({ enabled, onClose, missions, shipName }: { enabled: boolean; onClose: () => void; missions: CoreMission[]; shipName: string }) => {
    return enabled && <div className="relative z-10" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500/70"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-md transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="flex justify-center">
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 className="text-base font-semibold leading-6 text-gray-900">Missions: {`${shipName}`}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        {missions.map((mission) => {
                            return <div className="flex flex-col" key={mission.id}>
                                <p className="text-md text-gray-500" >ID: {mission.id}</p>
                                <p className="text-md text-gray-500" >Name: {mission.name}</p>
                            </div>
                        })}
                    </div>

                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={onClose}>OK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}