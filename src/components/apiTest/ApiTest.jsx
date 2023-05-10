import React, { useEffect, useState } from 'react'

const ApiTest = () => {
  const [ equipamentos, setEquipamentos ] = useState(null)

  useEffect(() => {
    fetch('https://api-pi-2on3.onrender.com/tipos', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(res => console.log(res))
    // .then(json => console.log(json))
  }, [])

  return (
    <div>ApiTest</div>
  )
}

export default ApiTest
