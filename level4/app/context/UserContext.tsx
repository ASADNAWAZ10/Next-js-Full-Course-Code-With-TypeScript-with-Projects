"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'

type userContextType = {
user: userType | null,
setUser: (user:userType | null) => void
}

type userType = {
  name: string,
  email: string,
  id: string,
  image?: string
}

export const userDataContext = React.createContext<userContextType | undefined>(undefined)

const UserContext = ({children}:{children:React.ReactNode}) => {
  const [user, setUser] = useState<userType | null>(null)
  const [loading, setLoading] = useState(false)
  const session = useSession()
  
  const data = {
    user, setUser, loading
  }
  useEffect(()=>{
    async function getUser() {
      try {
        setLoading(true)
        const result = await axios.get("/api/user")
        setUser(result.data)
        setLoading(false)
      } catch (error) {
        setUser(null)
        // console.log(error)
       
      } finally {
        setLoading(false)
      }
    }
    getUser()
  },[])
  return (
   <userDataContext.Provider value={data}>
    {children}
   </userDataContext.Provider>
  )
}

export default UserContext