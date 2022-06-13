import { connect } from 'react-redux'
import {requestSinglePokemon} from './../../actions/pokemon_actions';
import {selectAllPokemon, selectSinglePokemon} from './../../reducers/selectors';
import PokemonDetail from './pokemon_detail'


const mapStateToProps = (state,ownProps) => (console.log(ownProps.match.params.id),{
    pokemon: selectSinglePokemon(state,ownProps.match.params.id - 1)
  })
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
      
    requestSinglePokemon: () => dispatch(requestSinglePokemon(ownProps.match.params.id))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)