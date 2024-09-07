import React from "react";

//icons
import * as icons from "@heroicons/react/24/solid"

interface CardProps {
    name: string;
    ip: string;
    iconName: string;
}

export const Card: React.FC<CardProps> = ({ name, ip, iconName }) => {
    console.log(iconName)
    const IconComponent = (icons as { [key: string]: React.ElementType })[iconName] || icons["HashtagIcon"];
    return (
        <div className="p-3 border-2 border-blue-400 rounded-md h-60 dark:bg-slate-800 hover:dark:bg-slate-700 transition-colors dark:text-white flex flex-col place-content-between items-center align-middle">
            <h3 className="text-lg font-semibold text-center">{name}</h3>
            <IconComponent className="size-16 text-white" />
            <p className=" text-base text-center dark:text-slate-500">{ip}</p>
        </div>
    )
}