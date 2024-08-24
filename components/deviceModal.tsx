import { TextInput } from "./textInput"
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/solid"
import { IconButton } from "./iconButton"
import { PrimarySelect } from "./select"
import { PrimaryButton } from "./primaryButton"
import React from "react"

interface DeviceModalProps {
    isOpen: boolean
    closeModal: () => void
}

export const DeviceModal: React.FC<DeviceModalProps> = ({isOpen, closeModal}) => {
    if(isOpen){
        return(
            <div 
                className="absolute top-0 h-screen flex items-center place-content-center w-screen bg-black bg-opacity-65"
            >
                <div className="flex flex-col items-center place-content-between gap-3 p-3 bg-blue-900 rounded-md shadow-md h-1/3 m-5 w-full md:w-1/2 xl:w-1/3">
                    <div className="flex flex-row place-content-between w-full align-middle">   
                        <h2 className="text-xl font-semibold">New Device</h2>
                        <IconButton action={closeModal} icon={<XCircleIcon />} />
                    </div>
                    <TextInput name="deviceName" label="Device Name" type="text" icon={<PencilSquareIcon />} />
                    <PrimarySelect label="Device" elements={[{key: 'PC', name: 'PC'}]}/>
                    <PrimaryButton label="Crea" action={() => null}/>
                </div>
            </div>
        )
    }
}