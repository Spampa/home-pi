interface Element {
    key: string
    name: string
}

interface SelectProps {
    label: string;
    elements: Array<Element>
}


export const PrimarySelect: React.FC<SelectProps> = ({ label, elements }) => {
    return (
        <select className="w-full p-2 text-black rounded-sm outline outline-2 outline-blue-200 focus:outline-blue-600">

        </select>
    )
}