const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const isThereNewAnnouncements = require('./puppeteer').isThereNewAnnouncements
const getNewAnnouncement = require('./puppeteer').getNewAnnouncement

//import { db, parseData, getWalletArrays } from "./utils/connection.js";
const port  =3333;
const app = express();
app.use(cors())


app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

app.get("/api/is-there-new-announcements", async (req, res) => {
    //const body = req.query;
    //const { accountAddress } = body;
    const result = await isThereNewAnnouncements()
    res.json({ result : result})
});

app.get("/api/get-new-announcement", async (req, res) => {
    const result = await getNewAnnouncement()
    res.json(result)
});

// http://localhost:3333/api/check-fund?accountAddress=asdfasdfasdf
app.get("/api/check-fund", async (req, res) => {
    res.json({ status: "Connect account first" });    
})


app.listen(port, () => {
    console.log("App is working!", port);
});