import React, { Component } from 'react';

class App extends Component {
  state = {
    info: []
  };
  async componentDidMount() {
    const data = await window.env();
    const stuff = [];
    for (const type in data) {
      // console.log("type", type);
      stuff.push(`${type}: ${data[type]}`);
    }
    console.log("stuff1: ", stuff);
    this.setState(prevState => ({
      ...prevState,
      info: stuff,
    }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div>
          <ul>
            { this.state.info && <Display stuff={this.state.info} /> }
          </ul>
        </div>

      </div>
    );
  }
}

const Display = ({ stuff }) => {
  return (
    stuff.map(thing => <li>{thing}</li>)
  )
};

export default App;
