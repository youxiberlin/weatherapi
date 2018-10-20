const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();



app.get('/api/weather', (req, res) => {
  const apikey = process.env.APIKEY;
  const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=2950159&appid=' + apikey;

  fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      res.send({ data })
    })
    .catch(err => {
      res.redirect('/error')
    })
});

app.get('/api/weather/now', (req, res) => {
  const apikey = process.env.APIKEY;
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?id=2950159&appid=' + apikey;
  fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      res.send({ data })
    })
    .catch(err => {
      res.redirect('/error')
    })
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));