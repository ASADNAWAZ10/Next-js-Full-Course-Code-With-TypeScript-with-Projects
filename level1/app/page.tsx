"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
import Image from "next/image"

 const Page = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col">
        <ul className="flex justify-around font-bold text-2xl">
        <Link href={"/"}><li>Home</li></Link>
        <Link href={"/about"}><li>About</li></Link>
        <Link href={"/contact"}><li>Contact</li></Link>
      </ul>
      
     <div className="mx-auto mt-2">
     <button className="p-1 rounded-2xl border-black border-2 duration-300 hover:scale-105 cursor-pointer" 
      onClick={()=>router.push("/about")}>
        go to About
      </button>
     </div>
      <Image src="/vercel.svg" alt="simplePicture" 
        width={100} height={100} priority/>
    </div>
  )
}

export default Page
