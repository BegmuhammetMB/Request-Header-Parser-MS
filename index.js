require('dotenv').config();
var express = require('express');
var app = express();

// Enable CORS
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files
app.use(express.static('public'));

// Serve index.html for root route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint for hello
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// API endpoint for whoami
app.get('/api/whoami', function (req, res) {
  res.json({
    ipaddress: req.ip,
    language: req.get('Accept-Language') || 'en-US',
    software: req.get('User-Agent') || 'Unknown'
  });
});

// Listen on port set in environment variable or default to 7000
var listener = app.listen(process.env.PORT || 7000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});