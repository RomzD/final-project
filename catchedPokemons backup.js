import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import PokemonCard from "../pokemon-card/pokemonCard";
import '../pokemon-card/pokemonCard.scss'

const CatchedPokemonsList = (pokemons, pageItemsBoundary) => (
     pokemons.filter(pokemon =>  
                     pokemons.indexOf(pokemon) <= pageItemsBoundary)
      .map( pokemon => (
                <div key={nanoid()} className="poke-card poke-card_theme-catched">
                    <PokemonCard pokemon={pokemon} />
                    <div className="poke-card__container">catched on {pokemon.catchTime} </div>
                </div>
            )        
      )
 )

const LoadMoreButton = ({setPokemonPortion, portion}) => {
    return (
        <button onClick = { ()=> setPokemonPortion(portion + POKEMONS_ON_PAGE)} className="button button_theme-portion" >load more!</button> 
    )
}

export default () => {
    const [pokemonPortion, setPokemonPortion] = useState(INITIAL_POKEMON_ARRAY_INDEX);
    const pokemonList = useSelector(state => state.pokemons);

    const catchedPokemons = useSelector(state => state.catchedPokemons).map(catchObject => catchObject.id)
        .map(id => pokemonList.find(pokemon => pokemon.id === id));

    const catchedPokemonsList = CatchedPokemonsList(catchedPokemons, pokemonPortion);

    return (
        <>
            {catchedPokemonsList}
            {
                isLoadMoreButtonNeeded(catchedPokemons, pokemonPortion) ?
                   <LoadMoreButton setPokemonPortion = {setPokemonPortion} portion = {pokemonPortion} />:
                   <p className="poke-card">{catchedPokemons.length === 0 ? 'No pokemons were catched!' : `That's all you've got for the moment!`}</p>
            }
        </>
    )
}



function isLoadMoreButtonNeeded(catchedPokemons, pokemonPortion) {
    if (catchedPokemons.length-1 > pokemonPortion && catchedPokemons.length > 0) {
        return true
    }
    return false;
}
