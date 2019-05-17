import React from 'react';

class Pokemon extends React.Component{
  render(){
    const {item} = this.props;
    return(
      <div>
        <img src={item.url} alt={item.name}/>
        <h2>{item.name}</h2>
        <ul>
        {item.types.map((obj, index)=>      <li key={index}>{obj}</li>
        )}
        </ul>
      </div>    
    );
  }
}

export default Pokemon;

