import web3 from './web3';
import WhiskyAsset from './build/WhiskyAsset.json';

export default (address) => {
  return new web3.eth.Contract(
    JSON.parse(WhiskyAsset.interface),
    address
  );
};