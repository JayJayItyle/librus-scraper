// LOADING HELPERS / CHECKERS
const configchecker = require("./checkers/config-check");
const stringremover = require('./helpers/string-remover')

// LOADING MODULES
const puppeteer = require('puppeteer-extra');
const hidden = require('puppeteer-extra-plugin-stealth');
const fs = require('fs');
const express = require('express')


// LOADING SETTINGS
const config = require('./json/config.json');
var WEBSERVER_BOOLEAN = config.webserver;
var WEBSERVER_PORT = config.webserver_port;
var SZCZESLIWYNUMEREK_BOOLEAN = config.szczesliwy_numerek;

// CHECKING CONFIG VALIDITY
configchecker.check()

// SERVER / PUPPETEER CONFIGURATION
const app = express()
puppeteer.use(hidden())

// CHECKING IF WEBSERVER SHOULD BE ON
if (WEBSERVER_BOOLEAN) {
  app.listen(WEBSERVER_PORT, () => {
      console.log(`server started on port ${WEBSERVER_PORT}`)
  });
}


// KEEPING THEM COOKIES ALIVE :PRAY:
keepalive()




/*

async function planlekcji() {


  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true
  })
  
  const page = await browser.newPage()
  await page.setViewport({
    width: 1920,
    height: 1280,
    deviceScaleFactor: 1,
  });
  
  const content = fs.readFileSync('./json/cookies.json');
  const cookiesArr = JSON.parse(content);
  if (cookiesArr.length !== 0) {
    for (let cookie of cookiesArr) {
      await page.setCookie(cookie)
    }
  }
  
  await page.goto('https://synergia.librus.pl/przegladaj_plan_lekcji', {
    waitUntil: 'networkidle0',
  });

  const element = await page.$('#body > div');
  await element.screenshot({path: 'screenshots/planlekcji.png'})
  await browser.close()


}



async function terminarz() {


const browser = await puppeteer.launch({
  headless: true,
  ignoreHTTPSErrors: true
})

const page = await browser.newPage()
await page.setViewport({
  width: 1920,
  height: 1280,
  deviceScaleFactor: 1,
});

const content = fs.readFileSync('./json/cookies.json');
const cookiesArr = JSON.parse(content);
if (cookiesArr.length !== 0) {
  for (let cookie of cookiesArr) {
    await page.setCookie(cookie)
  }
}

await page.goto('https://synergia.librus.pl/terminarz', {
  waitUntil: 'networkidle0',
});

const element = await page.$('#scheduleForm > div')
await element.screenshot({path: 'screenshots/terminarz.png'})
await browser.close()

}

async function ogloszenia() {


  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true
  })
  
  const page = await browser.newPage()
  await page.setViewport({
    width: 1920,
    height: 1280,
    deviceScaleFactor: 1,
  });
  
  const content = fs.readFileSync('./json/cookies.json');
  const cookiesArr = JSON.parse(content);
  if (cookiesArr.length !== 0) {
    for (let cookie of cookiesArr) {
      await page.setCookie(cookie)
    }
  }
  
  await page.goto('https://synergia.librus.pl/ogloszenia', {
    waitUntil: 'networkidle0',
  });
  
  const element = await page.$('#body > div > div')
  await element.screenshot({path: 'screenshots/ogloszenia.png'})
  await browser.close()
  
  
  }

  */

  // KEEPING COOKIES ALIVE BY MAINTAINING A CONNECTION
  async function keepalive() {

    const browser = await puppeteer.launch({
      headless: true,
      ignoreHTTPSErrors: true
    })
    
    const page = await browser.newPage()
    await page.setViewport({
      width: 1920,
      height: 1280,
      deviceScaleFactor: 1,
    });
    
    const content = fs.readFileSync('./json/cookies.json');
    const cookiesArr = JSON.parse(content);
    if (cookiesArr.length !== 0) {
      for (let cookie of cookiesArr) {
        await page.setCookie(cookie)
      }
    }
    
    await page.goto('https://synergia.librus.pl/uczen/index', {
      waitUntil: 'networkidle0',
      timeout: 0
    });

    // GETTING LUCKY NUMBER
    if (SZCZESLIWYNUMEREK_BOOLEAN === 'true') {
    let element = await page.$('#user-section > span.luckyNumber > b')
    let value = await page.evaluate(el => el.textContent, element)
    console.log('the lucky number is: ' + value)
    }
  }












// APP ENDPOINTS

app.get('/', async (req, res)  => {
  res.send('endpoints - /terminarz, /plan')
})

app.get('/terminarz', async (req, res) => {

  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true
  })
  
  const page = await browser.newPage()
  await page.setViewport({
    width: 1920,
    height: 1280,
    deviceScaleFactor: 1,
  });
  
  const content = fs.readFileSync('./json/cookies.json');
  const cookiesArr = JSON.parse(content);
  if (cookiesArr.length !== 0) {
    for (let cookie of cookiesArr) {
      await page.setCookie(cookie)
    }
  }
  
  await page.goto('https://synergia.librus.pl/terminarz', {
    waitUntil: 'networkidle0',
  });
  
  const element = await page.$('#scheduleForm > div')
  await element.screenshot({path: 'screenshots/terminarz.png'})
  await browser.close()
  
  res.sendFile('screenshots/terminarz.png' , { root : __dirname});
})

app.get('/plan', async (req, res) => {

  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true
  })
  
  const page = await browser.newPage()
  await page.setViewport({
    width: 1920,
    height: 1280,
    deviceScaleFactor: 1,
  });
  
  const content = fs.readFileSync('./json/cookies.json');
  const cookiesArr = JSON.parse(content);
  if (cookiesArr.length !== 0) {
    for (let cookie of cookiesArr) {
      await page.setCookie(cookie)
    }
  }
  
  await page.goto('https://synergia.librus.pl/przegladaj_plan_lekcji', {
    waitUntil: 'networkidle0',
  });

  const element = await page.$('#body > div');
  await element.screenshot({path: 'screenshots/planlekcji.png'})
  await browser.close()

  res.sendFile('screenshots/planlekcji.png' , { root : __dirname});
})
