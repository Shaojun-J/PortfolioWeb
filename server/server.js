const express = require('express');
const cors = require('cors');  
require('dotenv').config();
const WeatherRouter = require('./routers/weatherRoutes');

const app = express();
// Middlewares
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    // res.header('Access-Control-Allow-Origin', '*');
    next();
  });

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the server of my portfolio!');
});

app.use('/api/weather', WeatherRouter);



app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

