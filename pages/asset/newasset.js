import React, { Component } from 'react';
import { Form, Card, Button, Message, Input, Checkbox } from 'semantic-ui-react';
import * as superagent from 'superagent';

import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import Layout from '../../components/Layout';

import whiskyXChange from '../../ethereum/whiskyXChange';

var ObjectID = require('bson-objectid');
var cryptoPrice = require('crypto-price');

class NewAsset extends Component {
  state = {
      name: 'Macallan 18 Year Old Fine Oak',
      size: '700ml',
      year: '18',
      producer: 'Macallan',
      country: 'UK',
      region:'Speyside',
      subregion:'Highlands',
      color: '',
      degreeOfAlcohol: '43%',
      caskId: '',
      caskType: 'Sherry & Bourbon Cask Matured',
      woodType: 'Bourbon & Sherry Oak',
      value: '300',
      cryptoValue: '',
      errorMessage: '',
      loading: false
  };

  componentDidMount() {
    this.setPrice(this.state.value);
  }

  onSubmit = async event => {
    event.preventDefault();
    
    const { name, size, year, producer, country, region, subregion, color, degreeOfAlcohol, caskId, caskType, woodType, value, cryptoValue } = this.state;

    const assetId = new ObjectID();
    let contractAddress = '';
    const accounts = await web3.eth.getAccounts();

    const whiskyAsset = {
      _id: assetId.str,
      owner: accounts[0],
      name,
      size,
      year,
      producer,
      country,
      region,
      subregion,
      color,
      degreeOfAlcohol,
      caskId,
      caskType,
      woodType,
      contractAddress,
      value
    }

      this.setState({loading: true, errorMessage: ''});

      try {  
        await whiskyXChange.methods.registerAsset(
          web3.utils.fromAscii(whiskyAsset._id), 
          web3.utils.toWei(cryptoValue.toString(), 'ether')
        ).send({
          from: accounts[0]
        });
      } catch (err) {  
        this.setState({ errorMessage: err.message });
      }
      whiskyAsset.contractAddress = await whiskyXChange.methods.getAssetAddress(web3.utils.fromAscii(whiskyAsset._id)).call();
      console.log('whiskyAsset: ', whiskyAsset);
      superagent.post(`http://${window.location.host}/api`, whiskyAsset).then(async res => {
      }).catch (err => console.error(err.stack));
  
      this.setState({loading: false});

//    Router.pushRoute('/');

  }

  setPrice = async price => {
    this.setState({value: price});
    cryptoPrice.getBasePrice('USD', 'ETH').then(obj => {
      this.setState({cryptoValue: price * obj.price});
    }).catch(err => {
      this.setState({cryptoValue: ''});
    })
  }

  render() {
    return(
      <Layout>
        <h3>New Asset</h3>
        <Form onSubmit={this.onSubmit}  error={!!this.state.errorMessage}>
          <Form.Field>
              <label>Name</label>
              <Input 
                size='small'
                value={this.state.name}
                onChange={event => this.setState({name: event.target.value})}
              />
          </Form.Field>
          <Form.Field>
              <label>Size</label>
              <Input 
                size='small'
                value={this.state.size}
                onChange={event => this.setState({size: event.target.value})}
              />
          </Form.Field>
          <Form.Field>
              <label>Year</label>
              <Input 
                size='small'
                value={this.state.year}
                onChange={event => this.setState({year: event.target.value})}
              />
          </Form.Field>
          <Form.Field>
              <label>Producer</label>
              <Input 
                size='small'
                value={this.state.producer}
                onChange={event => this.setState({producer: event.target.value})}
              />
          </Form.Field>
          <Form.Field>
              <label>Country</label>
              <Input 
                size='small'
                value={this.state.country}
                onChange={event => this.setState({country: event.target.value})}
              />
          </Form.Field>
          <Form.Field>
              <label>Region</label>
              <Input 
                size='small'
                value={this.state.region}
                onChange={event => this.setState({region: event.target.value})}
              />
          </Form.Field>
          <Form.Field>
              <label>Subregion</label>
              <Input 
                size='small'
                value={this.state.subregion}
                onChange={event => this.setState({subregion: event.target.value})}
              />
          </Form.Field>
          <Form.Field>
              <label>Color</label>
              <Input 
                size='small'
                value={this.state.color}
                onChange={event => this.setState({color: event.target.value})}
              />
          </Form.Field>
          <Form.Field>
              <label>Degree of Alcohol</label>
              <Input 
                size='small'
                value={this.state.degreeOfAlcohol}
                onChange={event => this.setState({degreeOfAlcohol: event.target.value})}
              />
          </Form.Field>
          <Form.Field>
              <label>Cask Id</label>
              <Input 
                size='small'
                value={this.state.caskId}
                onChange={event => this.setState({caskId: event.target.value})}
              />
          </Form.Field>
          <Form.Field>
              <label>Cask Type</label>
              <Input 
                size='small'
                value={this.state.caskType}
                onChange={event => this.setState({caskType: event.target.value})}
              />
          </Form.Field>
          <Form.Field>
              <label>Wood Type</label>
              <Input 
                size='small'
                value={this.state.woodType}
                onChange={event => this.setState({woodType: event.target.value})}
              />
          </Form.Field>
          <Form.Field>
              <label>Value (USD)</label>
              <Input 
                size='small'
                value={this.state.value}
                onChange={event => this.setPrice(event.target.value)}
              />
          </Form.Field>
          <Form.Field>
              <label>Value (ETH)</label>
              <Input 
                size='small'
                value={this.state.cryptoValue}
                readOnly
              />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>Submit Asset</Button>
        </Form>
      </Layout>
    )
  }
}

export default NewAsset;