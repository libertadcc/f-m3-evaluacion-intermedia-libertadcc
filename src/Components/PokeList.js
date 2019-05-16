import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component{
  render(){
    const { pokemon } = this.props;
    return(
      <div className="pokemon__card">
        <ul>
          {pokemon.map((item, id) => {
            return(
            <li className="pokemon__name" key={id}>
              <img src={item.url} alt={`Imagen de ${item.name}`}></img>
              <h2>{item.name}</h2>
              <Pokemon 
                pokemon={pokemon}
              />
            </li>
           ); 
          })}
        </ul>
      </div>
    );
  }
}

export default PokeList;

