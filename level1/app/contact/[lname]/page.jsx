import React from 'react'

const page = async({params}) => {
    const {lname} = await params
    console.log(lname);
    
  return (
    <div>page <span className='text-3xl font-semibold ml-2'>{lname}</span> </div>
  )
}

export default page