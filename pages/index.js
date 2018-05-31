import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from "../routes";
import * as superagent from 'superagent';
import Layout from "../components/Layout";

class WhiskyIndex extends Component {
  static async getInitialProps({ req }) {
    if (req) {
      const { db } = req;

      const list = await db.collection('Whisky').find().toArray();
      return { list }
    }

    const list = await superagent.get(`http://${window.location.host}/api`)
      .then(res => {
        return res.body
      })
    return { list }

  }

  renderRow() {
    const { Row, Cell } = Table;
    return this.props.list.map((item, i) => {
      return (
        <Row key={i}>
          <Cell><Link route = {`/asset/${item._id}/viewdetail`}><a>{item.name}</a></Link></Cell>
          <Cell>{item.year}</Cell>
          <Cell>{item.Producer}</Cell>
          <Cell>{item.country}</Cell>
          <Cell>{item.caskId}</Cell>
          <Cell>{item.value}</Cell>
        </Row>
      )
    })
  }

  render() {
    const { Header, Row, HeaderCell, Body, Cell } = Table;

    return (
      <Layout>
        <h3>Whisky Index</h3>
        <Link route={'/asset/newasset'}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>Add Whisky Asset</Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Year</HeaderCell>
              <HeaderCell>Producer</HeaderCell>
              <HeaderCell>Country</HeaderCell>
              <HeaderCell>Cask ID</HeaderCell>
              <HeaderCell>Value</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRow()}
          </Body>
        </Table>
      </Layout>
    );
  }
}

export default WhiskyIndex;