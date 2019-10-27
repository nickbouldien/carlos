import React from "react";

class OSInfo extends React.Component {
  state = {
    constants: null,
    freemem: null,
    osHostname: null,
    osCPUs: null,
  };

  async componentDidMount() {
    const constants = await window.osConstants();
    const freemem = await window.osFreemem();
    const osHostname = await window.osHostname();
    const osCPUs = await window.osCPUs();

    this.setState(prevState => ({
      ...prevState,
      constants,
      freemem,
      osHostname,
      osCPUs,
    }));
  }

  render() {
    const { constants, freemem, osHostname, osCPUs } = this.state;
    return (
      <div>
        <h3>
          <a
            href="https://nodejs.org/api/os.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            OS
          </a>
        </h3>

        { osHostname &&
          <p>
            os hostname: { osHostname }
          </p>
        }
        { osCPUs &&
          <p>
            number of CPUs: { osCPUs.length }
          </p>
        }
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
