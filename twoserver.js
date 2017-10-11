const express = require('express');
const app = express();
const app2 = express();

var port1 = 7000;
var port2 = 7500;

app.get('/*', function (req, res) {
    // req.host doesn't have the port. req.get('host') does
  /* 
  var port = req.get('host').split(':');
  if (port[1] == port1)
      handleRequestOne(req, res);
  else
      handleRequestTwo(req, res);
  */
  handleRequestOne(req, res);
});

app2.get('/*', function(req, res) {
  handleRequestTwo(req, res);
});


function handleRequestOne(request, response) {
  response.send("You're a JavaScript mastermind!");
}

function handleRequestTwo(request, response) {
  response.send("JavaScript must not be your forte.");
}

app.listen(port1, function () {
  console.log(`Example app listening on port ${port1}!`);
});

app2.listen(port2, function () {
  console.log(`Example app listening on port ${port2}!`);
});