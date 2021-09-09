import { React } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import IndexPage from './features/pokemons/pages/index/index';
import CatchedPokemonsPage from './features/pokemons/pages/catched-pokemons-page/catchedPokemonsPage';
import PokemonPage from './features/pokemons/pages/pokemon-page/PokemonPage';

function App() {

  return (
    <Router>
      <Route exact path="/">
        <IndexPage />
      </Route>
      <Route path="/catchedPokemons">
        <CatchedPokemonsPage />
      </Route>
      <Route path="/pokemons/:id" >
        <PokemonPage />
      </Route>
    </Router>
  );
}

export default App;
