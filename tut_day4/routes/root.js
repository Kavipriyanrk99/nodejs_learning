const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/home(.html)?|index(.html)?', (req, res)=>{
    res.sendFile(path.join(__dirname, '..' ,'views', 'index.html'));
});

router.get('/new-page(.html)?', (req, res)=>{
    res.sendFile(path.join(__dirname, '..','views', 'new-page.html'));
});

router.get('/old', (req, res)=>{
    res.redirect(301, '/');
});

module.exports = router;