'use client'

import { logout } from "@/app/actions/logout";

import { IconButton } from "./iconButton";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { userInfo } from "../lib/userInfo";
import { useEffect, useState } from "react";

export const Header = () => {
    const [user, setUser] = useState({ username: "", role: "" });

    useEffect(() => {
        setUser(userInfo());
    }, [])

    return(
        <header className="flex flex-row w-screen bg-blue-800 text-blue-100 p-3 place-content-between items-center align-middle">
            <div>
                <h1 className="text-xl font-bold">HomePi</h1>
            </div>
            <div className="flex flex-row gap-3 items-center align-middle">
                <div className="flex flex-row gap-2 items-center">
                    <h4 className="text-sm rounded-md border-2 border-white px-1">{user?.role}</h4>
                    <h3 className="text-lg font-semibold">{user?.username}</h3>
                </div>
                <IconButton icon={<ArrowLeftStartOnRectangleIcon />} action={() => logout()} />
            </div>
        </header>
    )
}