"use client"
import React from 'react'
import {useParams} from 'next/navigation'

const Page = () => {
  const {city} = useParams()
  return (
    <div className='w-[50%] mt-25'>
       <h1 className='text-center text-2xl'> I love {city} city  </h1>
        </div>
  )
}

export default Page