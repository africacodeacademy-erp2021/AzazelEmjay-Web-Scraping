
//This code scrapes emails from the website


import crawler from email-crawler;
//const crawler = require('email-crawler');

const URL=('https://www.ibba.org/find-a-business-broker')

//cosnt getData = (URL) => {

    //get (URL).then(data) =>  {

        getEmail(URL)
   // }
//}

const getEmails = (URL) => {

    const crawl = new crawler(URL);
    crawler
    .getLevels(2)
    .then((emails) => {

        console.log(emails);
})
.catch((e) => {

    console.log(e);
});
}
