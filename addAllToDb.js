
require('dotenv').config()
const puppeteer = require('puppeteer');
const db = require('./database').db
const helper = require('./helper')
const constants = require('./constants')

const maxPageNumber = constants.maxPageNumber

addToDb = async () => {
    const browser = await puppeteer.launch({ headless: constants.isBackgroundProcess });
    const page = await browser.newPage();
    await page.setViewport({width: 600,height: 800});

    for (let pageNumber = maxPageNumber; pageNumber > 0; pageNumber--) {
        await setAllAnnouncmentsToDb(page, pageNumber)
    }
    console.log("All announcements have been added to the database")
    await browser.close()

}

addToDb()

async function setAllAnnouncmentsToDb(page, pageNumber) {
    const announcementUrl = `${constants.announcementUrl}/${pageNumber}`;
   
    const [announcementsTitles,announcementsLinks,announcementsDates] = await helper.getAnnouncementsFromWebsite(page, announcementUrl)

    for (let i = announcementsLinks.length - 1; i >= 0; i--) {
        await db('announcements').insert({ announcement_title: announcementsTitles[i], announcement_link: announcementsLinks[i], announcement_date: announcementsDates[i] }).then((result, err) => { if (err) throw err; console.log("inserted announcment to database..") })
    }
}



