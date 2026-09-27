"use client"
import React, { useState } from 'react'

const practice3 = () => {
  const [name, setName] = useState('NAWAZ');
  setName('Asad')
  // setName(3) //here number is acceptable
  
  const [Fname, setFname] = useState<string>()
  setFname('Asad');
  // setFname(24) //not acceptable number values

  return (
    <div>
     
      </div>
  )
}

export default practice3