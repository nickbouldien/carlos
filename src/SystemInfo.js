import React from "react";

class SystemInfo extends React.Component {
  state = {
    sysInfo: null,
  };

  async componentDidMount() {
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
    return (
      <div>
        <ul>
          { this.state.sysInfo && this.displaySysInfo(this.state.sysInfo) }
        </ul>
      </div>
    )
  }
}

export default SystemInfo;
