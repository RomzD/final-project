import React from "react"

import BasicPokemonCard from "../pokemon-card/BasicPokemonCard"

export default function CatchedPokemonListItem({pokemon}) {
    return (
        <div  className="poke-card poke-card_theme-catched">
            <BasicPokemonCard pokemon={pokemon} />
            <div className="poke-card__container">catched on {pokemon.catchTime} </div>
        </div>
    )
}