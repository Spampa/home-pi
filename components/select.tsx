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
        <div className="w-full">
            <p>{label}</p>
            <select className="w-full p-2 text-black rounded-sm outline outline-2 outline-blue-200 focus:outline-blue-600">
                {
                    elements.map((element, index) => {
                        return (
                            <option key={index} value={element.key}>{element.name}</option>
                        )
                    })
                }
            </select>
        </div>

    )
}