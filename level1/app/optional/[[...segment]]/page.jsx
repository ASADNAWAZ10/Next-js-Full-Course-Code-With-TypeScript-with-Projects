import React from 'react'

const page = async ({params}) => {
    const {segment} = await params
    console.log(segment);
    
  return (
    <div>
        {JSON.stringify(segment)}
    </div>
  )
}

export default page