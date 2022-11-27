const port = require("./port-check");
const config = require('../json/config.json');
var API_BOOLEAN = config.api;
var API_PORT = config.api_port;
var SZCZESLIWYNUMEREK_BOOLEAN = config.szczesliwy_numerek;


function check() {
    //  if / else shit to check if values are correct
    if (typeof API_PORT === 'number') {
  
      if (port.check(API_PORT)) {
      
      } else {
        console.log('config error - api_port is not a valid port');
        process.exit()
      }
      
      } else {
        console.log('config error - api_port is not a number');
        process.exit()
      }
      
      if (typeof API_BOOLEAN === 'boolean') {
      } else {
        console.log('config error - api is not a boolean');
        process.exit()
      }
  
      if (typeof SZCZESLIWYNUMEREK_BOOLEAN === 'boolean') {
      } else {
        console.log('config error - szczesliwy_numerek is not a boolean');
        process.exit()
      }
      
  }

  module.exports = { check };
