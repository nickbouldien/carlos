import React from "react";

class EnvData extends React.Component {
  state = {
    info: [],
  };

  async componentDidMount() {
    const data = await window.env();

    const info = Object.entries(data).map(entry => ({
      key: entry[0],
      value: entry[1]
    }));

    this.setState(prevState => ({
      ...prevState,
      info,
    }));
  }

  render() {
    const { info } = this.state;

    return (
      <div>
        <h3>Env data</h3>
        <ul>
          {
            info && info.length
              ? info.map(item => <li key={item.key}>{item.key} = {item.value}</li>)
              : <li>no env data to display</li>
            }
        </ul>
      </div>
    )
  }
}

export default EnvData;
