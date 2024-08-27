import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcryptjs"

//auth
import { createSession } from "@/app/lib/session";

export async function POST(req: Request){
    const data = await req.json();
    const user = await prisma.user.findUnique({
        where: {
            username: data.username
        },
        include: {
            role: true
        }
    });
    
    console.log(user);

    if(!user){
        return NextResponse.json({success: false, error: "User not found"}, { status: 404 });
    }
    
    const isPWDCorrect = await bcrypt.compare(data.password, user.password);

    if(!isPWDCorrect){
        return NextResponse.json({success: false, error: "Password Not Correct"}, { status: 401 });
    }

    await createSession(user.username, user.role.name);
    return NextResponse.json({username: user.username, role: user.role.name}, { status: 200 });
}