"use client"

import { Header } from "@/app/components/header"
import { Card } from "@/app/components/card"
import { DeviceModal } from "@/app/components/deviceModal"
import { UserModal } from "../components/userModal"
import { PrimaryButton } from "@/app/components/primaryButton"
import { AdminButton } from "../components/adminButton"
import { AnimatePresence, motion } from "framer-motion"
import { SetStateAction, useState } from "react"

export default function AdminDashboard() {
    const [deviceIsOpen, deviceSetIsOpen] = useState(false);
    const [userIsOpen, userSetIsOpen] = useState(false);

    return (
        <main>
            <Header />
            <div className="container mt-6 flex flex-col gap-2">
                <div className="flex flex-row gap-1">
                    <PrimaryButton label="Add Device" action={() => deviceSetIsOpen(true)} />
                    <AdminButton label="Add Users" action={() => userSetIsOpen(true)} />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2">
                    <Card name="PC Desktop" ip="192.168.1.7" iconName="PowerIcon" />
                    <Card name="Pi Pico Garage" ip="192.168.1.13" iconName="CpuChipIcon" />
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