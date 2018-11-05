import React, { Component } from 'react';
import CryptoKey from './CryptoKey';
import EnvData from './EnvData';
import SystemInfo from './SystemInfo';

class App extends Component {
  state = {
    randomNum: -1,
  };
  async componentDidMount() {
    const randomNum = await window.random();
    this.setState(prevState => ({
      ...prevState,
      randomNum,
    }));
  }

  render() {
    const { randomNum } = this.state;
    return (
      <div className="App">
        <h1>Carlos</h1>

        <p>
          random #: {randomNum}
        </p>

        <SystemInfo />

        <CryptoKey />

        <EnvData />

      </div>
    );
  }
}

export default App;
