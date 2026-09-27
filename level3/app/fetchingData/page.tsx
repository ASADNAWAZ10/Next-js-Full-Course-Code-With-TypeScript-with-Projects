import React from 'react'

//SSR
// const page = async() => {
//     let response = await fetch('http://localhost:3000/api/users', {
//         cache:"no-store"
//     })
//     const result = await response.json()
//     console.log(result)
//   }
//SSG
    // const page = async() => {
    //   let response = await fetch('http://localhost:3000/api/users', {
    //       cache:'force-cache'
    //   })
    //   const result = await response.json()
    //   console.log(result)

      //ISR
      const page = async() => {
        const response = await fetch('http://localhost:3000/api/users',{
          next:{revalidate:5}
        })
        const result = await response.json()
        console.log(result)
      
  return (
  <div>
       {JSON.stringify(result)}
  </div>
  )
}


export default page