import React from "react";

class OSInfo extends React.Component {
  state = {
    constants: null,
    freemem: null,
  };

  async componentDidMount() {
    const constants = await window.osConstants();
    const freemem = await window.osFreemem();

    this.setState(prevState => ({
      ...prevState,
      constants,
      freemem,
    }));
  }

  render() {
    const { constants, freemem } = this.state;
    return (
      <div>
        <h3>
          <a href="https://nodejs.org/api/os.html">
            OS
          </a>
        </h3>

        { freemem &&
          <p>
            Free memory: { freemem } bytes
          </p>
        }
        { constants &&
          <p>
            Constants: <pre>{ JSON.stringify(constants, null, 2) }</pre>
          </p>
        }
      </div>
    )
  }
}

export default OSInfo;
