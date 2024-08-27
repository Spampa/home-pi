"use client"

interface ButtonProps {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    action?: () => void
}

export const AdminButton: React.FC<ButtonProps> = ({ label, type = 'button', action }) => {
    return(
        <button 
            className="px-3 py-2 bg-orange-800 hover:bg-orange-700 text-white rounded-md font-bold text-lg transition-colors"
            onClick={action}
            type={type}
        >
            {label}
        </button>
    )
}
