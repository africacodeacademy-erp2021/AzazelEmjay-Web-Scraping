//required modules
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const scraping = require("website-scraper");
const web = require("prompt-sync");
const webTwo = require("prompt-sync");
const got = require("got");
//const fs = require('fs');

(async () => {
  //user Enters Their web site on terminal
  const prompt = web();
  let WebSite = prompt("Enter Your Web Site : ");

  //async helps with loading of puppeteer,browser and web page in order
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = WebSite;
  await page.goto(url);

  //Scraping title
  const h1 = await page.evaluate(
    () => document.querySelector("h1").textContent
  );

  //Scraping images html links
  const logos = await page.evaluate(() =>
    Array.from(document.querySelectorAll("img")).map((logo) => logo.src)
  );

  //For now print scriped imagges,Links and title

  const messageOne = "********HTML Title************";
  console.log(messageOne);
  console.log(h1);

  const messageTwo = "********Image Links************";
  console.log(messageTwo);
  console.log(logos);

  //Scraping all web site links
  const messageLinks = "***********All Web site Links*****************";
  console.log(messageLinks);

  await got(url)
    .then((response) => {
      const $ = cheerio.load(response.body);

      $("a").each((i, link) => {
        const href = link.attribs.href;
        //print all links by Loop
        console.log(href);
      });
    })
    .catch((err) => {
      console.log(err);
    });

  const message =
    "***********PLEASE WAIT WHILE WE ARE SCRAPING HTML FOR A  SITE*****************";
  console.log(message);

  //user enter filename for html files
  //const prompt = webTwo();
  let userInput = prompt("Enter Folder Name where Html files will be Saved : ");

  let options = {
    urls: [url],
    directory: userInput,
  };

  scraping(options)
    .then((result) => {
      console.log("Succesfully Scraped..!");
    })
    .catch((err) => {
      console.log("Error!!", err);
    });

  await browser.close();
})();
