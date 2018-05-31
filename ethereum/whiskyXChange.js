const deployedContract = require('../config/contractAddress.json');
import web3 from "./web3";
import WhiskyXChange from './build/WhiskyXChange.json';

console.log('Getting address from: ', deployedContract.location);
const instance = new web3.eth.Contract (
  JSON.parse(WhiskyXChange.interface),
  deployedContract.contractAddress
);

export default instance;
