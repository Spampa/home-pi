'use client'

import { useEffect, useState } from "react";
import { Card } from "../ui/card";


interface Device {
    id: Number
    name: string
    ip: string
    deviceType: {
        id: Number
        name: string
        icon: string
    }
}

export const DevicesContainer = () => {
    const [devices, setDevices] = useState([])

    useEffect(() => {
        fetch('/api/devices')
            .then(res => res.json())
            .then(data => setDevices(data));
    }, []);
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2">
            {
                devices.map((device: Device) => <Card key={device.id.toString()} name={device.name} ip={device.ip} iconName={device.deviceType.icon} />)
            }
        </div>
    )
}