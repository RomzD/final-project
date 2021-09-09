import React from "react"

export default function LoadMoreButton ({setPokemonPortion, portion, pokemonsOnPage }) {
    return (
        <button onClick = { ()=> setPokemonPortion(portion + pokemonsOnPage)} className="button button_theme-portion" >load more!</button> 
    )
}