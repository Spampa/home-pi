'use client'

import { logout } from "@/app/actions/logout";

import { IconButton } from "./iconButton";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { userInfo } from "../lib/userInfo";
import { useState } from "react";

export const Header = () => {
    const [user] = useState(userInfo())

    return(
        <header className="flex flex-row w-screen bg-blue-800 text-blue-100 p-3 place-content-between items-center align-middle">
            <div>
                <h1 className="text-xl font-bold">HomePi</h1>
            </div>
            <div className="flex flex-row gap-3 items-center align-middle">
                <IconButton icon={<ArrowLeftStartOnRectangleIcon />} action={() => logout()} />
                <h3 className="text-lg font-semibold">Hi {user?.username}!</h3>
            </div>
        </header>
    )
}