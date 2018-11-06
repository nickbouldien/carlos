import React, { Component } from 'react';
import { Link, Router } from "@reach/router";

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
      <>
        <h2>Carlo && create-react-app</h2>
        <p>
          <a href={"https://github.com/nickbouldien/carlos"}>github</a>
        </p>

        <ul>
          <li>
            <Link to="crypto">Crypto</Link>
          </li>
          <li>
            <Link to="env-data">Environment Data</Link>
          </li>
          <li>
            <Link to="system-info">SystemInfo</Link>
          </li>
        </ul>

        <p>
          random #: {randomNum}
        </p>

        <Router>
          <CryptoKey path="crypto" />
          <EnvData path="env-data" />
          <SystemInfo path="system-info" />
        </Router>
      </>
    );
  }
}

export default App;
