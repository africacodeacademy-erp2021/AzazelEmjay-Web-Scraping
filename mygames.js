//required modules
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const scraping = require("website-scraper");
const web = require("prompt-sync");
const webTwo = require("prompt-sync");
const got = require("got");
//const fs = require('fs');

(async () => {
  //async helps with loading of puppeteer,browser and web page in order
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = "https://www.igdb.com/games/coming_soon";
  await page.goto(url);

  // let title = document.body.querySelector('#img-responsive cover_small cover_small').innerText;

  const logos = await page.evaluate(() =>
    Array.from(document.querySelectorAll("div.game_cover img")).map(
      (logo) => logo.src
    )
  );

  const title = await page.evaluate(() =>
    Array.from(document.querySelectorAll("div.media-body a")).map(
      (title) => title.href
    )
  );

  const gameDate = await page.evaluate(() =>
    Array.from(document.querySelectorAll("div.text-muted time")).map(
      (gameDate) => gameDate.time
    )
  );

  console.log(logos);
  console.log("**************************************");
  console.log(title);
  console.log("**************************************");
  console.log(gameDate);
  await browser.close();
})();
