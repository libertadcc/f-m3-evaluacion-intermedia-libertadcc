import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component{
  render(){
  const { pokemon } = this.props;
    return(
      <ul>
      {pokemon.map(item =>{
        return(
          <div className="pokemon__card">
            <img src={item.url} alt={`Imagen de ${item.name}`}/>
            <li key={item.id}>
            {item.name}
            <Pokemon 
            item={item}/>
            </li>
          </div>
        )})
      }</ul>
  )
}
}

export default PokeList;