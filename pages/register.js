import React, { Component } from 'react';
import { Form, Card, Button, Divider, Input, Label } from 'semantic-ui-react';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
const faker = require('faker');
const BigchainDB = require('bigchaindb-driver');
const bip39 = require('bip39');

class Register extends Component {

  state = {
    mnemonicPhrase: '',
    publicKey: '',
    privateKey: ''
  };

  static async getInitialProps() {
    const accounts = await web3.eth.getAccounts();
    console.log('account: ', accounts);
    try {
      console.log('in try');
      const userInfo = localStorage.getItem(accounts[0]);
      console.log(JSON.parse(userInfo).mnemonicPhrase);
      this.setState = ({
        mnemonicPhrase: 'test',
        publicKey: JSON.parse(userInfo).publicKey,
        privateKey: JSON.parse(userInfo).privateKey
      })
      console.log('this.state: ', this.state);
    } catch (error) {
      console.log('in catch');
      const keys = new BigchainDB.Ed25519Keypair(bip39.mnemonicToSeed(mnemonicPhrase).slice(0,32));
      this.setState = ({
        mnemonicPhrase: faker.random.words(6),
        publicKey: keys.publicKey,
        privateKey: keys.privateKey
      })
    }
  }

  onSubmit = async event => {
    event.preventDefault();
    const { mnemonicPhrase, publicKey, privateKey } = this.state;
    const userInfo = {'mnemonicPhrase': mnemonicPhrase, 'publicKey': publicKey, 'privateKey': privateKey };
    // localStorage.setItem(accounts[0], JSON.stringify(userInfo));
    const retrieveObject = localStorage.getItem(this.props.accounts[0]);
    console.log('retrieveObject', JSON.parse(retrieveObject).mnemonicPhrase);
  }

  generateKeys = event => {
    const seedWords = this.state.mnemonicPhrase;
    const keys = new BigchainDB.Ed25519Keypair(bip39.mnemonicToSeed(seedWords).slice(0,32));
    this.setState({mnemonicPhrase: event.target.value});

    this.setState({
      publicKey: keys.publicKey,
      privateKey: keys.privateKey
    })
  }

  render() {
    return (
      <Layout>
        <h3>Register</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
              <label>Mnemonic Phrase</label>
              <Input 
                size='small'
                value={this.state.mnemonicPhrase}
                onChange={this.generateKeys}
              />
          </Form.Field>
          <Label>
            Public Key: 
            <Label.Detail>{this.state.publicKey}</Label.Detail>
          </Label>
          <Divider hidden/>
          <Label>
            Private Key: 
            <Label.Detail>{this.state.privateKey}</Label.Detail>
          </Label>
          <Divider hidden/>
          <Button primary>Register</Button>
        </Form>
      </Layout>
    )
  }
}

export default Register;
