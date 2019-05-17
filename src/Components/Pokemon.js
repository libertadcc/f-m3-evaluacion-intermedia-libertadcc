import React from 'react';

class Pokemon extends React.Component{
  render(){
    const {item} = this.props;
    return(
      <div className="pokemon__card">
        <img className="pokemon__img" src={item.url} alt={item.name}/>
        <h2 className="pokemon__name">{item.name}</h2>
        <ul className="pokemon__type">
        {item.types.map((obj, index)=>      <li className="pokemon__pwr" key={index}>{obj}</li>
        )}
        </ul>
      </div>    
    );
  }
}

export default Pokemon;

