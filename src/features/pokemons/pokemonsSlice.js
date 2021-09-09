import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchPokemonsCallback as fetchCb } from './fetchLibrary'

let initialState = {
    pokemons: [],
    catchedPokemons: [],
    status: 'idle',
    error: null
};

export const fetchPokemons = createAsyncThunk('pokemons/fetch', async () => {
    let result = await fetchCb();
    return result;
})

const setPokemonAsCatched = (pokemonArray, pokemonId, catchTime) => {
    pokemonArray.forEach(pokemon=> {
        if (pokemon.id === pokemonId) {
            pokemon.catchTime = catchTime;
        }
    });
}

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        catchPokemon: {
            reducer: (state, action) => {
                const pokemonId = action.payload.id;
                const catchTime = action.payload.catchTime;
                setPokemonAsCatched (state.pokemons, pokemonId, catchTime);

                state.catchedPokemons.push(action.payload);
            },
            prepare: (id) => {
                return {
                    payload: {
                        id,
                        catchTime: new Date().toLocaleString()
                    }
                }
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                const pokemonPortion = action.payload;
                const catchedPokemons = state.catchedPokemons;
                pokemonPortion.forEach (pokemon => {
                    let catchedPokemon = catchedPokemons.find(catchedPokemon =>
                            catchedPokemon.id === pokemon.id);
                    if (catchedPokemon) {
                            pokemon.catchTime = catchedPokemon.catchTime;
                        }
                } )

                state.pokemons.push(...pokemonPortion);
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
    }
})



export const { catchPokemon } = pokemonSlice.actions;
export const pokemonsReducer = pokemonSlice.reducer
