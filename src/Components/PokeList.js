import React from 'react';
import Pokemon from './Pokemon';



class PokeList extends React.Component{
  render(){
    console.log(this.props.data);
    return(
      <div className="pokemon__card">
        <ul>
          {this.props.data.map(item => {
            return(
            <li key={item.id} className="pokemon__name">
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

