import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request){
    const data = await req.json();
    const test = await prisma.user.findUnique({
        where: {
            username: data.username
        }
    });
    console.log(test);
    return NextResponse.json({success: true});
}