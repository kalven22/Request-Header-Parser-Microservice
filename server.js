var express = require('express');
var app = express();

var cors = require('cors');

app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204


app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami",  function (req, res, next) {
  
  var ip = req.ip;
  var preferredLanguages = req.get('Accept-Language');
  var userAgent = req.get('User-Agent');
  res.json({
    "ipaddress": ip, "language": preferredLanguages, "software": userAgent
  });
});



// listen for requests
var listener = app.listen(1234, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
