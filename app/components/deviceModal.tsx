'use client'

import { TextInput } from "./textInput"
import { PencilSquareIcon, XCircleIcon, WifiIcon } from "@heroicons/react/24/solid"
import { IconButton } from "./iconButton"
import { PrimarySelect } from "./select"
import { PrimaryButton } from "./primaryButton"
import { FormEvent, useEffect, useState } from "react"

interface DeviceModalProps {
    isOpen: boolean
    closeModal: () => void
}

export const DeviceModal: React.FC<DeviceModalProps> = ({isOpen, closeModal}) => {
    
    const [ types, setTypes ] = useState([]);

    useEffect(() => {
        fetch('/api/deviceTypes')
            .then(res => res.json())
            .then(data => setTypes(data));
    }, [])

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const deviceName = formData.get('deviceName');
        const deviceIP = formData.get('deviceIP');
        const deviceType = formData.get('deviceType');

        const response = await fetch('/api/devices', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(
                {
                    name: deviceName,
                    ip: deviceIP,
                    type: deviceType
                }
            )
        });

        if(response.ok){
            closeModal();
        }
    }

    if(isOpen){
        return(
            <div 
                className="absolute top-0 h-screen flex items-center place-content-center w-screen bg-black bg-opacity-65"
            >
                <form 
                    className="flex flex-col items-center place-content-between gap-3 p-3 bg-blue-900 rounded-md shadow-md h-1/3 m-5 w-full md:w-1/2 xl:w-1/3"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-row place-content-between w-full align-middle">   
                        <h2 className="text-xl font-semibold">New Device</h2>
                        <IconButton action={closeModal} icon={<XCircleIcon />} />
                    </div>
                    <TextInput name="deviceName" label="Device Name" type="text" icon={<PencilSquareIcon />} required={true} />
                    <TextInput name="deviceIP" label="IP" type="text" icon={<WifiIcon />} required={true} />
                    <PrimarySelect name="deviceType" label="Device" elements={types}/>
                    <PrimaryButton type="submit" label="Crea" />
                </form>
            </div>
        )
    }
}