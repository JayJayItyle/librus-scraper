
# librus-scraper

a puppeteer-powered scraper tool with it's main goal being able to scrape synergia.librus.pl




## Deployment

Before deploying make sure to follow these steps:
  1. Go to https://portal.librus.pl/rodzina/synergia/loguj
  2. Use EditThisCookie to grab your cookies when you log-in
  3. Paste your cookies (json format) into ./json/cookies.json
  4. Configure the app (./json/config.json)


To install the dependencies run

```bash
npm i
```

Then, to deploy this project run

```bash
  node index.js
```
  


## Features

- express webserver
- no-log-in functionality
- thoroughly commented (wink wink)
- no unnecesary garbage code



## License

[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)

