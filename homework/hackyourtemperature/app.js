import express from 'express';
import fetch from 'node-fetch';
import { API_KEY } from './sources/keys.js';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});

app.post('/weather', async (req, res) => {
  const { cityName } = req.body;
    if (!cityName || !/^[a-zA-Z]+$/.test(cityName)) {
    return res.status(400).json({ error: 'Invalid cityName provided' });
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === 200) {
      const cityName = data.name;
      const temperature = data.main.temp;
      res.send({ city: cityName, temperature: temperature });
    } else {
      res.status(400).send({ msg: `The city ${cityName} is not found!` });
    }
  } catch (error) {
    res
      .status(404)
      .send({ msg: `Error fetching weather data for ${cityName}` });
  }
});

export default app;
