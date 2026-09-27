import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        name:"Asad",
        age: 24
    })
}

export async function POST(requst:NextRequest){
let {name, age} = await requst.json()
return NextResponse.json({
    name, age
})
}