import React from 'react';
import './scss/main.scss';
import PokeList from './Components/PokeList';
import {poke} from './Components/Data';
import PropTypes from 'prop-types';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state =({
      pokemon: []
    })
  }

  componentDidMount(){
    this.setState({
      pokemon: poke
    })
  }
  render(){
    return(
      <div className="page">
        <h1 className="title">Mi lista de Pokémon</h1>
        <PokeList 
          data={this.state.pokemon}
        />
      </div>
    );
  }
}

App.propTypes = {
  pokemon: PropTypes.array,
  poke: PropTypes.array
};

export default App;