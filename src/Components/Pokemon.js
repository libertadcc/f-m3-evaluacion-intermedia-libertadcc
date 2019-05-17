import React from 'react';

class Pokemon extends React.Component{
  render(){
    const {item} = this.props;
    return(
      <ul>
        {item.map(obj=>{
          return(
            <li>{obj.types}</li>
          )
        })}
      </ul>);
  }
}

export default Pokemon;