import React from 'react'

export default async function page ({params}) {
  const {Uname} =await params
  console.log(Uname);

  return (
    <div>
      <ul>
        <li>{JSON.stringify(Uname)}</li>
      </ul>
      
    </div>
  )
}

