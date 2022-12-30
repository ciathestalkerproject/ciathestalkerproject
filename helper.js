const db = require('./database').db
const constants = require('./constants')

exports.getAnnouncementsFromWebsite = async (page,announcementUrl) => {
    await page.goto(announcementUrl, { waitUntil: 'networkidle2' })

    const selector = constants.selector
    await page.waitForSelector(selector)

    const announcementsLinks = await page.$$eval(constants.linkSelector, (tweets) => tweets.map((tweet) => tweet.getAttribute('href')))
    const editedAnnouncementsLinks = this.editAnnouncementsLinks(announcementsLinks)

    const announcementsTitles = await page.$$eval(constants.titleSelector, (tweets) => tweets.map((tweet) => tweet.innerText))

    const announcementsDates = await page.$$eval(constants.dateSelector, (tweets) => tweets.map((tweet) => tweet.innerText))
	const editedAnnouncementsDates = this.changeDateFormat(announcementsDates)
    return[announcementsTitles,editedAnnouncementsLinks,editedAnnouncementsDates]
}

exports.editAnnouncementsLinks = (announcementsLinks) => {
    for (let i = 0; i < announcementsLinks.length; i++) {
        if (!announcementsLinks[i].includes("https")) {
            announcementsLinks[i] = constants.mainPageUrl + announcementsLinks[i]
        }
    }
    return announcementsLinks
}

exports.changeDateFormat = (announcementsDates) => {
    for (let i = 0; i < announcementsDates.length; i++) {
         const date = announcementsDates[i].replace(/\./g, "-");announcementsDates[i]
		 announcementsDates[i] = date.split("-").reverse().join("-");
    }
    return announcementsDates
}

exports.getAnnouncementsLinksFromDb = async (limit) => {
    let linkListArray = [];
    let linkListFromDb = await db("announcements")
        .where({})
        .select("announcement_link")
        .limit(limit)
        .orderBy("id", "desc")
        .then((result, err) => {
            return JSON.parse(JSON.stringify(result))
        })

    for (let i = 0; i < linkListFromDb.length; i++) {
        linkListArray[i] = linkListFromDb[i].announcement_link
    }
    return linkListArray;
}

exports.getNewAnnouncementsLinks = (linkArrayFromBrowser, linkArrayFromDb) => {
    return (linkArrayFromBrowser.filter(x => !linkArrayFromDb.includes(x)))
}

exports.wait = ms => new Promise(res => setTimeout(res,ms))