import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Menu from '../../components/menu/menu';
import PokemonCardWithCatchAndId from '../../components/pokemon-list/PokemonCardWithCatchAndID';
import { fetchPokemonsCallback as fetchPokemon } from '../../fetchLibrary';


export default function PokemonPage() {
    const [cachedPok, setCachedPok] = useState(() => false);
    let { id } = useParams();
    id = Number(id);

    let pokemon = useSelector(state =>
        state.pokemons.find(pok => pok.id === id));

    const isIdValid = checkPokemonIdValidity(id);
    const isPokemonObjectValid = checkCachedPokemon(cachedPok);
    
    useEffect(()=>{
    if (!pokemon && !cachedPok && isIdValid) {       
        fetchSinglePokemon(id, setCachedPok)}
    },
     [pokemon, cachedPok, isIdValid, id]
    );

    if (!pokemon && isPokemonObjectValid) {
        pokemon = cachedPok;
    }

    return (
        <>
            <header className="header" >
                <Menu />
            </header>
            <main className="wrapper wrapper__main-page-wrapper">
                <section className="wrapper wrapper__pokemon-list"> 
                {
                    pokemon ?
                        <PokemonCardWithCatchAndId  pokemon={pokemon} /> :
                        <div className="poke-card">{createPageMessage(isIdValid, isPokemonObjectValid, cachedPok)}</div>
                }
                </section>
            </main>
        </>
    )
}



const fetchSinglePokemon = (id, setState) => {
    fetchPokemon(id).then(res => {
        setTimeout(() => setState(res), 2000);
    })
}

const checkPokemonIdValidity = (id) => {
    if (id > 0 && id < 720) {
        return true;
    }
    return false;
}

const checkCachedPokemon = (pokemon) => {
    if (pokemon.id) {
        return true;
    }
    return false;
}

const createPageMessage = (isIdValid, isPokemonValid, cachedPok) => {
    if (isIdValid && cachedPok && !isPokemonValid) {
        return 'error occured';
    }

    if (!isIdValid) {
        return 'wrong pokemon id';
    }

    return '...loading';
}