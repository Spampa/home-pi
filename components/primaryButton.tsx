interface ButtonProps {
    label: string;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ label }) => {
    return(
        <button 
            className="px-3 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-md font-bold text-lg transition-colors"
        >
            {label}
        </button>
    )
}
