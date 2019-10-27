import React from "react";


const Display = ({ info }) => {
  return (
    info.map(item => <li>{item}</li>)
  )
};

class EnvData extends React.Component {
  state = {
    info: [],
  };

  async componentDidMount() {
    const data = await window.env();
    const info = [];
    for (const type in data) {
      info.push(`${type}: ${data[type]}`);
    }
    this.setState(prevState => ({
      ...prevState,
      info,
    }));
  }

  render() {
    return (
      <div>
        <h3>Env data</h3>
        <ul>
          { this.state.info && this.state.info.length && <Display info={this.state.info} /> }
        </ul>
      </div>
    )
  }
}

export default EnvData;
