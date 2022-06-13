import React from 'react';

class PokemonIndexItem extends React.Component{
    constructor(props){
    super(props)
    }
    
    componentDidMount(){

    }
    
    render(){
        console.log(this.props)
      return (
           <li> 
            <span>{this.props.pokemon.id}</span>
            <img src={this.props.pokemon.imageUrl} width="30px" height="30px"/>
            <span>{this.props.pokemon.name}</span>
           </li>
      )
    }
    }
    
    
    
    export default PokemonIndexItem;