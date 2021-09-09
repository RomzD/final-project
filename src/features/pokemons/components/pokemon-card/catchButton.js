import React from 'react'


export default function CatchButton ({ pokemon }) { 

    return (<button className="poke-card__catch-button btn" title={pokemon.catchTime ? '' : 'catch it!'}
        value={pokemon.id}
        aria-label={`Press to catch ${pokemon.name}`}
        disabled={Boolean(pokemon.catchTime)} >
        {pokemon.catchTime ? `\u2713` : '\u25CF'}
    </button>)
}