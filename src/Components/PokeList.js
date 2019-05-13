import React from 'react';
// import Pokemon from './Pokemon';



class PokeList extends React.Component{
  render(){
    console.log(this.props.data);
    return(
      <div className="pokemon__card">
        <ul>
          {this.props.data.map(item => {
            return(
            <li className="pokemon__name">
              <h2>{item.name}</h2>
            </li>
           ); 
          })}
        </ul>
      </div>
    );
  }
}

export default PokeList;

