import React from "react";

import BasicPokemonCard from "../pokemon-card/BasicPokemonCard";

const PokemonCardWithCatchAndId = ({ pokemon }) => (
    <div className={pokemon.catchTime ? "poke-card poke-card_theme-catched" : "poke-card"}>
        <BasicPokemonCard pokemon={pokemon} />
        <p className="poke-card__stat-para">#{pokemon.id}</p>
        <p className="poke-card__stat-para">{pokemon.catchTime ? 'catched on ' + pokemon.catchTime : 'not catched'}</p>
    </div>
)

export default PokemonCardWithCatchAndId;