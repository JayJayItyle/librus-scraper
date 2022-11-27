const port = require("./port-check");
const config = require('../json/config.json');
var WEBSERVER_BOOLEAN = config.webserver;
var WEBSERVER_PORT = config.webserver_port;
var SZCZESLIWYNUMEREK_BOOLEAN = config.szczesliwy_numerek;


function check() {
    //  if / else shit to check if values are correct
    if (typeof WEBSERVER_PORT === 'number') {
  
      if (port.check(WEBSERVER_PORT)) {
      
      } else {
        console.log('config error - webserver_port is not a valid port');
        process.exit()
      }
      
      } else {
        console.log('config error - webserver_port is not a number');
        process.exit()
      }
      
      if (typeof WEBSERVER_BOOLEAN === 'boolean') {
      } else {
        console.log('config error - webserver is not a boolean');
        process.exit()
      }
  
      if (typeof SZCZESLIWYNUMEREK_BOOLEAN === 'boolean') {
      } else {
        console.log('blad konfiguracji - szczesliwy_numerek is not a boolean');
        process.exit()
      }
      
  }

  module.exports = { check };
