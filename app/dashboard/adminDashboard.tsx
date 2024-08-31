"use client"

import { Header } from "@/app/components/header"
import { Card } from "@/app/components/card"
import { DeviceModal } from "@/app/components/deviceModal"
import { UserModal } from "../components/userModal"
import { ToolButton } from "../components/toolButton"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Device {
    id: Number
    name: string
    ip: string
}

export default function AdminDashboard() {
    const [deviceIsOpen, deviceSetIsOpen] = useState(false);
    const [userIsOpen, userSetIsOpen] = useState(false);

    const [ devices, setDevices ] = useState([]);

    useEffect(() => {
        fetch('/api/devices')
        .then(res => res.json())
        .then(data => setDevices(data));
    }, []);

    return (
        <main>
            <Header />
            <div className="container mt-6 flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                    <ToolButton label="Add Device" iconName="PlusCircleIcon" action={() => deviceSetIsOpen(true)} />
                    <ToolButton label="Add Users" iconName="UserPlusIcon" action={() => userSetIsOpen(true)} />
                    <ToolButton label="Add Device Type" iconName="SquaresPlusIcon" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2">
                    {
                        devices.map((device: Device) => <Card key={device.id.toString()} name={device.name} ip={device.ip} iconName="PowerIcon" />)
                    }
                </div>
            </div>
            <AnimatePresence mode="wait" initial={false}>
                {
                    deviceIsOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <DeviceModal isOpen={deviceIsOpen} closeModal={() => deviceSetIsOpen(false)} />
                        </motion.div>
                    )
                }
            </AnimatePresence>
            <AnimatePresence mode="wait" initial={false}>
                {
                    userIsOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <UserModal isOpen={userIsOpen} closeModal={() => userSetIsOpen(false)} />
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </main>
    )
}