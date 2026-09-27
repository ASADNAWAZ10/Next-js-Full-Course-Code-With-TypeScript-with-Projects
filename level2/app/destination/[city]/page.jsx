"use client"
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
    const {city} = useParams();
  return (
    <div className='text-white mt-25 flex flex-col items-center'>
      <h1 className='text-2xl'>{city} is the beautiful city</h1>
        {city =="newyork" && <Image src='/assets/newyork.jpg' width={400} height={400} alt='NEWYORK image' />}
        {city =="tokyo" && <Image src='/assets/tokyo.jpg' width={400} height={400} alt='Tokyo image' />}
        {city =="paris" && <Image src='/assets/paris.jpg' width={400} height={400} alt='paris image' />}
    </div>
  )
}

export default Page