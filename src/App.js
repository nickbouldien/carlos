import React, { Component } from 'react';

class App extends Component {
  state = {
    info: [],
    randomNum: -1,
    sysInfo: null,
  };
  async componentDidMount() { // TODO - clean this up
    const data = await window.env();
    const info = [];
    for (const type in data) {
      info.push(`${type}: ${data[type]}`);
    }
    this.setState(prevState => ({
      ...prevState,
      info,
    }));

    const randomNum = await window.random();
    this.setState(prevState => ({
      ...prevState,
      randomNum,
    }));

    const sysInfo = await window.systeminfo();
    this.setState(prevState => ({
      ...prevState,
      sysInfo,
    }));
  }

  displaySysInfo = (data) => {
    return (
      <ul>
        <li>
          battery % remaining: {data.battery.percent}
        </li>
        <li>
          CPU speed: {data.cpu.speed}
        </li>
        <li>
          osInfo: <pre>{JSON.stringify(data.osInfo, null, 2)}</pre>
        </li>
      </ul>
    );
  };

  render() {
    const { info, randomNum, sysInfo } = this.state;
    return (
      <div className="App">
        <p>
          random #: {randomNum}
        </p>

        <div>
          <ul>
            { sysInfo && this.displaySysInfo(sysInfo) }
          </ul>
        </div>

        <div>
          <ul>
            { info && info.length && <Display info={info} /> }
          </ul>
        </div>

      </div>
    );
  }
}

const Display = ({ info }) => {
  return (
    info.map(item => <li>{item}</li>)
  )
};

export default App;
