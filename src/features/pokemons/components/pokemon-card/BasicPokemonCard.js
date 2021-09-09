import React from 'react'
import {
  Link,
} from 'react-router-dom';

import './pokemonCard.scss'

export default function BasicPokemonCard({ pokemon }) {
  return (
    <>
      <div className="poke-card__container ">
        <Link to={`../../pokemons/${pokemon.id}`}>
          <img className="poke-card__img" title="Click to check out pokemon page" src={require(`../../../../pokemons/${pokemon.id}.png`).default} alt={`${pokemon.name} pokemon`} />
        </Link>
      </div>
      <div className="poke-card__container">{pokemon.name}</div>
    </>
  )
}