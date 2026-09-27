import AuthOptions from "@/app/lib/auth";
import User from "@/app/model/user.model";
import connectDB from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    try {
        await connectDB()
        const session = await getServerSession(AuthOptions)
        if(!session || !session.user.email || !session.user.id){
            return NextResponse.json(
                {authenticated:false, user:null, message:"User does not have session"},
                {status:200}
            )
        }
        const user = await User.findById(session.user.id).select("-password")

        if(!user){
            return NextResponse.json(
                {message: "user not found"},
                {status:400}
            )
        }

        return NextResponse.json(
            user, 
            {status:200}
        )
    } catch (error) {
        return NextResponse.json(
            {message: `user get error ${error}`},
            {status: 500}
        )
    }
}