import React from "react"

import BasicPokemonCard from '../pokemon-card/BasicPokemonCard'
import CatchButton from '../pokemon-card/catchButton'


const PokemonListItem = ({ pokemon }) => (
    <article  className={pokemon.catchTime ? "poke-card poke-card_theme-catched" : "poke-card"}>
        <BasicPokemonCard pokemon={pokemon} />
        <div className="poke-card__container poke-card__container_theme-catch-button ">
            <CatchButton pokemon={pokemon} />
        </div>
    </article>
)

export default PokemonListItem;