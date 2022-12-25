
require('dotenv').config()
const puppeteer = require('puppeteer');
const db = require('./database').db
const helper = require('./helper')
const constants = require('./constants')
const firebaseHelper = require('./fb')
const newAnnouncementUrl = constants.newAnnouncementUrl
const counter = 1;

startLoop = async () => {
    const browser = await puppeteer.launch({ headless: constants.isBackgroundProcess });
    const page = await browser.newPage();
    await page.setViewport({width: 600,height: 800});
    while(counter > 0){
        try {
            await controlNewAnnouncements(page)
        } catch (error) {
        console.log(error)
        await browser.close()
        await startLoop()
        }
        await helper.wait(constants.waitTime)
    }
}

startLoop()

async function controlNewAnnouncements(page) {
    const [announcementsTitles,announcementsLinks,announcementsDates] = await helper.getAnnouncementsFromWebsite(page, newAnnouncementUrl)

    const announcementLinksFromDb = await helper.getAnnouncementsLinksFromDb(constants.getAnnouncementFromDbLimit)

    const newAnnouncementsLinks = helper.getNewAnnouncementsLinks(announcementsLinks,announcementLinksFromDb)
    const newAnnouncmentsIndexes = [];

    if(newAnnouncementsLinks.length > 0) {
        for(let i = 0 ; i < newAnnouncementsLinks.length ; i++){
            newAnnouncmentsIndexes.push(announcementsLinks.indexOf(newAnnouncementsLinks[i]))
        }
        for(let i = newAnnouncementsLinks.length - 1; i >= 0; i--){
            await db('announcements').insert({ announcement_title: announcementsTitles[newAnnouncmentsIndexes[i]], announcement_link: newAnnouncementsLinks[i], announcement_date: announcementsDates[[newAnnouncmentsIndexes[i]]] }).then((result, err) => { if (err) throw err; console.log("inserted announcment to database..") })
            console.log("There is a new announcement..")
			console.log("New announcement have been added to the database..")
            //await firebaseDb.insertFirebaseDb(announcementsTitles[newAnnouncmentsIndexes[i]],newAnnouncementsLinks[i], announcementsDates[[newAnnouncmentsIndexes[i]]])
            await firebaseHelper.sendNotification("Yeni duyuru", announcementsTitles[newAnnouncmentsIndexes[i]]) 
            await helper.wait("1000")
        }
/* 
        const i = newAnnouncementsLinks.length - 1 ; 
        await db('announcements').insert({ announcement_title: announcementsTitles[newAnnouncmentsIndexes[i]], announcement_link: newAnnouncementsLinks[i], announcement_date: announcementsDates[[newAnnouncmentsIndexes[i]]] }).then((result, err) => { if (err) throw err; console.log("inserted announcment to database..") })
        console.log("There is a new announcement..")
        console.log("New announcement have been added to the database..")
        await sendNotification.sendNotification("Yeni duyuru", announcementsTitles[newAnnouncmentsIndexes[i]]) */

    }else{
    console.log("There is no no new announcements..")
    }

}

exports.isThereNewAnnouncements = async ()  => {
    const browser = await puppeteer.launch({ headless: constants.isBackgroundProcess });
    const page = await browser.newPage();
    await page.setViewport({width: 600,height: 800});
    const [announcementsTitles,announcementsLinks,announcementsDates] = await helper.getAnnouncementsFromWebsite(page, newAnnouncementUrl)

    const announcementLinksFromDb = await helper.getAnnouncementsLinksFromDb(constants.getAnnouncementFromDbLimit)

    const newAnnouncementsLinks = helper.getNewAnnouncementsLinks(announcementsLinks,announcementLinksFromDb)
    const newAnnouncmentsIndexes = [];
    await browser.close()
    console.log("newAnnouncementsLinks.length", newAnnouncementsLinks.length )
    if(newAnnouncementsLinks.length > 0) {
      return true;
    }else{
      return false;
    }

}

exports.getNewAnnouncement = async ()  => {
    const browser = await puppeteer.launch({ headless: constants.isBackgroundProcess });
    const page = await browser.newPage();
    await page.setViewport({width: 600,height: 800});
    const [announcementsTitles,announcementsLinks,announcementsDates] = await helper.getAnnouncementsFromWebsite(page, newAnnouncementUrl)

    const announcementLinksFromDb = await helper.getAnnouncementsLinksFromDb(constants.getAnnouncementFromDbLimit)

    const newAnnouncementsLinks = helper.getNewAnnouncementsLinks(announcementsLinks,announcementLinksFromDb)
    const newAnnouncmentsIndexes = [];
    await browser.close()
    for(let i = 0 ; i < newAnnouncementsLinks.length ; i++){
        newAnnouncmentsIndexes.push(announcementsLinks.indexOf(newAnnouncementsLinks[i]))
    }
    const i = newAnnouncementsLinks.length-1;
    await db('announcements').insert({ announcement_title: announcementsTitles[newAnnouncmentsIndexes[i]], announcement_link: newAnnouncementsLinks[i], announcement_date: announcementsDates[[newAnnouncmentsIndexes[i]]] }).then((result, err) => { if (err) throw err; console.log("inserted announcment to database..") })
    console.log("There is a new announcement..")
    const resultObj = { 'title': announcementsTitles[newAnnouncmentsIndexes[i]], 'link': newAnnouncementsLinks[i], 'date': announcementsDates[[newAnnouncmentsIndexes[i]]] }
    console.log(resultObj)
    return resultObj;

}



