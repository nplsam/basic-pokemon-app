import React from 'react'
import './Pokemon.css'

export const Pokemon = ({ data }) => {
  return (
    <div>
        <h2>{data.name}</h2>
        <img src={data.sprites.front_default} alt={data.name} />
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
    </div>
  )
}

export default Pokemon
