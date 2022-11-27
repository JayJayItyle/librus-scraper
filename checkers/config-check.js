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
        console.log('blad konfuguracji - webserver_port nie jest prawidlowym portem');
        process.exit()
      }
      
      } else {
        console.log('blad konfuguracji - webserver_port nie jest liczba');
        process.exit()
      }
      
      if (typeof WEBSERVER_BOOLEAN === 'boolean') {
      } else {
        console.log('blad konfiguracji - webserver nie jest wartoscia true/false');
        process.exit()
      }
  
      if (typeof SZCZESLIWYNUMEREK_BOOLEAN === 'boolean') {
      } else {
        console.log('blad konfiguracji - szczesliwy_numerek nie jest wartoscia true/false');
        process.exit()
      }
      
  }

  module.exports = { check };