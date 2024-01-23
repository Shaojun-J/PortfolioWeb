const express = require('express');
const router = express.Router();

// const datefns = require('date-fns');
// let dateTime = datefns.format(new Date(), 'd MMM   HH:mm aaa');

router.get('/', async (req, res) => {
    let geoData;
    let weatherData;

    let url = null;

    if (req.header('X-Real-IP') === undefined) {
        url = `https://ipinfo.io/json`
    } else {
        url = `https://ipinfo.io/${req.header('X-Real-IP')}/json`
    }

    await fetch(url)
        .then((response) => response.json())
        .then(async response => {
            geoData = response;
            // console.log('geoData : ', geoData);
            let lat = geoData.loc.split(',')[0];
            let lon = geoData.loc.split(',')[1];
            await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`)
                .then(response => response.json())
                .then(response => {
                    weatherData = response;
                    // console.log('weatherData : ', weatherData);
                }).catch(err => console.log(err));
        })
        .catch(err => console.log(err));

    // const timezone = weatherData.timezone * 1000;
    // console.log('timezone: ', timezone);
    // const offset = new Date().getTimezoneOffset() * 60 * 1000;
    // console.log('offset : ', offset);
    // const localTime = new Date().getTime();
    // console.log('localTime : ', localTime);
    // const utc = localTime + offset;
    // console.log('utc : ', utc);
    // let targetDate = new Date(utc + timezone);
    // console.log('targetDate : ', targetDate);

    // dateTime = datefns.format(targetDate, 'd MMM   HH:mm aaa');
    // console.log('dateTime : ', dateTime);
    
    res.status(200).json({ geoData: geoData, weatherData: weatherData });

});




module.exports = router;