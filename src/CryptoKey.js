import React from "react";

class CryptoKey extends React.Component {
  state = {
    key: null,
  };

  async componentDidMount() {
    const key = await window.pbkdf2();
    this.setState(prevState => ({
      ...prevState,
      key,
    }));
  }

  render() {
    return (
      <div>
        <h3>
          <a href="https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2sync_password_salt_iterations_keylen_digest">
            pbkdf2
          </a>
        </h3>
        <ul>
          { this.state.key &&  <code>{JSON.stringify(this.state.key)}</code> }
        </ul>
      </div>
    )
  }
}

export default CryptoKey;
