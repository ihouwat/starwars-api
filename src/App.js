import React, { Component } from 'react';
import People from './People.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/?format=json")
    .then(response => response.json())
    .then(data => data.results)
    .then(results => {this.setState({ people: results})})
  }
  
  render() {
    const { people } = this.state;
    return (
      <div>
          <People people={people} />
      </div>
    );
  }
}

export default App;
