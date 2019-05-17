import React from 'react';
import Pokemon from './Pokemon';



class PokeList extends React.Component{
  render(){
    return(
      <div className="pokedex">
        <ul className="pokedex__list">
          {this.props.data.map(item => {
            return(
            <li key={item.id} className="pokemon__item">
              <Pokemon 
              item={item}/>
            </li>
           ); 
          })}
        </ul>
      </div>
    );
  }
}

export default PokeList;

