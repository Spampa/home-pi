import React from "react";

interface IconButtonProps {
    size: string;
    icon: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({size, icon}) => {
    return(
        <button className={`size-${size} text-blue-100 hover:text-blue-50`}>
            {icon}
        </button>
    )
}