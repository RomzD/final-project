import React from "react";
import { useDispatch } from "react-redux";

import { fetchPokemons } from "../../pokemonsSlice";

export default function LoadButton() {
    const dispatch = useDispatch()

    return (
        <div className="wrapper__button-wrapper">
            <button className="button button_theme-load" onClick={() => {
                dispatch(fetchPokemons())
            }
            }>
                <p className="para para_theme-load-button">Load more pokemons</p>
            </button>
        </div>
    )
}
