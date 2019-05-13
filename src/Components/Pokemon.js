import React from 'react';

class Pokemon extends React.Component{
  render(){
    return(
      <div>
        <ul>
          {this.props.data.map(item => {
            console.log(item.name)
          })}
        </ul>
      </div>     
    );
  }
}

export default Pokemon;

