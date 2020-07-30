const fs = require('fs');
const express = require('express');
var path = require("path");
//var sendEmail = require("../functions/send-contact-email");
// const nodemailer = require('nodemailer');
require('dotenv').config();



const router = express.Router();


// Set default caching headers
router.use((req, res, next) => {
    res.set('Cache-Control', 'no-cache');
    next();
  });

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../app/index.html"));
})

router.get("/tutoring", (req, res) => {
    res.sendFile(path.join(__dirname, "../app/tutoring.html"));
})

router.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../app/about.html"));
})

router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../app/contact.html"));
})






// router.get('/sw.js', (req, res) => {
//     console.log(__dirname)
// const input = fs.createReadStream(`${__dirname}/../app/sw.js`);

// const toCache = [
//   './index.html',
//   './offline.html',
//   './styles.css',
//   './debatinator.js'
// ]

// res.set('Cache-Control', 'public, max-age=31557600'); // one year
// res.set('Content-Type', 'application/javascript');
//     input.pipe(res);
// });


module.exports = router;