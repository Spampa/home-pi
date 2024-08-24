import React, { useState } from "react";

interface TextInputProps {
    label: string;
    type: string;
    name: string;
    required?: boolean;
    icon: React.ReactNode;
}


export const TextInput: React.FC<TextInputProps> = ({ label, type, name, required = false, icon }) => {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <div className={`flex flex-row items-center align-middle rounded-sm
            outline outline-2
            ${isFocus ? 'outline-blue-600' : 'outline-blue-200'}
            transition-colors w-full`
        }>
            <div className="p-2 bg-blue-400">
                <div className="size-6 text-white ">
                    {icon}
                </div>
            </div>
            <input
                className="p-2 w-full focus:outline-none text-black rounded-none"
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                type={type}
                placeholder={label}
                required={required}
                name={name}
            />
        </div>

    )
}