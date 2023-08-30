import React, { useState, useEffect } from 'react'
import { Pokemon, PokemonForm } from './components'

const App = () => {
  const [ pokemonName, setPokemonName ] = useState('')
  const [ pokemonData, setPokemonData ] = useState(null)
  const [ loading, setloading ] = useState(false)

  useEffect(() => {
    if (!pokemonName) {
      setPokemonData(null)
      return
    }
  
  setloading(true)
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
    .then((response) => response.json())
    .then((data) => {
      setPokemonData(data)
      setloading(false)
    })
    .catch((error) => {
      setloading(false)
    })
}, [pokemonName])

  return (
  <>
    <h1>Pokemon App</h1>
    <PokemonForm onSubmit={setPokemonName}/>

    {loading && <p>Loading...</p>}
    {!loading && !pokemonData && <p>No Pokemon yet, please submit a Pokemon!</p>}
    {pokemonData && <Pokemon data={pokemonData} />}
  </>
  )
}

export default App
