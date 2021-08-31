const crawler = require("crawler");
//import crawler from ("email-crawler");

const URL ="https://www.ibba.org/more-ibba/sponsorship-opportunities/";
//getEmail(URL);

const getEmail = (URL) => {

 const crawl = new crawler(URL);
 crawl.getLevels(URL).then((emails) => {
    console.log(emails);

 })
 .catch((e) =>{
console.log(e);

 });

};

    //
    const emails = await page.evaluate(() =>
    Array.from(document.querySelectorAll("a"))
    .map(logo =>logo.src)
    )

