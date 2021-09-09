import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import PokemonList from '../../components/pokemon-list/PokemonList'
import Menu from '../../components/menu/menu'
import LoadButton from '../../components/pokemon-list/LoadButton';
import { POKEMON_PORTION } from '../../fetchLibrary';
import './index.scss'

const ErrorSection = () => (
    <section className="wrapper__pokemon-list">
        <div className="poke-card">Erorr occured, please reload app or push load button again.</div>
    </section>
)

export default function IndexPage() {
    const [pokemonPortion,setPokemonPortion] = useState(POKEMON_PORTION);

    const startingState = useSelector(state => state.status);
    const pokemonsList = useSelector(state => state.pokemons);

    return (
        <>
            <header className="header">
                <Menu />
            </header>
            <main className="wrapper wrapper__main-page-wrapper">
                <LoadButton listLength = {pokemonsList.length} portion={pokemonPortion} setPortion={setPokemonPortion} />
                {
                    startingState === 'error' ? <ErrorSection /> :
                        <PokemonList pokemonPortion={pokemonPortion} pokemons={pokemonsList} />
                }
            </main>
        </>
    )

}