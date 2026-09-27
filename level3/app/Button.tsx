import React from 'react'

type dataProp = {
  data: string,
  action: () => void
}

const button = ({data,action}:dataProp) => {
  return (
    <div>
       Hello {data}
    </div>
  )
}

export default button