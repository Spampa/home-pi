interface Element {
    id: string
    name: string
}

interface SelectProps {
    name: string
    label: string
    elements: Array<Element>
}


export const PrimarySelect: React.FC<SelectProps> = ({ name, label, elements }) => {
    return (
        <div className="w-full">
            <p>{label}</p>
            <select name={name} className="w-full p-2 text-black rounded-sm outline outline-2 outline-blue-200 focus:outline-blue-600">
                {
                    elements.map((element, index) => {
                        return (
                            <option key={index} value={element.id}>{element.name}</option>
                        )
                    })
                }
            </select>
        </div>

    )
}