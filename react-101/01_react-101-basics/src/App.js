import React, { Component } from 'react';
import Humans from './Humans';
import AddHuman from './AddHuman';
//class component
class App extends Component {
  state = {
    humans: [
      { name: 'John', age: 23, profession: 'Dev', id: 2 },
      { name: 'Johnathan', age: 27, profession: 'GameDev', id: 3 },
      { name: 'Andrej', age: 19, profession: 'DayDreamer', id: 1 }
    ]
  };

  addHuman = newHuman => {
    newHuman.id = Math.random();
    this.setState({
      humans: [...this.state.humans, newHuman]
    });

    /*
    TODO: what is best practise?
    newHuman.id = Math.random();
    let humans = [...this.state.humans, newHuman]; //spread operator
    this.setState({
      humans: humans
    });
    */
  };

  removeHuman = id => {
    let humans = this.state.humans.filter(human => {
      return human.id !== id; //if human.id is equal to id, it is going to return false, and therefore it is going to filter that human out.
    });

    this.setState({
      humans
    });
  };

  componentDidMount() {
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className='App'>
        <h1>R-App</h1>
        <p>Wilkommen</p>
        <Humans humans={this.state.humans} removeHuman={this.removeHuman} />
        <AddHuman addHuman={this.addHuman} />
      </div>
    );
  }
}

export default App;
