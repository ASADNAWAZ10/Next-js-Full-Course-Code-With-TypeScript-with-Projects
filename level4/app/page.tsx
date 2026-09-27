"use client"
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { HiPencil } from 'react-icons/hi2'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Page = () => {
  const {data: session, status} = useSession()
  console.log(session, status)
  const router = useRouter()

const handleSignOut = async()=>{
  try {
    await signOut()
  } catch (error) {
    console.error(error)
  }
}

useEffect(()=>{
  if(status === "authenticated"){
    router.push("/register")
  }
},[status, router])

if (status === "loading"){
  return <div className='text-white text-2xl'>Loading...</div>
}

if(status === "authenticated" || !session){
  return <div className='text-white text-2xl'>Redirecting to register...</div>
}
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black 
    text-white px-4'>
      {data && 
      <div className='w-full max-w-md border-2 border-2xl border-white rounded-2xl 
      p-8 shadow-lg text-center relative flex flex-col items-center'>
        <HiPencil size={22} color='white' className='absolute right-5 top-5
        cursor-pointer' onClick={()=>router.push("/edit")} />
        {data.user?.image && <div className='relative w-25 h-25 rounded-full border-2 
        border-white overflow-hidden'>
          <Image src={data.user.image} fill alt="userImage" />
          </div>}
          <h1 className='text-2xl font-semibold mb-4'>Welcome to {data.user.name} </h1>
          <button onClick={handleSignOut}
           className='w-full py-2 px-4 bg-white text-black font-semibold 
          rounded-lg hover:bg-gray-200 transition-colors'>Sign Out</button>
      </div>
      }
      {/* {!data && 
      <div className='text-white text-2xl'>Loading...</div> 
      } */}
    </div>
  )
}

export default Page