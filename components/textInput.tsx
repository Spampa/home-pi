import React from "react";

interface TextInputProps {
    label: string;
    type: string;
    icon: React.ReactNode;
}


export const TextInput: React.FC<TextInputProps> = ({ label, type, icon }) => {
    return (
        <div className="flex flex-row items-center align-middle rounded-sm border-2 border-blue-200 focus:border-blue-400 transition-colors w-full">
            <div className="p-2 bg-blue-400">
                <div className="size-6 text-white ">
                    {icon}
                </div>
            </div>
            <input
                className="p-2 w-full focus:outline-none text-black rounded-none "
                type={type}
                placeholder={label}
            />
        </div>

    )
}