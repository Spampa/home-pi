"use client"

import { Header } from "@/app/components/header"
import { Card } from "@/app/components/card"
import { DeviceModal } from "@/app/components/deviceModal"
import { PrimaryButton } from "@/app/components/primaryButton"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export default function UserDashboard() {
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <main>
            <Header />
            <div className="container mt-6 flex flex-col gap-2">
                <div>
                    <PrimaryButton label="Add Device" action={openModal} />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2">
                    <Card name="PC Desktop" ip="192.168.1.7" iconName="PowerIcon" />
                    <Card name="Pi Pico Garage" ip="192.168.1.13" iconName="CpuChipIcon" />
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