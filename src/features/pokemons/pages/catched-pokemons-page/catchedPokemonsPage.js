import React from 'react'

import CatchedPokemonsList from "../../components/catched-pokemon-list/CatchedPokemons";
import Menu from "../../components/menu/menu";


const POKEMONS_ON_PAGE = 2;
const INITIAL_POKEMON_ARRAY_INDEX = 1;


const CatchedPokemonsPage = () => {

    return (
        <>
            <header className="header" >
                <Menu />
            </header>
            <main className="wrapper wrapper__main-page-wrapper">
                <CatchedPokemonsList POKEMONS_ON_PAGE={POKEMONS_ON_PAGE} INITIAL_POKEMON_ARRAY_INDEX={INITIAL_POKEMON_ARRAY_INDEX} />
            </main>
        </>
    )
}
export default CatchedPokemonsPage;