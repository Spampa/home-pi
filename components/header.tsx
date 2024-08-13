import { IconButton } from "./iconButton"
import { PlusCircleIcon } from "@heroicons/react/24/solid"

export const Header = () => {
    return(
        <header className="flex flex-row w-screen bg-blue-800 text-blue-100 p-3 place-content-between items-center align-middle">
            <div>
                <h1 className="text-xl font-bold">HomePi</h1>
            </div>
            <div className="flex flex-row gap-3 items-center align-middle">
                <IconButton size="8" icon={<PlusCircleIcon />} />
                <h3 className="text-lg font-semibold">Hi User!</h3>
            </div>
        </header>
    )
}