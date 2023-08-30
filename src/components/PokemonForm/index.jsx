import React, { useState } from 'react'
import './PokemonForm.css'

export const PokemonForm = ({ onSubmit }) => {
    const [ pokemonName, setPokemonName ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(pokemonName)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
            placeholder="Enter Pokemon Name"
        />
        <button aria-label="submit" type="submit">Fetch Pokemon</button>
    </form>
  )
}

export default PokemonForm