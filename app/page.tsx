"use server"

import { verifySession } from "@/app/lib/dal"
import UserDashboard from "./dashboard/userDashboard"

export default async function Dashboard() {
    const session = await verifySession();
    const userRole = session?.role;
    return (
        <UserDashboard />
    )
}