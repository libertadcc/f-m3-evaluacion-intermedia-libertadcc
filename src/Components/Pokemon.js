import React from 'react';

class Pokemon extends React.Component{
  render(){
    const { pokemon } = this.props;
    return(
      <div>
        <ul>
        {pokemon.types.map((obj, id) => {
          return(
          <li key={id}>
            <span>{obj}</span>
          </li>
          );
        })}
        </ul>
      </div>     
    );
  }
}

export default Pokemon;

