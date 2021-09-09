import React from 'react'
import { useDispatch } from 'react-redux'


import PokemonListItem from './PokemonListItem'
import { catchPokemon } from '../../pokemonsSlice'
import './pokemonList.scss'


export default function PokemonList({ pokemons }) {

  const pokemonsCopy = pokemons.slice();
  const dispatch = useDispatch();

  return (
    <section onClick={(e) => {
      if (checkCatchTarget(e.target)) {
        dispatch(catchPokemon(Number(e.target.value)))
      }
    }}
      className="wrapper__pokemon-list">
      <CreatePokemonList pokemonsCopy={pokemonsCopy} />
    </section>
  )
}


const CreatePokemonList = ({ pokemonsCopy }) => {
  return pokemonsCopy.map((pokemon, index) => <PokemonListItem pokemon={pokemon} key={index} />)
}


const checkCatchTarget = (target) => {
  if (target.className.includes('btn') && !target.disabled) {
    return true;
  }
  return false;
}