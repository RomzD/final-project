import React from "react"

const EmptyOrFullListMessage = ({catchedPokemonsLength}) => (
    <p className="poke-card">{catchedPokemonsLength === 0 ? 'No pokemons were catched!' : `That's all you've got for the moment!`}</p>
)
export default EmptyOrFullListMessage;