const express = require('express');
const router = express.Router();

// const datefns = require('date-fns');
// let dateTime = datefns.format(new Date(), 'd MMM   HH:mm aaa');

router.get('/', async (req, res) => {

    res.status(200).json({ 
        name: 'Shaojun Jiang',
        email: 'shaojun.jiang@outlook.com',
        phone: '872-993-5993',
        linkedin: 'https://www.linkedin.com/in/shaojun-jiang',
    });

});


module.exports = router;
