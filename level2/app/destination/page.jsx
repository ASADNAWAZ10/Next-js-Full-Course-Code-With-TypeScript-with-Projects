"use client"
import React from 'react'
import {useRouter} from 'next/navigation'
const Page = () => {
    const destination = ["paris", "tokyo", "newyork"]

    const router = useRouter()
  return (
    <div className='flex justify-center items-center text-white h-full gap-4 flex-col'>
        <div className='text-2xl font-bold'>
            choose your Destination
        </div>
        <div className='flex flex-col gap-4'>
            {destination.map((d, index)=>(
         <div key={index} className='text-black font-bold text-2xl text-center 
         justify-center rounded-2xl w-50 h-50 bg-white hover:opacity-[0.5] 
         transition-all' onClick={()=>router.push(`/destination/${d}`)}>
            {d}
         </div>
            ))}
        </div>
    </div>
  )
}

export default Page