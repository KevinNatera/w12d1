import React from 'react';
import { Link } from "react-router-dom";

class PokemonIndexItem extends React.Component{
    constructor(props){
    super(props)
    }
    
    componentDidMount(){

    }
    
    render(){

      return (
           <li>
             <Link to={`/pokemon/${this.props.pokemon.id}`}>
                <span>{this.props.pokemon.id}</span>
                <img src={this.props.pokemon.imageUrl} width="30px" height="30px"/>
                <span>{this.props.pokemon.name}</span>
            </Link>
           </li>

      )
    }
    }
    
    
    
    export default PokemonIndexItem;