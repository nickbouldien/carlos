import React from 'react';
import { Link, Router } from "@reach/router";

import Crypto from './components/Crypto';
import EnvData from './components/EnvData';
import OSInfo from './components/OSInfo';
import SystemInfo from './components/SystemInfo';

class App extends React.Component {
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
          <a
            href={"https://github.com/nickbouldien/carlos"}
            target="_blank"
            rel="noopener noreferrer"
          >
            carlos github repo
          </a>
        </p>

        <ul>
          <li>
            <Link to="crypto">Crypto</Link>
          </li>
          <li>
            <Link to="env-data">Environment Data</Link>
          </li>
          <li>
            <Link to="os-info">OS info</Link>
          </li>
          <li>
            <Link to="system-info">SystemInfo</Link>
          </li>
        </ul>

        <p>
          random #: {randomNum}
        </p>

        <Router>
          <Crypto path="crypto" />
          <EnvData path="env-data" />
          <OSInfo path="os-info" />
          <SystemInfo path="system-info" />
        </Router>
      </>
    );
  }
}

export default App;
