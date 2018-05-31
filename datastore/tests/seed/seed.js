const { Whisky } = require('../../models/whisky');

const whisky = [{
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
  woodType: 'Bourbon & Sherry Oak'
}, {
  name: 'Glenfarclas 1976 Highland Single Malt Scotch Whisky',
  size: '700ml',
  year: '1976',
  producer: 'J & G Frant',
  country: 'UK',
  region:'Scotland',
  subregion:'Highlands',
  color: 'Amber',
  degreeOfAlcohol: '45.9%',
  caskId: '3110',
  caskType: 'Refill Butt',
  woodType: ''
}];

const populateWhisky = (done) => {
  Whisky.remove({}).then(() => {
    return Whisky.insertMany(whisky);
  }).then(() => done());
};

module.exports = { whisky, populateWhisky };