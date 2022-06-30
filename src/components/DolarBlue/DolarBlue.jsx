import React, { useEffect, useState } from 'react';


const DolarBlue = () => {

  const[equipo, setEquipo] = useState([])

   useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch('https://api.bluelytics.com.ar/v2/latest')
    const users = await data.json()
    setEquipo(users)
    
  }

  return (
    <div>
      <h2 className='buy'>{equipo.blue.value_buy}</h2>
      <h2 className='sell'>{equipo.blue.value_sell}</h2>
    </div>
  )
}

export default DolarBlue
