"use client"

import { Header } from "@/app/components/header"
import { Card } from "@/app/components/card"
import { DeviceModal } from "@/app/components/deviceModal"
import { PrimaryButton } from "@/app/components/primaryButton"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Device {
    id: Number
    name: string
    ip: string
}

export default function UserDashboard() {
    const [isOpen, setIsOpen] = useState(false);

    const [ devices, setDevices ] = useState([]);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        fetch('/api/devices')
        .then(res => res.json())
        .then(data => setDevices(data));
    }, []);

    return (
        <main>
            <Header />
            <div className="container mt-6 flex flex-col gap-2">
                <div>
                    <PrimaryButton label="Add Device" action={openModal} />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2">
                    {
                        devices.map((device: Device) => <Card key={device.id.toString()} name={device.name} ip={device.ip} iconName="PowerIcon" />)
                    }
                </div>
            </div>
            <AnimatePresence mode="wait" initial={false}>
                {
                    isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <DeviceModal isOpen={isOpen} closeModal={closeModal} />
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </main>
    )
}