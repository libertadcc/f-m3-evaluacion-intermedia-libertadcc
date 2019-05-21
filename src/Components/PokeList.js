import React from 'react';
import Pokemon from './Pokemon';



class PokeList extends React.Component{
  render(){
  const {data} = this.props;
    return(
      <div className="pokedex">
        <ul className="pokedex__list">
          {data.map(item => {
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

