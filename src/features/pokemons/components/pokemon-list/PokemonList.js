import React from 'react'
import { useDispatch } from 'react-redux'


import PokemonListItem from './PokemonListItem'
import { catchPokemon } from '../../pokemonsSlice'
import './pokemonList.scss'


export default function PokemonList({ pokemons, pokemonPortion }) {

  const pokemonsCopy = pokemons.slice();
  const dispatch = useDispatch();

  return (
    <section onClick={(e) => {
      if (checkCatchTarget(e.target)) {
        dispatch(catchPokemon(Number(e.target.value)))
      }
    }}
      className="wrapper__pokemon-list">
      <CreatePokemonList pokemonsCopy={pokemonsCopy} pokemonPortion={pokemonPortion} />
    </section>
  )
}


const CreatePokemonList = ({ pokemonsCopy, pokemonPortion }) => {
  if (pokemonPortion >= pokemonsCopy.length) {
    return pokemonsCopy.map((pokemon, index) => <PokemonListItem pokemon={pokemon} key={index} />)
  } else {
    return pokemonsCopy.filter(pokemon =>
      pokemonsCopy.indexOf(pokemon) < pokemonPortion
    ).map((pokemon, index) => <PokemonListItem pokemon={pokemon} key={index} />)
  }
}


const checkCatchTarget = (target) => {
  if (target.className.includes('btn') && !target.disabled) {
    return true;
  }
  return false;
}