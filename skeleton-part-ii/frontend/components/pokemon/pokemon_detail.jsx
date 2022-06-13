import React from 'react';
import { Link } from "react-router-dom";

class PokemonDetail extends React.Component{
    constructor(props){
    super(props)
    }
    
    componentDidMount(){
        console.log("mounted")
        console.log(this.props)
        this.props.requestSinglePokemon()
    }
    
    render(){

      return (
           <div>
                <h1>{this.props.pokemon.name}</h1>
                
                <img src={this.props.pokemon.imageUrl} width="100px" height="100px"/>
                
                <h1>{this.props.pokemon.id}</h1>
         
            </div>
      )
    }
    }
    
    
    
    export default PokemonDetail;

  