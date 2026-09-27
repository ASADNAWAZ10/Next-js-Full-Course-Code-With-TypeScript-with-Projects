import User from "@/app/model/user.model";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/lib/db"
import bcrypt from "bcrypt"

export async function POST(request:NextRequest){
    try {
        const {name, email, password} = await request.json()
        await connectDB()
        const existUser = await User.findOne({email})
        if(existUser){
            return NextResponse.json({message:"User already exists"}, {status:400})
        }

        if(password.length < 6){
            return NextResponse.json(
                {message: "password must be at least 6 characters"}, {status:400}
            )
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const user = await User.create({
            name, email, password:hashedPassword
        })

        return NextResponse.json(
            {message: user},
            {status:201}
        )
    } catch (error) {
        return NextResponse.json(
            {message: `register error ${error}`},
            {status:500}
        )
    }
}