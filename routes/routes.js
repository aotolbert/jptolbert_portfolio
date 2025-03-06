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

router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../app/contact.html"));
})

router.get("/resources", (req, res) => {
    res.sendFile(path.join(__dirname, "../app/resources.html"));
})


module.exports = router;