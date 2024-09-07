"use client"

import { Header } from "@/app/components/layout/header"
import { DeviceModal } from "@/app/components/ui/deviceModal"
import { UserModal } from "../components/ui/userModal"
import { ToolButton } from "../components/ui/buttons/toolButton"
import { AnimatePresence, motion } from "framer-motion"
import { DevicesContainer } from "../components/dashboard/devicesContainer"
import { useState } from "react"

export default function AdminDashboard() {
    const [deviceIsOpen, deviceSetIsOpen] = useState(false);
    const [userIsOpen, userSetIsOpen] = useState(false);

    return (
        <main>
            <Header />
            <div className="container mt-6 flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                    <ToolButton label="Add Device" iconName="PlusCircleIcon" action={() => deviceSetIsOpen(true)} />
                    <ToolButton label="Add Users" iconName="UserPlusIcon" action={() => userSetIsOpen(true)} />
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