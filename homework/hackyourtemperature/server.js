import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});

app.post('/weather', (req, res) => {
  const cityName = req.body.cityName;
  if (!cityName) {
    res.status(404).send('City name is required!');
  } else {
    res.send(`City name ${cityName} added!`);
  }
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`),
);
