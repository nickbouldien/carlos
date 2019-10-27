import React from "react";

class Crypto extends React.Component {
  state = {
    key: null,
    text: "",
    encrypted: "",
    decrypted: "",
  };

  async componentDidMount() {
    const key = await window.pbkdf2();

    this.setState(prevState => ({
      ...prevState,
      key,
    }));
  }

  handleChange = async (evt) => {
    const text = evt.target.value;
    const encryptedText = await window.encrypt(text);

    this.setState(prevState => ({
      ...prevState,
      text,
      encrypted: encryptedText,
    }))
  };

  decryptText = async () => {
    const encryptedText = this.state.encrypted;
    const decryptedText = await window.decrypt(encryptedText);

    this.setState(prevState => ({
      ...prevState,
      decrypted: decryptedText,
    }))
  };

  render() {
    return (
      <div>
        <h3>
          <a href="https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2sync_password_salt_iterations_keylen_digest">
            pbkdf2
          </a>
        </h3>
        <p>
          { this.state.key && <code>{JSON.stringify(this.state.key, null, 2)}</code> }
        </p>

        <input
          onChange={this.handleChange}
          placeholder={"enter text to encrypt"}
          type={"text"}
          value={this.state.text}
        />

        <p>
          Entered Text: { this.state.text }
        </p>
        <p>
          Encrypted Text: { this.state.encrypted }
        </p>
        <p>
          Decrypted Text: { this.state.decrypted }
        </p>

        <button onClick={this.decryptText}>Decrypt text</button>

      </div>
    )
  }
}

export default Crypto;
