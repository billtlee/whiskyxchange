import React, { Component } from 'react';
import { Table, Button, Message } from 'semantic-ui-react';
import * as superagent from 'superagent';

import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import WhiskyAsset from '../../ethereum/whiskyAsset';

class ViewDetail extends Component {
  state = {
    loadingListForSale: false,
    loadingBuyAsset: false,
    errorMessage: ''
  }

  static async getInitialProps(props) {
    const assetId = props.query.id;
    return { assetId }
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const detail = await superagent.get(`http://${window.location.host}/api/viewdetail/${this.props.assetId}`)
    .then(res => res.body)
    this.setState(detail[0]);
    const whiskyAsset = WhiskyAsset(detail[0].contractAddress);
    const etherValue = await whiskyAsset.methods.value().call();
    const accounts = await web3.eth.getAccounts();
    this.state.owner === accounts[0] ? this.setState({isOwner:true}) : this.setState({isOwner:false});
    const selling = await whiskyAsset.methods.selling().call();
    this.setState({
      selling,
      etherValue:  web3.utils.fromWei(etherValue),
    });
  }

  listForSale = async () => {
    const whiskyAsset = WhiskyAsset(this.state.contractAddress);
    console.log('contract address: ',this.state.contractAddress);
    console.log('contract owner: ',await whiskyAsset.methods.owner().call());
    this.setState({loading: true, errorMessage: ''});
    try {
      const accounts = await web3.eth.getAccounts();
      const res = await whiskyAsset.methods.initiateSale().send({
        from: accounts[0]
      });
      console.log('res: ', res);
      this.setState({selling: true});
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
    this.setState({loading: false});
  }

  buyAsset = async () => {
    const whiskyAsset = WhiskyAsset(this.state.contractAddress);
    this.setState({loading: true, errorMessage: ''});
    try {
      const accounts = await web3.eth.getAccounts();
      const res = await whiskyAsset.methods.buyWhisky().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.etherValue)
      });
      console.log('res: ', res);
      this.setState({selling: false});
      const owner = await whiskyAsset.methods.owner().call();
      superagent.patch(`http://${window.location.host}/api/update/${this.state._id}`, {owner}).then(async res => {
      }).catch (err => console.error(err.stack));
      this.setState({owner});
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
    this.setState({loading: false});
  }

  render() {
    const detail = this.state;
    console.log('selling: ', this.state.selling);
    console.log('isowner: ', this.state.isOwner);
    return (
      <Layout>
      <h3>Whisky Detail</h3>
        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Name</Table.Cell>
              <Table.Cell>{detail.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Producer</Table.Cell>
              <Table.Cell>{detail.producer}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Country</Table.Cell>
              <Table.Cell>{detail.country}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Region</Table.Cell>
              <Table.Cell>{detail.region}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Subregion</Table.Cell>
              <Table.Cell>{detail.subregion}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Size</Table.Cell>
              <Table.Cell>{detail.size}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Color</Table.Cell>
              <Table.Cell>{detail.color}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Year</Table.Cell>
              <Table.Cell>{detail.year}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Degree of Alcohol</Table.Cell>
              <Table.Cell>{detail.degreeOfAlcohol}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Wood Type</Table.Cell>
              <Table.Cell>{detail.woodType}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cask ID</Table.Cell>
              <Table.Cell>{detail.caskId}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Value in USD</Table.Cell>
              <Table.Cell>{detail.value}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Value in Ether</Table.Cell>
              <Table.Cell>{detail.etherValue}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Owner</Table.Cell>
              <Table.Cell>{detail.owner}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        {/* <Message error header="Oops!" content={this.state.errorMessage} /> */}
        <Button 
          primary 
          loading={this.state.loadingListForSale}
          onClick={this.listForSale} 
          disabled={!(this.state.isOwner && !this.state.selling)}
        >List for Sale</Button>
        <Button 
          primary 
          loading={this.state.loadingBuyAsset}
          onClick={this.buyAsset} 
          disabled={!(!this.state.isOwner && this.state.selling)}
        >Buy</Button>
      </Layout>
    );
  }
}

export default ViewDetail;