import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import LoadMoreButton from './LoadMoreButton'
import EmptyOrFullListMessage from './EmptyOrFullListMessage';
import CatchedPokemonListItem from './CatchedPokemonListItem';

const CatchedPokemonsListBuilder = ({ pokemons, pageItemsBoundary }) => (
    pokemons.filter(pokemon =>
        pokemons.indexOf(pokemon) <= pageItemsBoundary)
        .map((pokemon) => <CatchedPokemonListItem key={pokemon.id} pokemon={pokemon} />
        )
)

export default function CatchedPokemonList({ POKEMONS_ON_PAGE, INITIAL_POKEMON_ARRAY_INDEX }) {
    const [pokemonPortion, setPokemonPortion] = useState(INITIAL_POKEMON_ARRAY_INDEX);
    const pokemonList = useSelector(state => state.pokemons);

    const catchedPokemons = useSelector(state => state.catchedPokemons).map(catchObject => catchObject.id)
        .map(id => pokemonList.find(pokemon => pokemon.id === id));

    return (
        <>
            <CatchedPokemonsListBuilder pokemons={catchedPokemons} pageItemsBoundary={pokemonPortion} />
            {
                isLoadMoreButtonNeeded(catchedPokemons, pokemonPortion) ?
                    <LoadMoreButton setPokemonPortion={setPokemonPortion} portion={pokemonPortion} pokemonsOnPage={POKEMONS_ON_PAGE} /> :
                    <EmptyOrFullListMessage catchedPokemonsLength={catchedPokemons.length} />
            }
        </>
    )
}



function isLoadMoreButtonNeeded(catchedPokemons, pokemonPortion) {
    if (catchedPokemons.length - 1 > pokemonPortion && catchedPokemons.length > 0) {
        return true
    }
    return false;
}
