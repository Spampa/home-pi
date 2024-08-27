import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { verifySession } from "@/app/lib/dal";
import bcrypt from "bcryptjs"

export async function POST(req: Request){
    const session = await verifySession();
    const data = await req.json();

    if(session.role !== 'admin'){
        return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
    }

    const hashPWD = await bcrypt.hash(data.password, 10);
    const newUser = await prisma.user.create({
        data: {
            username: data.username,
            password: hashPWD,
            roleId: parseInt(data.role)
        }
    })

    return NextResponse.json(newUser, { status: 201 });
}