import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { verifySession } from "@/app/lib/dal";

export async function GET(){
    const isAuth = (await verifySession()).isAuth;

    if(!isAuth){
        return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
    }

    const deviceTypes = await prisma.deviceType.findMany();
    return NextResponse.json(deviceTypes, {status: 200});
}