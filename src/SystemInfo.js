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

  render() {
    const { sysInfo } = this.state;

    return (
      <div>
        <ul>
          { sysInfo ? (
              <ul>
                <li>
                  battery % remaining: {sysInfo.battery.percent}
                </li>
                <li>
                  CPU speed: {sysInfo.cpu.speed}
                </li>
                <li>
                  osInfo: <pre>{JSON.stringify(sysInfo.osInfo, null, 2)}</pre>
                </li>
              </ul>
            ) : (
              <p>no system info to display</p>
            )
          }
        </ul>
      </div>
    )
  }
}

export default SystemInfo;
