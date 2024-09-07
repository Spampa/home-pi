"use client"

import { motion } from "framer-motion";

interface ButtonProps {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    iconName: keyof typeof icons;
    action?: () => void;
}

//icons
import * as icons from "@heroicons/react/24/solid"
import { useState } from "react";

export const ToolButton: React.FC<ButtonProps> = ({ label, type = 'button', iconName, action }) => {

    const [isOver, setIsOver] = useState(false);
    const IconComponent = icons[iconName];

    return (
        <button
            className={`p-1 outline-2 rounded-md transition-all border-2 outline-blue-400 border-blue-400
                ${isOver ? 'bg-blue-400 text-white' : 'text-blue-400'} 
                flex flex-row items-center gap-1`}
            onClick={action}
            onMouseEnter={() => setIsOver(true)}
            onMouseLeave={() => setIsOver(false)}
            type={type}
        >
            <IconComponent className="size-7 w-8" />
            {
                isOver ?
                    <motion.div
                        className="box"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <h4 className="font-semibold text-base">
                            {label}
                        </h4>
                    </motion.div>
                    :
                    null
            }

        </button>
    )
}
