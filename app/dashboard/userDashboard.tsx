"use client"

import { Header } from "@/app/components/layout/header"
import { DeviceModal } from "@/app/components/ui/deviceModal"
import { ToolButton } from "../components/ui/buttons/toolButton"
import { AnimatePresence, motion } from "framer-motion"
import { DevicesContainer } from "../components/dashboard/devicesContainer"
import { useState } from "react"

interface Device {
    id: Number
    name: string
    ip: string
}

export default function UserDashboard() {
    const [deviceIsOpen, deviceSetIsOpen] = useState(false);

    return (
        <main>
            <Header />
            <div className="container mt-6 flex flex-col gap-2">
                <div>
                    <div className="flex flex-row gap-2">
                        <ToolButton label="Add Device" iconName="PlusCircleIcon" action={() => deviceSetIsOpen(true)} />
                    </div>
                </div>
                <DevicesContainer />
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
        </main>
    )
}