const assert = require('assert');
const BigchainDB = require('bigchaindb-driver');
const bip39 = require('bip39');
const faker = require('faker');
// const ganache = require('ganache-cli');
// const Web3 = require('web3');
// const web3 = new Web3(ganache.provider());

const conn = new BigchainDB.Connection('https://test.bigchaindb.com/api/v1/', { 
  app_id: '0d64114b',
  app_key: '43d781caeda255e0a326214270cf3a58'
});

let assetData = {
  'whisky' : {
        name: 'Macallan 18 Year Old Fine Oak',
        size: '',
        year: '18',
        producer: 'Macallan',
        country: 'UK',
        region:'Speyside',
        subregion:'Highlands',
        color: '',
        degreeOfAlcohol: '43%',
        caskId: '',
        casktype: 'Sherry & Bourbon Cask Matured',
        woodType: 'Bourbon & Sherry Oak',
        value: {
            value_usd: '300',
            value_btc: '0.03',
            value_eth: '0.43'
        }
  }
};

let assetData2 = {
  'contract' : {
    id: '0x692a70d2e424a56d2c6c27aa97d1a86395877b3a',
    owner: '0xca35b7d915458ef540ade6068dfe2f44e8fa733c'
  }
}

let alice;
let txCreatePaint;
let txSigned;
let seedWords;
faker.seed(13579);
seedWords = faker.random.words(6);

beforeEach(async () => {

});

describe('bigchaindbtest', () => {
  // it('generates a key pair', () => {
  //   alice = new BigchainDB.Ed25519Keypair(bip39.mnemonicToSeed(seedWords).slice(0,32));
  //   console.log('keys: ', alice.publicKey);
  //   assert.ok(alice);
  // });

  // it('creates, sign, and post a transaction', () => {
  //   txCreatePaint = BigchainDB.Transaction.makeCreateTransaction(
  //     // Asset field
  //     assetData2,
  //     // Metadata field, contains information about the transaction itself
  //     // (can be `null` if not needed)
  //     null,
  //     // Output. For this case we create a simple Ed25519 condition
  //     [BigchainDB.Transaction.makeOutput(
  //         BigchainDB.Transaction.makeEd25519Condition(alice.publicKey))],
  //     // Issuers
  //     alice.publicKey
  //   )
  //   txSigned = BigchainDB.Transaction.signTransaction(txCreatePaint,
  //     alice.privateKey)
  //   const res = conn.postTransactionCommit(txSigned);
  //   console.log('Res: ', res);
  //   console.log('txSigned: ', txSigned);
  // });

  it('can find the asset', async () => {
    let testdata;
    await conn.searchAssets('bcc6d43d7275733e3321e1d433c9ddffb4c8c1758089170802b4de0f497d16bc').then(assets => {
      testdata=assets;
    });
    console.log('Testdata length: ', testdata.length);
    console.log('Testdata: ', testdata[0].data);
  });

  it('can find the asset', async () => {
    let testdata;
    await conn.searchAssets('UK').then(assets => {
      testdata=assets;
    });
    console.log('Testdata length: ', testdata.length);
    console.log('Testdata: ', testdata[0]);
  });

  it('can find the asset', async () => {
    let testdata;
    await conn.searchAssets('12d12fde9512dcbdcccd2849537aaa7e6bdcae14bc501edf0da95a3490312186').then(assets => {
      testdata=assets;
    });
    console.log('Testdata length: ', testdata.length);
    console.log('Testdata: ', testdata[0]);
  });

  it('can find the asset', async () => {
    let testdata;
    await conn.searchAssets('contract').then(assets => {
      testdata=assets;
    });
    console.log('Testdata length: ', testdata.length);
    console.log('Testdata: ', testdata[0]);
  });
});