import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Weather() {

    const [info, setInfo] = useState(null); // info is the data from the API

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/weather`);
                console.log(res.data);  
                setInfo(res.data);
            }
            catch (err) {
                console.log(">>Error:", err);
            }
        }
        fetchData();
    }, []);

    

    return (
        <>
            {info?.geoData && info?.weatherData && <h5>{info.weatherData.name}, {info.geoData.region}</h5>}
            {info?.weatherData && info.weatherData.weather[0].main}
            {info?.weatherData && <h6 className="ps-5">Temp: {Math.round(info.weatherData.main.temp -273.15)} °C</h6> }
            {info?.weatherData && <h6>Your IP: {info.geoData.ip}</h6> }
        </>
    )
}
