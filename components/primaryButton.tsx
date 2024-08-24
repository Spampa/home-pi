"use client"

interface ButtonProps {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    action?: () => void
}

export const PrimaryButton: React.FC<ButtonProps> = ({ label, type = 'button', action }) => {
    return(
        <button 
            className="px-3 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-md font-bold text-lg transition-colors"
            onClick={action}
            type={type}
        >
            {label}
        </button>
    )
}
