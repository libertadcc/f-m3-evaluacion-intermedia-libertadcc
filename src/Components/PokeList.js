import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

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

PokeList.propTypes = {
  item: PropTypes.array
};

export default PokeList;

