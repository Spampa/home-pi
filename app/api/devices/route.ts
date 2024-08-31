import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { verifySession } from "@/app/lib/dal";

export async function GET(){
    const isAuth = (await verifySession()).isAuth;

    if(!isAuth){
        return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
    }

    const devices = await prisma.device.findMany();
    return NextResponse.json(devices, {status: 200});
}

export async function POST(req: Request){
    const isAuth = (await verifySession()).isAuth;
    const data = await req.json();

    if(!isAuth){
        return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
    }

    const newDevice = await prisma.device.create({
        data: {
            name: data.name,
            ip: data.ip,
            typeId: parseInt(data.type)
        }
    })

    return NextResponse.json(newDevice, { status: 201 });
}