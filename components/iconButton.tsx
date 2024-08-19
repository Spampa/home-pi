import React from "react";

interface IconButtonProps {
    icon: React.ReactNode;
    action: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({icon, action}) => {
    return(
        <button 
            className={`size-8 text-blue-100 hover:text-blue-50`}
            onClick={action}
        >
            {icon}
        </button>
    )
}