const express = require('express');
const router = express.Router();

// const datefns = require('date-fns');
// let dateTime = datefns.format(new Date(), 'd MMM   HH:mm aaa');

router.get('/', async (req, res) => {

    res.status(200).json({
        name: 'Shaojun',
        email: 'shaojun.jiang@outlook.com',
        phone: '872-993-5993',
        linkedin: 'https://www.linkedin.com/in/shaojun-jiang',
        info: 'I am a full-stack web developer with a background in mechanical engineering. I am passionate about building web applications that are intuitive and user-friendly. I am a quick learner and a problem solver. I am looking for a full-time position as a web developer.'
    });


});

module.exports = router;
