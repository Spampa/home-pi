"use server"

import { verifySession } from "@/app/lib/dal"
import UserDashboard from "./dashboard/userDashboard"
import AdminDashboard from "./dashboard/adminDashboard";

export default async function Dashboard() {
    const session = await verifySession();
    const userRole = session?.role;
    if(userRole === 'user'){
        return (
            <UserDashboard />
        )
    }
    else if(userRole === 'admin'){
        return(
            <AdminDashboard />
        )
    }

}