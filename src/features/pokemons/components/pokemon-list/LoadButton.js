import React from "react";
import { useDispatch } from "react-redux";

import { fetchPokemons } from "../../pokemonsSlice";
import { POKEMON_PORTION } from "../../fetchLibrary";

export default function LoadButton({ listLength, portion, setPortion }) {
    const dispatch = useDispatch()

    return (
        <div className="wrapper__button-wrapper">
            <button className="button button_theme-load" onClick={() => {
                if (listLength > portion) {
                    setPortion(portion + POKEMON_PORTION)
                }
                else {
                    setPortion(portion + POKEMON_PORTION)
                    dispatch(fetchPokemons())
                }
            }
            }>
                <p className="para para_theme-load-button">Load more pokemons</p>
            </button>
        </div>
    )
}
