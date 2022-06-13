import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

const App = () => (
    <Switch> 
     <Route exact path="/" component={PokemonIndexContainer} />
     <Route path="/pokemon/:id" component={PokemonDetailContainer}/> 
     </Switch>
) 




export default App;